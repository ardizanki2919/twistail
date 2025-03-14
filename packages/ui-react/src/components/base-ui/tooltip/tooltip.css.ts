import { type VariantProps, tv } from 'tailwind-variants'

const tooltipStyles = tv({
  slots: {
    content: [
      // base
      'max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-sm',
      // text color
      'text-gray-50 dark:text-gray-900',
      // background color
      'bg-gray-900 dark:bg-gray-50',
      // transition
      'will-change-[transform,opacity]',
      'data-[side=top]:animate-slide-up-fade data-[side=bottom]:animate-slide-down-fade',
      'data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade',
      'data-[state=closed]:animate-hide',
    ],
    arrow: 'border-none fill-gray-900 dark:fill-gray-50',
  },
})

type TooltipStyles = VariantProps<typeof tooltipStyles>

export { tooltipStyles, type TooltipStyles }
