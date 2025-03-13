import { type VariantProps, tv } from 'tailwind-variants'

const calloutStyles = tv({
  base: 'flex flex-col overflow-hidden rounded-md p-4 text-sm',
  slots: {
    header: 'flex items-start',
    icon: 'mr-1.5 size-5 shrink-0',
    title: 'font-semibold',
    content: 'overflow-y-auto',
    contentWithChildren: 'mt-2',
  },
  variants: {
    variant: {
      default: {
        base: [
          // text color
          'text-blue-900 dark:text-blue-400',
          // background color
          'bg-blue-50 dark:bg-blue-950/70',
        ],
      },
      success: {
        base: [
          // text color
          'text-emerald-900 dark:text-emerald-500',
          // background color
          'bg-emerald-50 dark:bg-emerald-950/70',
        ],
      },
      error: {
        base: [
          // text color
          'text-red-900 dark:text-red-500',
          // background color
          'bg-red-50 dark:bg-red-950/70',
        ],
      },
      warning: {
        base: [
          // text color
          'text-yellow-900 dark:text-yellow-500',
          // background color
          'bg-yellow-50 dark:bg-yellow-950/70',
        ],
      },
      neutral: {
        base: [
          // text color
          'text-gray-900 dark:text-gray-400',
          // background color
          'bg-gray-100 dark:bg-gray-800/70',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CalloutStyles = VariantProps<typeof calloutStyles>

export { calloutStyles, type CalloutStyles }
