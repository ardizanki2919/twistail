import { type VariantProps, tv } from 'tailwind-variants'

const buttonStyles = tv({
  slots: {
    base: [
      // base
      'relative inline-flex items-center justify-center whitespace-nowrap rounded-md',
      'border px-4 py-2 text-center font-medium text-sm shadow-xs transition-all duration-100 ease-in-out',
      // disabled
      'disabled:pointer-events-none disabled:shadow-none',
      // focus
      'outline-0 outline-offset-2 focus-visible:outline-2' /* focusRing */,
    ],
    span: 'pointer-events-none flex shrink-0 items-center justify-center gap-1.5',
    icon: 'size-4 shrink-0 animate-spin -ml-0.5',
  },
  variants: {
    variant: {
      primary: [
        // border
        'border-transparent',
        // colors
        'bg-primary text-primary-foreground hover:bg-primary/90',
        // disabled
        'disabled:bg-blue-300 disabled:text-white',
        'disabled:dark:bg-blue-800 disabled:dark:text-blue-400',
        // focus
        'outline-primary',
      ].join(' '),
      secondary: [
        // colors
        'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // disabled
        'disabled:text-gray-400',
        'disabled:dark:text-gray-600',
        // focus
        'outline-secondary',
      ].join(' '),
      outline: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // colors
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        // disabled
        'disabled:bg-gray-100 disabled:text-gray-400',
        'disabled:dark:bg-gray-800 disabled:dark:text-gray-600',
      ].join(' '),
      ghost: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // colors
        'hover:bg-accent hover:text-accent-foreground',
        // disabled
        'disabled:text-gray-400',
        'disabled:dark:text-gray-600',
        // focus
        'outline-accent',
      ].join(' '),
      destructive: [
        // border
        'border-transparent',
        // colors
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // disabled
        'disabled:bg-red-300 disabled:text-white',
        'disabled:dark:bg-red-950 disabled:dark:text-red-400',
        // focus
        'outline-destructive',
      ].join(' '),
      link: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // colors
        'text-primary underline-offset-4 hover:underline',
        // disabled
        'disabled:text-gray-400',
        'disabled:dark:text-gray-600',
        // focus
        'outline-accent',
      ].join(' '),
    },
    isLoading: {
      true: 'pointer-events-none relative cursor-wait',
      false: '',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    variant: 'primary',
    isLoading: false,
  },
})

type ButtonStyles = VariantProps<typeof buttonStyles>

export { buttonStyles, type ButtonStyles }
