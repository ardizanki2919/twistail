import { type VariantProps, tv } from 'tailwind-variants'

export const inputPinStyles = tv({
  slots: {
    container: 'flex items-center gap-2 has-[:disabled]:opacity-50',
    input: 'disabled:cursor-not-allowed',
    group: 'flex items-center',
    slot: [
      'relative flex items-center justify-center border-input border-y border-r text-foreground',
      'shadow-xs transition-all first:rounded-l-sm first:border-l last:rounded-r-sm',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
    ],
    slotCaretContainer: 'pointer-events-none absolute inset-0 flex items-center justify-center',
    slotCaret: 'h-4 w-px animate-caret-blink bg-foreground duration-1000',
    separator: 'flex items-center justify-center',
    separatorInner: 'rounded-full bg-border',
  },
  variants: {
    inputSize: {
      xs: {
        slot: 'size-7 text-xs font-normal',
        separator: 'w-3',
        separatorInner: 'h-0.5 w-2',
      },
      sm: {
        slot: 'size-8 text-xs font-normal',
        separator: 'w-4',
        separatorInner: 'h-0.5 w-3',
      },
      md: {
        slot: 'size-10 text-sm font-medium',
        separator: 'w-6',
        separatorInner: 'h-1 w-4',
      },
      lg: {
        slot: 'size-12 text-base font-medium',
        separator: 'w-8',
        separatorInner: 'h-1.5 w-5',
      },
      xl: {
        slot: 'size-14 text-lg font-medium',
        separator: 'w-10',
        separatorInner: 'h-2 w-6',
      },
    },
    isActive: {
      true: {
        slot: 'z-10 ring-1 ring-ring border-primary',
      },
    },
    hasError: {
      true: {
        slot: 'ring-1 border-destructive ring-destructive/20',
      },
    },
  },
  defaultVariants: {
    inputSize: 'md',
    isActive: false,
    hasError: false,
  },
})

export type InputPinStyles = VariantProps<typeof inputPinStyles>
