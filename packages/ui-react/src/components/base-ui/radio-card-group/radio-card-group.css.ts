import { type VariantProps, tv } from 'tailwind-variants'

const radioCardGroupStyles = tv({
  slots: {
    root: 'grid gap-2',
    item: [
      // base
      'group relative w-full rounded-md border p-4 text-left shadow-xs transition focus:outline-hidden',
      // background color
      'bg-white dark:bg-gray-950',
      // border color
      'border-gray-300 dark:border-gray-800',
      'data-[state=checked]:border-blue-500',
      'data-[state=checked]:dark:border-blue-500',
      // disabled
      'data-[disabled]:border-gray-100 data-[disabled]:dark:border-gray-800',
      'data-[disabled]:bg-gray-50 data-[disabled]:shadow-none data-[disabled]:dark:bg-gray-900',
      'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:dark:border-blue-700 focus:dark:ring-blue-700/30' /* focusInput */,
    ],
    indicatorContainer: [
      // base
      'relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-xs outline-hidden',
      // border color
      'border-gray-300 dark:border-gray-800',
      // background color
      'bg-white dark:bg-gray-950',
      // checked
      'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-blue-500',
      // disabled
      'group-data-[disabled]:border-gray-300 group-data-[disabled]:bg-gray-100 group-data-[disabled]:text-gray-400',
      'group-data-[disabled]:dark:border-gray-700 group-data-[disabled]:dark:bg-gray-800',
      // focus
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    indicator: 'flex items-center justify-center',
    indicatorInner: [
      // base
      'size size-1.5 shrink-0 rounded-full',
      // indicator
      'bg-white',
      // disabled
      'group-data-[disabled]:bg-gray-400 group-data-[disabled]:dark:bg-gray-500',
    ],
  },
})

type RadioCardGroupStyles = VariantProps<typeof radioCardGroupStyles>

export { radioCardGroupStyles, type RadioCardGroupStyles }
