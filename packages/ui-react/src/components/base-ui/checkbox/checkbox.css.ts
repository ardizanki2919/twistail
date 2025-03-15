import { type VariantProps, tv } from 'tailwind-variants'

const checkboxStyles = tv({
  slots: {
    root: [
      // base
      'relative inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded-sm',
      'shadow-xs outline-hidden ring-1 ring-inset transition duration-150 enabled:cursor-pointer',
      // text color
      'text-white dark:text-gray-50',
      // background color
      'bg-white dark:bg-gray-950',
      // ring color
      'ring-gray-300 dark:ring-gray-800',
      // disabled
      'data-[disabled]:bg-gray-100 data-[disabled]:text-gray-400 data-[disabled]:ring-gray-300',
      'data-[disabled]:dark:bg-gray-800 data-[disabled]:dark:text-gray-500 data-[disabled]:dark:ring-gray-700',
      // checked and enabled
      'enabled:data-[state=checked]:bg-blue-500 enabled:data-[state=checked]:ring-0 enabled:data-[state=checked]:ring-transparent',
      // indeterminate
      'enabled:data-[state=indeterminate]:bg-blue-500 enabled:data-[state=indeterminate]:ring-0 enabled:data-[state=indeterminate]:ring-transparent',
      // focus
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    indicator: 'flex size-full items-center justify-center',
  },
})

type CheckboxStyles = VariantProps<typeof checkboxStyles>

export { checkboxStyles, type CheckboxStyles }
