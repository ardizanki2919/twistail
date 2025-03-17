import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { styleText } from 'node:util'
import { compile } from '@tailwindcss/node'
import react from '@vitejs/plugin-react'
import fg from 'fast-glob'
import { transform } from 'lightningcss'
import { extname, relative, resolve } from 'pathe'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' with { type: 'json' }

const globFiles = await fg.glob(['src/components/**/*.{ts,tsx}'], {
  ignore: ['src/components/**/*.d.ts'],
  onlyFiles: true,
})

const inputGlob = Object.fromEntries(
  globFiles.map((file) => [
    relative('src/components', file.slice(0, file.length - extname(file).length)),
    fileURLToPath(new URL(file, import.meta.url)),
  ])
)

// Optimize CSS using LightningCSS
function optimizeCss(
  input: string,
  { file = 'input.css', minify = false }: { file?: string; minify?: boolean } = {}
) {
  function optimize(code: Buffer | Uint8Array | any) {
    return transform({
      filename: file,
      code,
      minify,
      sourceMap: false,
      drafts: {
        customMedia: true,
      },
      nonStandard: {
        deepSelectorCombinator: true,
      },
      include: 1, // LightningCssFeatures.Nesting
      exclude: 8 | 16 | 32, // LogicalProperties | DirSelector | LightDark
      targets: {
        safari: (16 << 16) | (4 << 8),
        ios_saf: (16 << 16) | (4 << 8),
        firefox: 128 << 16,
        chrome: 111 << 16,
      },
      errorRecovery: true,
    }).code
  }

  // Running Lightning CSS twice to ensure that adjacent rules are merged after
  // nesting is applied. This creates a more optimized output.
  return optimize(optimize(Buffer.from(input))).toString()
}

// Function to compile a Tailwind CSS file
async function compileTailwindCss(sourcePath: string, outputPath: string, isProduction: boolean) {
  // Get relative paths for logging
  const relativeSourcePath = relative(process.cwd(), sourcePath)
  const relativeOutputPath = relative(process.cwd(), outputPath)

  console.info(
    `Compiling ${styleText('cyan', relativeSourcePath)} to ${styleText('green', relativeOutputPath)}...`
  )

  try {
    // Read the source CSS file
    const cssContent = await fs.readFile(sourcePath, 'utf-8')

    // Compile Tailwind CSS
    const compiler = await compile(cssContent, {
      base: path.dirname(sourcePath),
      onDependency: (depPath: string) => {
        // Also show relative path for dependencies
        const relativePath = relative(process.cwd(), depPath)
        console.info(`Dependency detected: ${styleText('yellow', relativePath)}`)
      },
    })

    // Generate CSS using the build function
    const result = compiler.build([])

    // Ensure output directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true })

    if (isProduction) {
      // Optimize CSS in production mode
      const optimized = optimizeCss(result, {
        file: path.basename(outputPath),
        minify: process.env.NODE_ENV === 'production',
      })

      // Write optimized CSS to output file
      await fs.writeFile(outputPath, optimized)
      console.info(
        `Successfully compiled ${styleText('cyan', relativeSourcePath)} to ${styleText('green', relativeOutputPath)} ${styleText('magenta', '(optimized)')}`
      )
    } else {
      // Write unoptimized CSS in development mode
      await fs.writeFile(outputPath, result)
      console.info(
        `Successfully compiled ${styleText('cyan', relativeSourcePath)} to ${styleText('green', relativeOutputPath)}`
      )
    }
  } catch (error) {
    console.error(`Failed to compile ${styleText('red', relativeSourcePath)}:`, error)
    throw error
  }
}

// Custom Vite plugin for compiling Tailwind CSS files
function tailwindcssPlugin() {
  // Define source and target file mappings
  const cssFiles = [
    {
      source: 'src/styles/global.css',
      target: 'dist/styles/global.css',
    },
    {
      source: 'src/styles/theme.css',
      target: 'dist/styles/theme.css',
    },
  ]

  return {
    name: 'tailwindcss-plugin',
    async closeBundle() {
      console.info(styleText('blue', 'Compiling Tailwind CSS files...'))
      const isProduction = process.env.NODE_ENV === 'production'

      try {
        // Compile all CSS files in parallel
        await Promise.all(
          cssFiles.map(({ source, target }) => {
            return compileTailwindCss(resolve(source), resolve(target), isProduction)
          })
        )

        console.info(styleText('green', 'All Tailwind CSS files compiled successfully'))
      } catch (error) {
        console.error(styleText('red', 'Tailwind CSS compilation failed:'), error)
        throw error
      }
    },
  }
}

export default defineConfig({
  server: { port: 5173, strictPort: true, host: false },
  plugins: [react(), dts({ include: ['src/components'] }), tsconfigPaths(), tailwindcssPlugin()],
  build: {
    lib: {
      entry: resolve('src/components/index.ts'),
      formats: ['es'],
    },
    emptyOutDir: true,
    copyPublicDir: false,
    minify: process.env.NODE_ENV === 'production',
    cssMinify: process.env.NODE_ENV === 'production',
    outDir: resolve('dist'),
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {})],
      input: inputGlob,
      output: {
        exports: 'named',
        entryFileNames: '[name].js',
        chunkFileNames: '_chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        reexportProtoFromExternal: false,
        banner: "'use client';",
      },
    },
  },
})
