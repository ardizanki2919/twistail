import { type VariantProps, tv } from 'tailwind-variants'

const drawerStyles = tv({
  slots: {
    trigger: [],
    close: [],
    portal: [],
    overlay: [
      'fixed inset-0 z-50 overflow-y-auto bg-black/40 dark:bg-black/80',
      'data-[state=closed]:animate-hide data-[state=open]:animate-dialog-overlay-show',
    ],
    content: [
      'fixed z-50 mx-auto flex flex-1 flex-col overflow-y-auto border p-4 shadow-md sm:p-6 bg-card text-card-foreground border-border',
      'outline-0 outline-primary outline-offset-2 focus:outline-hidden focus-visible:outline-2',
    ],
    header: [
      'flex flex-col space-y-1 text-center sm:text-left gap-x-4 border-b border-border pb-4 mt-1',
    ],
    closeButton: [
      'aspect-square p-1 hover:bg-accent hover:text-accent-foreground absolute right-4 top-4 rounded-md',
      'opacity-70 ring-offset-background transition-opacity hover:opacity-100 data-[state=open]:bg-secondary',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
    ],
    closeIcon: 'size-5',
    title: 'font-semibold text-base text-foreground',
    body: 'flex-1 p-0',
    description: 'text-muted-foreground',
    footer: [
      'flex flex-col-reverse border-t pt-4 sm:pt-5 sm:flex-row sm:justify-end sm:space-x-2 border-border',
    ],
  },
  variants: {
    side: {
      top: {
        content: [
          'inset-x-0 top-0 border-b w-full min-w-full rounded-b-lg',
          'data-[state=closed]:animate-drawer-slide-top-out data-[state=open]:animate-drawer-slide-top-in',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t w-full min-w-full rounded-t-lg',
          'data-[state=closed]:animate-drawer-slide-bottom-out data-[state=open]:animate-drawer-slide-bottom-in',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 border-r size-full sm:max-w-lg sm:rounded-r-lg',
          'data-[state=closed]:animate-drawer-slide-left-out data-[state=open]:animate-drawer-slide-left-in',
        ],
      },
      right: {
        content: [
          'inset-y-0 right-0 border-l size-full sm:max-w-lg sm:rounded-l-lg',
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
