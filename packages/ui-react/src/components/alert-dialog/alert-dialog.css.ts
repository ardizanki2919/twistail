import { type VariantProps, tv } from 'tailwind-variants'

const alertDialogStyles = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50 overflow-y-auto bg-black/40 dark:bg-black/80',
      'data-[state=open]:animate-dialog-overlay-show data-[state=closed]:animate-dialog-overlay-hide',
    ],
    content: [
      '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-lg overflow-y-auto rounded-lg border shadow-sm p-6',
      'bg-card text-card-foreground border-border outline-0 outline-primary outline-offset-2 focus-visible:outline-2 transition-colors duration-200',
      'data-[state=open]:animate-dialog-content-show data-[state=closed]:animate-dialog-content-hide',
    ],
    header: 'flex flex-col space-y-1.5',
    title: 'font-semibold leading-none tracking-tight text-foreground text-lg',
    description: 'text-sm text-muted-foreground mt-1',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 gap-2 sm:gap-0',
    divider: 'mx-0 my-6 border-border border-t',
  },
  variants: {
    spacing: {
      default: {},
      compact: {
        content: 'p-5',
        footer: 'mt-5',
        divider: 'my-5',
      },
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})

type AlertDialogStyles = VariantProps<typeof alertDialogStyles>

export { alertDialogStyles, type AlertDialogStyles }
