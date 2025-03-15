import { type VariantProps, tv } from 'tailwind-variants'

const contextMenuStyles = tv({
  slots: {
    subMenuTrigger: [
      // base
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-1 pl-2 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600',
      // focus
      'focus-visible:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:dark:bg-gray-900 focus-visible:dark:bg-gray-900',
      // hover
      'hover:bg-gray-100 hover:dark:bg-gray-900',
    ],
    subMenuTriggerIcon: 'ml-auto size-4 shrink-0',
    subMenuContent: [
      // base
      'relative z-50 overflow-hidden rounded-md border p-1 shadow-black/[2.5%] shadow-lg',
      // widths
      'min-w-32',
      // heights
      'max-h-[var(--radix-popper-available-height)]',
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
    content: [
      // base
      'relative z-50 overflow-hidden rounded-md border p-1 shadow-black/[2.5%] shadow-lg',
      // widths
      'min-w-48',
      // heights
      'max-h-[var(--radix-popper-available-height)]',
      // background color
      'bg-white dark:bg-gray-950',
      // text color
      'text-gray-900 dark:text-gray-50',
      // border color
      'border-gray-200 dark:border-gray-800',
      // transition
      'will-change-[transform,opacity]',
      'data-[state=closed]:animate-hide',
      'data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    item: [
      // base
      'group/DropdownMenuItem relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pr-1 pl-2 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600',
      // focus
      'focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900',
      // hover
      'hover:bg-gray-100 hover:dark:bg-gray-900',
    ],
    itemHint: 'ml-auto pl-2 text-gray-400 text-sm dark:text-gray-600',
    checkboxItem: [
      // base
      'relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600',
      // focus
      'focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900',
      // hover
      'hover:bg-gray-100 hover:dark:bg-gray-900',
    ],
    checkboxItemIndicator: 'absolute left-2 flex size-4 items-center justify-center',
    checkboxItemIndicatorIcon: 'size-full shrink-0 text-gray-800 dark:text-gray-200',
    checkboxItemHint: 'ml-auto font-normal text-gray-400 text-sm dark:text-gray-600',
    checkboxItemShortcut: [
      'ml-auto font-normal text-gray-400 text-sm tracking-widest dark:border-gray-800 dark:text-gray-600',
    ],
    radioItem: [
      // base
      'group/DropdownMenuRadioItem relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
      // text color
      'text-gray-900 dark:text-gray-50',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600',
      // focus
      'focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900',
      // hover
      'hover:bg-gray-100 hover:dark:bg-gray-900',
    ],
    radioItemIndicator: 'absolute left-2 flex size-4 items-center justify-center',
    radioItemIndicatorIconCheck: [
      'size-full shrink-0 text-blue-500 group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden dark:text-blue-500',
    ],
    radioItemIndicatorIconCircle: [
      'size-full shrink-0 text-gray-300 group-data-[state=unchecked]/DropdownMenuRadioItem:flex group-data-[state=checked]/DropdownMenuRadioItem:hidden dark:text-gray-700',
    ],
    radioItemHint: 'ml-auto font-normal text-gray-400 text-sm dark:text-gray-600',
    radioItemShortcut: [
      'ml-auto font-normal text-gray-400 text-sm tracking-widest dark:border-gray-800 dark:text-gray-600',
    ],
    label: [
      // base
      'px-2 py-2 font-medium text-xs tracking-wide',
      // text color
      'text-gray-500 dark:text-gray-500',
    ],
    separator: '-mx-1 my-1 h-px border-gray-200 border-t dark:border-gray-800',
    iconWrapper: [
      // text color
      'text-gray-600 dark:text-gray-400',
      // disabled
      'group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700',
    ],
  },
  variants: {
    inset: {
      true: {
        subMenuTrigger: 'pl-8',
        item: 'pl-8',
        label: 'pl-8',
      },
    },
  },
})

type ContextMenuStyles = VariantProps<typeof contextMenuStyles>

export { contextMenuStyles, type ContextMenuStyles }
