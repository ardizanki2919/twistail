import { type VariantProps, tv } from 'tailwind-variants'

const toggleStyles = tv({
  slots: {
    base: [
      // base
      'group inline-flex h-9 min-w-9 items-center justify-center gap-2 rounded-md border px-2 text-sm font-medium shadow-xs transition-all duration-150 ease-in-out',
      'border-gray-300 dark:border-gray-800',
      // text color
      'text-gray-700 dark:text-gray-300',
      // background color
      'bg-white dark:bg-gray-950',
      //hover color
      'hover:bg-gray-50 dark:hover:bg-gray-900/60',
      // disabled
      'disabled:pointer-events-none disabled:text-gray-400 disabled:dark:text-gray-600',
      'data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 dark:data-[state=on]:bg-gray-800 dark:data-[state=on]:text-gray-50',
      'outline-0 outline-offset-2 focus-visible:outline-2 outline-blue-500 dark:outline-blue-500' /* focusRing */,
    ],
    group: 'flex flex-nowrap items-center justify-center gap-1',
  },
})

type ToggleStyles = VariantProps<typeof toggleStyles>

export { toggleStyles, type ToggleStyles }
