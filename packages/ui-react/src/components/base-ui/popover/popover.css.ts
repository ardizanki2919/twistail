import { type VariantProps, tv } from 'tailwind-variants'

const popoverStyles = tv({
  base: [
    'max-h-[var(--radix-popper-available-height)] min-w-60 overflow-hidden rounded-md border p-2.5 text-sm shadow-sm',
    'bg-popover text-popover-foreground border-border will-change-[transform,opacity] data-[state=closed]:animate-hide',
    'data-[state=open]:data-[side=bottom]:animate-slide-down-fade data-[state=open]:data-[side=left]:animate-slide-down-fade',
    'data-[state=open]:data-[side=right]:animate-slide-right-fade data-[state=open]:data-[side=top]:animate-slide-up-fade',
  ],
})

type PopoverStyles = VariantProps<typeof popoverStyles>

export { popoverStyles, type PopoverStyles }
