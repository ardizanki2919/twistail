import { type VariantProps, tv } from 'tailwind-variants'

const dialogStyles = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50 overflow-y-auto bg-muted/90',
      'data-[state=open]:animate-dialog-overlay-show data-[state=closed]:animate-dialog-overlay-hide',
    ],
    content: [
      '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 w-[95vw] max-w-lg overflow-y-auto rounded-md border p-6 shadow-md',
      'bg-card text-card-foreground border-border outline-0 outline-primary outline-offset-2 focus-visible:outline-2',
      'data-[state=open]:animate-dialog-content-show data-[state=closed]:animate-dialog-content-hide',
    ],
    header: 'flex flex-col gap-y-1',
    title: 'font-semibold text-lg text-foreground',
    description: 'text-muted-foreground',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  },
})

type DialogStyles = VariantProps<typeof dialogStyles>

export { dialogStyles, type DialogStyles }
