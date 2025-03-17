import { type VariantProps, tv } from 'tailwind-variants'

const radioCardGroupStyles = tv({
  slots: {
    root: 'grid gap-2',
    item: [
      'group relative w-full rounded-md border p-4 text-left shadow-xs transition focus:outline-hidden',
      'bg-card text-card-foreground border-input focus:border-primary focus:ring-2 focus:ring-primary/20',
      'data-[state=checked]:border-primary data-[disabled]:border-muted data-[disabled]:bg-muted data-[disabled]:shadow-none',
    ],
    indicatorContainer: [
      'relative flex size-4 shrink-0 appearance-none items-center justify-center rounded-full border shadow-xs outline-hidden',
      'border-input bg-background outline-0 outline-primary outline-offset-2 focus-visible:outline-2',
      'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-primary',
      'group-data-[disabled]:border-input group-data-[disabled]:bg-muted group-data-[disabled]:text-muted-foreground',
    ],
    indicator: 'flex items-center justify-center',
    indicatorInner: [
      'size size-1.5 shrink-0 rounded-full bg-primary-foreground group-data-[disabled]:bg-muted-foreground',
    ],
  },
})

type RadioCardGroupStyles = VariantProps<typeof radioCardGroupStyles>

export { radioCardGroupStyles, type RadioCardGroupStyles }
