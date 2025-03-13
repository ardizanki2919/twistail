import { type VariantProps, tv } from 'tailwind-variants'
import { clx } from 'twistail-utils'

const buttonStyles = tv({
  slots: {
    base: [
      'relative inline-flex items-center justify-center whitespace-nowrap',
      'text-center font-medium text-sm shadow-xs transition-all duration-100 ease-in-out',
      'disabled:pointer-events-none disabled:shadow-none',
      'outline-0 outline-offset-2 focus-visible:outline-2',
    ],
    span: 'pointer-events-none flex shrink-0 items-center justify-center gap-1.5',
    icon: 'size-4 shrink-0 -ml-0.5',
  },
  variants: {
    variant: {
      primary: clx(
        'border border-primary/30 bg-primary text-primary-foreground hover:bg-primary/90',
        'disabled:border-primary/20 disabled:bg-primary/50 disabled:text-primary-foreground/70',
        'outline-primary'
      ),
      secondary: clx(
        'border border-border bg-secondary text-secondary-foreground hover:bg-background',
        'disabled:border-border/50 disabled:bg-secondary/60 disabled:text-muted-foreground',
        'outline-secondary-foreground/10'
      ),
      outline: clx(
        'border border-border bg-background text-foreground shadow-none hover:bg-accent hover:text-accent-foreground',
        'disabled:border-border/50 disabled:bg-background disabled:text-muted-foreground',
        'outline-input'
      ),
      ghost: clx(
        'border-transparent bg-transparent text-foreground shadow-none hover:bg-accent hover:text-accent-foreground',
        'disabled:text-muted-foreground',
        'outline-accent'
      ),
      destructive: clx(
        'border border-destructive/30 bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'disabled:border-destructive/20 disabled:bg-destructive/50 disabled:text-destructive-foreground/70',
        'outline-destructive'
      ),
      link: clx(
        'border-transparent bg-transparent text-primary underline-offset-4 shadow-none hover:underline',
        'disabled:text-muted-foreground',
        'outline-primary'
      ),
    },
    size: {
      xs: 'h-7 px-2.5 text-xs',
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-8 text-base',
      xl: 'h-14 px-8 text-base',
      icon: 'size-9',
    },
    isLoading: {
      true: 'pointer-events-none relative cursor-wait',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      className: 'rounded-md py-2',
    },
    {
      variant: ['link'],
      className: 'rounded-sm px-2 py-1 h-auto',
    },
    {
      isLoading: true,
      className: { icon: 'animate-spin' },
    },
    {
      isLoading: true,
      variant: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      className: 'text-white/70',
    },
    {
      size: ['xs', 'sm'],
      className: 'px-2.5 py-2',
    },
    {
      size: ['icon'],
      className: '[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:pointer-events-none',
    },
    {
      variant: 'outline',
      size: ['icon', 'sm'],
      className: 'border',
    },
    {
      size: ['lg'],
      variant: ['ghost', 'link'],
      className: 'font-semibold tracking-wide',
    },
    {
      size: ['lg'],
      variant: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
      className: 'shadow-md',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    isLoading: false,
    size: 'md',
  },
})

type ButtonStyles = VariantProps<typeof buttonStyles>

export { buttonStyles, type ButtonStyles }
