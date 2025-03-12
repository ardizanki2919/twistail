import { type VariantProps, tv } from 'tailwind-variants'

const toastStyles = tv({
  slots: {
    toast:
      'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:text-muted-foreground',
    actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
    cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
    icon: 'size-4',
  },
})

type ToastStyles = VariantProps<typeof toastStyles>

export { toastStyles, type ToastStyles }
