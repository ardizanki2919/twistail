import { type VariantProps, tv } from 'tailwind-variants'

const kbdStyles = tv({
  base: [
    'flex h-5 min-w-5 items-center justify-center rounded-sm bg-secondary p-1 border border-border',
    'text-center font-medium text-secondary-foreground text-xs tracking-tight shadow-xs w-auto gap-2 px-1',
  ],
})

type KbdStyles = VariantProps<typeof kbdStyles>

export { kbdStyles, type KbdStyles }
