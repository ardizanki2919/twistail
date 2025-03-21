import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.@(mdx|stories.@(ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@chromatic-com/storybook',
  ],
  managerHead: (head, { configType }) => {
    /* @see: https://github.com/storybookjs/storybook/issues/21627#issuecomment-1645573706 */
    if (configType === 'PRODUCTION') {
      return `<base href="/">${head}`
    }
  },
  framework: { name: '@storybook/react-vite', options: { strictMode: true } },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    enableCrashReports: false, // 👈 Appends the crash reports to the telemetry events
    disableWhatsNewNotifications: true, // 👈 Disables the Whats New notifications
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite')
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      ...(configType === 'PRODUCTION'
        ? {
            base: '/',
            build: {
              chunkSizeWarningLimit: 1024 * 4,
              rollupOptions: {
                onwarn(warning: any, warn: any) {
                  if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return
                  }
                  warn(warning)
                },
              },
            },
          }
        : {}),
    })
  },
}

export default config
