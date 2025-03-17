import { type VariantProps, tv } from 'tailwind-variants'

const radioGroupStyles = tv({
  slots: {
    root: 'grid gap-2',
    indicator: 'flex items-center justify-center',
    indicatorInner: [
      'size-1.5 shrink-0 rounded-full bg-primary-foreground group-data-[disabled]:bg-muted-foreground',
    ],
    item: 'group relative flex size-4 appearance-none items-center justify-center outline-hidden',
    itemInner: [
      'flex size-4 shrink-0 items-center justify-center rounded-full border shadow-xs border-input bg-background',
      'group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-primary',
      'group-data-[disabled]:border group-data-[disabled]:border-input group-data-[disabled]:bg-muted group-data-[disabled]:text-muted-foreground',
      'outline-0 outline-primary outline-offset-2 focus-visible:outline-2',
    ],
  },
})

type RadioGroupStyles = VariantProps<typeof radioGroupStyles>

export { radioGroupStyles, type RadioGroupStyles }
