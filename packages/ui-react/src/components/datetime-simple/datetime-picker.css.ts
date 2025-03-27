import { type VariantProps, tv } from 'tailwind-variants'

const datetimePickerStyles = tv({
  base: [],
  slots: {
    periodSelectWrapper: 'flex h-10 items-center',
    periodSelectTrigger: 'w-[65px] focus:bg-accent focus:text-accent-foreground',
    timePickerInput: [
      'w-[42px] py-1.5 text-center font-mono text-sm tabular-nums caret-transparent',
      'focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none',
    ],
    timePicker: 'flex items-center justify-between gap-3',
    timePickerLabel: 'cursor-pointer',
    timePickerLabelIcon: 'ml-4 size-4',
  },
  variants: {
    displayDate: {
      true: {
        timePickerInput: 'text-muted-foreground',
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    displayDate: false,
  },
})

type DatetimePickerStyles = VariantProps<typeof datetimePickerStyles>

export { datetimePickerStyles, type DatetimePickerStyles }
