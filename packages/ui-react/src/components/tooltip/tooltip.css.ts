import { type VariantProps, tv } from 'tailwind-variants'

const tooltipStyles = tv({
  slots: {
    content: [
      'max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-xs',
      'bg-popover text-popover-foreground border border-border will-change-[transform,opacity]',
      'data-[side=top]:animate-slide-up-fade data-[side=bottom]:animate-slide-down-fade',
      'data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade',
      'data-[state=closed]:animate-hide',
    ],
    arrow: 'hidden',
  },
  variants: {
    showArrow: {
      true: {
        content: [
          'after:content-[""] after:absolute after:size-3 after:rotate-45 after:bg-popover after:border-r after:border-b after:border-border',
          'data-[side=top]:after:bottom-[-6px] data-[side=top]:after:left-[50%] data-[side=top]:after:translate-x-[-50%]',
          'data-[side=bottom]:after:top-[-6px] data-[side=bottom]:after:left-[50%] data-[side=bottom]:after:translate-x-[-50%] data-[side=bottom]:after:border-t data-[side=bottom]:after:border-l data-[side=bottom]:after:border-r-0 data-[side=bottom]:after:border-b-0',
          'data-[side=left]:after:right-[-6px] data-[side=left]:after:top-[50%] data-[side=left]:after:translate-y-[-50%] data-[side=left]:after:border-t data-[side=left]:after:border-r data-[side=left]:after:border-l-0 data-[side=left]:after:border-b-0',
          'data-[side=right]:after:left-[-6px] data-[side=right]:after:top-[50%] data-[side=right]:after:translate-y-[-50%] data-[side=right]:after:border-b data-[side=right]:after:border-l data-[side=right]:after:border-r-0 data-[side=right]:after:border-t-0',
        ],
      },
    },
  },
})

type TooltipStyles = VariantProps<typeof tooltipStyles>

export { tooltipStyles, type TooltipStyles }
