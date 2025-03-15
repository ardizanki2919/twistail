import { type VariantProps, tv } from 'tailwind-variants'

const popoverStyles = tv({
  base: [
    // base
    'max-h-[var(--radix-popper-available-height)] min-w-60 overflow-hidden rounded-md border p-2.5 text-sm shadow-sm',
    // border color
    'border-gray-200 dark:border-gray-800',
    // text color
    'text-gray-900 dark:text-gray-50',
    // background color
    'bg-white dark:bg-gray-950',
    // transition
    'will-change-[transform,opacity]',
    'data-[state=closed]:animate-hide',
    'data-[state=open]:data-[side=bottom]:animate-slide-down-fade data-[state=open]:data-[side=left]:animate-slide-down-fade data-[state=open]:data-[side=right]:animate-slide-right-fade data-[state=open]:data-[side=top]:animate-slide-up-fade',
  ],
})

type PopoverStyles = VariantProps<typeof popoverStyles>

export { popoverStyles, type PopoverStyles }
