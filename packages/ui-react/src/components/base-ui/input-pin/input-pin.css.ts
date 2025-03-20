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
    separatorInner: 'bg-border rounded-full',
  },
  variants: {
    inputSize: {
      xs: { slot: 'size-7 text-xs font-normal' },
      sm: { slot: 'size-8 text-xs font-normal' },
      md: { slot: 'size-10 text-sm font-medium' },
      lg: { slot: 'size-12 text-base font-medium' },
      xl: { slot: 'size-14 text-lg font-medium' },
    },
    orientation: {
      horizontal: {},
      vertical: {},
    },
    isActive: {
      true: { slot: 'z-10 ring-1 ring-ring border-primary' },
    },
    hasError: {
      true: { slot: 'ring-1 border-destructive ring-destructive/20' },
    },
  },
  compoundVariants: [
    // Horizontal separator variants
    {
      orientation: 'horizontal',
      inputSize: 'xs',
      className: {
        separator: 'w-3',
        separatorInner: 'h-[2.5px] w-3 mx-0',
      },
    },
    {
      orientation: 'horizontal',
      inputSize: 'sm',
      className: {
        separator: 'w-5',
        separatorInner: 'h-[2.5px] w-5 mx-0.5',
      },
    },
    {
      orientation: 'horizontal',
      inputSize: 'md',
      className: {
        separator: 'w-7',
        separatorInner: 'h-[3px] w-7 mx-1',
      },
    },
    {
      orientation: 'horizontal',
      inputSize: 'lg',
      className: {
        separator: 'w-9',
        separatorInner: 'h-[4px] w-9 mx-2',
      },
    },
    {
      orientation: 'horizontal',
      inputSize: 'xl',
      className: {
        separator: 'w-12',
        separatorInner: 'h-[5px] w-12 mx-2.5',
      },
    },

    // Vertical separator variants
    {
      orientation: 'vertical',
      inputSize: 'xs',
      className: {
        separator: 'h-2 mx-auto',
        separatorInner: 'w-[2px] h-5 mx-0.5',
      },
    },
    {
      orientation: 'vertical',
      inputSize: 'sm',
      className: {
        separator: 'h-2 mx-auto',
        separatorInner: 'w-[2px] h-6 mx-1',
      },
    },
    {
      orientation: 'vertical',
      inputSize: 'md',
      className: {
        separator: 'h-3 mx-auto',
        separatorInner: 'w-[3px] h-8 mx-1.5',
      },
    },
    {
      orientation: 'vertical',
      inputSize: 'lg',
      className: {
        separator: 'h-3 mx-auto',
        separatorInner: 'w-[3px] h-10 mx-3',
      },
    },
    {
      orientation: 'vertical',
      inputSize: 'xl',
      className: {
        separator: 'h-4 mx-auto',
        separatorInner: 'w-[4px] h-12 mx-4',
      },
    },
  ],
  defaultVariants: {
    inputSize: 'md',
    orientation: 'horizontal',
    isActive: false,
    hasError: false,
  },
})

export type InputPinStyles = VariantProps<typeof inputPinStyles>
