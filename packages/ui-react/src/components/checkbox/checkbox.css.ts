import { type VariantProps, tv } from 'tailwind-variants'

const checkboxStyles = tv({
  slots: {
    root: [
      'relative inline-flex size-4 shrink-0 appearance-none items-center justify-center rounded-sm',
      'shadow-xs ring-1 ring-inset transition duration-150 enabled:cursor-pointer text-primary-foreground bg-background ring-border',
      'data-[disabled]:bg-muted data-[disabled]:text-muted-foreground data-[disabled]:ring-border',
      'enabled:data-[state=checked]:bg-primary enabled:data-[state=checked]:ring-0 enabled:data-[state=checked]:ring-transparent',
      'enabled:data-[state=indeterminate]:bg-primary enabled:data-[state=indeterminate]:ring-0 enabled:data-[state=indeterminate]:ring-transparent',
      'outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    ],
    indicator: 'flex size-full items-center justify-center',
  },
})

type CheckboxStyles = VariantProps<typeof checkboxStyles>

export { checkboxStyles, type CheckboxStyles }
