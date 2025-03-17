import { type VariantProps, tv } from 'tailwind-variants'

const switchStyles = tv({
  slots: {
    root: [
      'group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5',
      'shadow-inner outline-hidden ring-1 ring-inset transition-all bg-muted ring-border/50',
      'data-[state=checked]:bg-primary data-[disabled]:cursor-default',
      'data-[disabled]:data-[state=checked]:bg-primary/50 data-[disabled]:data-[state=checked]:ring-border',
      'data-[disabled]:data-[state=unchecked]:ring-border data-[disabled]:data-[state=unchecked]:bg-muted',
      'outline-0 outline-offset-2 focus-visible:outline-2 outline-primary',
    ],
    thumb: [
      'pointer-events-none relative inline-block transform appearance-none rounded-full border-none',
      'shadow-md outline-hidden transition-all duration-150 ease-in-out',
      'focus:border-none focus:outline-hidden focus:outline-transparent bg-white',
      'group-data-[disabled]:shadow-none group-data-[disabled]:bg-muted-foreground',
    ],
  },
  variants: {
    size: {
      sm: {
        root: 'h-4 w-7',
        thumb: 'h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
      },
      md: {
        root: 'h-5 w-9',
        thumb: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type SwitchStyles = VariantProps<typeof switchStyles>

export { switchStyles, type SwitchStyles }
