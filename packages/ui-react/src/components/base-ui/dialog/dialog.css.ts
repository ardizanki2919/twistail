import { type VariantProps, tv } from 'tailwind-variants'

const dialogStyles = tv({
  slots: {
    overlay: [
      // base
      'fixed inset-0 z-50 overflow-y-auto',
      // background color
      'bg-black/70',
      // transition
      'data-[state=open]:animate-dialog-overlay-show',
    ],
    content: [
      // base
      '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-lg overflow-y-auto rounded-md border p-6 shadow-md',
      // border color
      'border-gray-200 dark:border-gray-900',
      // background color
      'bg-white dark:bg-gray-950',
      // transition
      'data-[state=open]:animate-dialog-content-show',
      // focus ring
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    header: 'flex flex-col gap-y-1',
    title: 'font-semibold text-lg text-gray-900 dark:text-gray-50',
    description: 'text-gray-500 dark:text-gray-400',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  },
})

type DialogStyles = VariantProps<typeof dialogStyles>

export { dialogStyles, type DialogStyles }
