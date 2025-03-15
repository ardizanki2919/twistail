import { type VariantProps, tv } from 'tailwind-variants'

const radioGroupStyles = tv({
  slots: {
    root: 'grid gap-2',
    indicator: 'flex items-center justify-center',
    indicatorInner: [
      // base
      'size-1.5 shrink-0 rounded-full',
      // indicator
      'bg-white',
      // disabled
      'group-data-[disabled]:bg-gray-400 group-data-[disabled]:dark:bg-gray-500',
    ],
    item: 'group relative flex size-4 appearance-none items-center justify-center outline-hidden',
    itemInner: [
      // base
      'flex size-4 shrink-0 items-center justify-center rounded-full border shadow-xs',
      // border color
      'border-gray-300 dark:border-gray-800',
      // background color
      'bg-white dark:bg-gray-950',
      // checked
      'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500',
      // disabled
      'group-data-[disabled]:border',
      'group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400',
      'group-data-[disabled]:dark:border-gray-700 group-data-[disabled]:dark:bg-gray-800',
      // focus
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
  },
})

type RadioGroupStyles = VariantProps<typeof radioGroupStyles>

export { radioGroupStyles, type RadioGroupStyles }
