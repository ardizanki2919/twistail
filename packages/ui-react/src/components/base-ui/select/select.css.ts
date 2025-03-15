import { type VariantProps, tv } from 'tailwind-variants'

const selectStyles = tv({
  base: [
    // base
    'peer w-full cursor-pointer appearance-none truncate rounded-md border py-2 pl-3 pr-7 shadow-xs outline-hidden transition-all sm:text-sm',
    // background color
    'bg-white dark:bg-gray-950',
    // border color
    'border-gray-300 dark:border-gray-800',
    // text color
    'text-gray-900 dark:text-gray-50',
    // placeholder color
    'placeholder-gray-400 dark:placeholder-gray-500',
    // hover
    'hover:bg-gray-50 hover:dark:bg-gray-950/50',
    // disabled
    'disabled:pointer-events-none',
    'disabled:bg-gray-100 disabled:text-gray-400',
    'disabled:dark:border-gray-800 disabled:dark:bg-gray-900 disabled:dark:text-gray-500',
    // focus
    'focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:dark:border-blue-700 focus:dark:ring-blue-700/30' /* focusInput */,
    // invalid (optional)
    // 'aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500',
  ],
  variants: {
    hasError: {
      true: 'ring-2 border-red-500 dark:border-red-700 ring-red-200 dark:ring-red-700/30' /* hasErrorInput */,
    },
  },
})

type SelectStyles = VariantProps<typeof selectStyles>

export { selectStyles, type SelectStyles }
