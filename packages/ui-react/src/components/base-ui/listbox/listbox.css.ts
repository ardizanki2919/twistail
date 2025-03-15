import { type VariantProps, tv } from 'tailwind-variants'

const listboxStyles = tv({
  slots: {
    group: [],
    value: [],
    trigger: [
      // base
      'group/trigger flex w-full select-none items-center justify-between gap-2 truncate rounded-md border px-3 py-2 shadow-xs outline-hidden transition sm:text-sm',
      // border color
      'border-gray-300 dark:border-gray-800',
      // text color
      'text-gray-900 dark:text-gray-50',
      // placeholder
      'data-[placeholder]:text-gray-500 data-[placeholder]:dark:text-gray-500',
      // background color
      'bg-white dark:bg-gray-950',
      // hover
      'hover:bg-gray-50 hover:dark:bg-gray-950/50',
      // disabled
      'data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400',
      'data-[disabled]:dark:border-gray-700 data-[disabled]:dark:bg-gray-800 data-[disabled]:dark:text-gray-500',
      'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:dark:border-blue-700 focus:dark:ring-blue-700/30' /* focusInput */,
      // invalid (optional)
      // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
    ],
    triggerSpan: 'truncate',
    triggerChevrons: [
      // base
      'size-4 shrink-0',
      // text color
      'text-gray-400 dark:text-gray-600',
      // disabled
      'group-data-[disabled]/trigger:text-gray-300 group-data-[disabled]/trigger:dark:text-gray-600',
    ],
    scrollUpButton: 'flex cursor-default items-center justify-center py-1',
    scrollUpButtonIcon: 'size-3 shrink-0',
    scrollDownButton: 'flex cursor-default items-center justify-center py-1',
    scrollDownButtonIcon: 'size-3 shrink-0',
    content: [
      // base
      'relative z-50 overflow-hidden rounded-md border shadow-black/[2.5%] shadow-lg',
      // widths
      'min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[95vw]',
      // heights
      'max-h-(--radix-select-content-available-height)',
      // background color
      'bg-white dark:bg-gray-950',
      // text color
      'text-gray-900 dark:text-gray-50',
      // border color
      'border-gray-200 dark:border-gray-800',
      // transition
      'will-change-[transform,opacity]',
      // "data-[state=open]:animate-slide-down-fade",
      'data-[state=closed]:animate-hide',
      'data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    contentViewport: 'p-1',
    grouplabel: [
      // base
      'px-3 py-2 font-medium text-xs tracking-wide',
      // text color
      'text-gray-500 dark:text-gray-500',
    ],
    item: [
      // base
      'grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 rounded-sm px-3 py-2 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600',
      // focus
      'focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900',
      // hover
      'hover:bg-gray-100 hover:dark:bg-gray-900',
    ],
    itemText: 'flex-1 truncate',
    itemIndicatorIcon: 'size-5 shrink-0 text-gray-800 dark:text-gray-200',
    separator: [
      // base
      '-mx-1 my-1 h-px',
      // background color
      'bg-gray-300 dark:bg-gray-700',
    ],
  },
  variants: {
    position: {
      'item-aligned': {
        contentViewport:
          'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width))]',
      },
      popper: {},
    },
    hasError: {
      true: {
        trigger: [
          'border-red-500 ring-2 ring-red-200 dark:border-red-700 dark:ring-red-700/30' /* hasErrorInput */,
        ],
      },
    },
  },
  defaultVariants: {
    position: 'popper',
    hasError: false,
  },
})

type ListboxStyles = VariantProps<typeof listboxStyles>

export { listboxStyles, type ListboxStyles }
