import { type VariantProps, tv } from 'tailwind-variants'

const hoverCardStyles = tv({
  base: [
    // base
    'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
    // transition
    'will-change-[transform,opacity] data-[state=closed]:animate-hide',
    'data-[state=open]:data-[side=bottom]:animate-slide-down-fade data-[state=open]:data-[side=left]:animate-slide-down-fade',
    'data-[state=open]:data-[side=right]:animate-slide-right-fade data-[state=open]:data-[side=top]:animate-slide-up-fade',
  ],
})

type HoverCardStyles = VariantProps<typeof hoverCardStyles>

export { hoverCardStyles, type HoverCardStyles }
