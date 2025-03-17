import { type VariantProps, tv } from 'tailwind-variants'

const toggleStyles = tv({
  slots: {
    base: [
      'group inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md border px-2 text-sm',
      'font-medium shadow-xs transition-all duration-150 ease-in-out border-input bg-background text-muted-foreground',
      'hover:bg-accent hover:text-accent-foreground outline-0 outline-offset-2 focus-visible:outline-2 outline-primary',
      'disabled:pointer-events-none disabled:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    ],
    group: 'flex flex-nowrap items-center justify-center gap-1',
  },
})

type ToggleStyles = VariantProps<typeof toggleStyles>

export { toggleStyles, type ToggleStyles }
