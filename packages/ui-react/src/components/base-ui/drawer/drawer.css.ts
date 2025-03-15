import { type VariantProps, tv } from 'tailwind-variants'

const drawerStyles = tv({
  slots: {
    trigger: [],
    close: [],
    portal: [],
    overlay: [
      'fixed inset-0 z-50 overflow-y-auto bg-black/30',
      'data-[state=closed]:animate-hide data-[state=open]:animate-dialog-overlay-show',
    ],
    content: [
      // base
      'fixed z-50 mx-auto flex flex-1 flex-col overflow-y-auto border p-4 shadow-md sm:p-6',
      // border color
      'border-gray-200 dark:border-gray-900',
      // background color
      'bg-white dark:bg-gray-950',
      // focus ring
      'outline-0 outline-blue-500 outline-offset-2 focus:outline-hidden focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    headerRoot: [
      'flex items-start justify-between gap-x-4 border-gray-200 border-b pb-4 dark:border-gray-900',
    ],
    header: 'mt-1 flex flex-col gap-y-1',
    headerCloseButton: 'aspect-square p-1 hover:bg-gray-100 hover:dark:bg-gray-400/10',
    headerCloseIcon: 'size-5',
    title: 'font-semibold text-base text-gray-900 dark:text-gray-50',
    body: 'flex-1 py-4',
    description: 'text-gray-500 dark:text-gray-500',
    footer: [
      'flex flex-col-reverse border-gray-200 border-t pt-4 sm:pt-5 sm:flex-row sm:justify-end sm:space-x-2 dark:border-gray-900',
    ],
  },
  variants: {
    side: {
      top: {
        content: [
          'inset-x-0 top-0 border-b w-full min-w-full rounded-b-md',
          'data-[state=closed]:animate-drawer-slide-top-out data-[state=open]:animate-drawer-slide-top-in',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t w-full min-w-full rounded-t-md',
          'data-[state=closed]:animate-drawer-slide-bottom-out data-[state=open]:animate-drawer-slide-bottom-in',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 border-r size-full sm:max-w-lg sm:rounded-r-md',
          'data-[state=closed]:animate-drawer-slide-left-out data-[state=open]:animate-drawer-slide-left-in',
        ],
      },
      right: {
        content: [
          'inset-y-0 right-0 border-l size-full sm:max-w-lg sm:rounded-l-md',
          'data-[state=closed]:animate-drawer-slide-right-out data-[state=open]:animate-drawer-slide-right-in',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

type DrawerStyles = VariantProps<typeof drawerStyles>

export { drawerStyles, type DrawerStyles }
