import { type VariantProps, tv } from 'tailwind-variants'

const singleDatePickerStyles = tv({
  slots: {
    root: 'inline-flex',
    trigger: [
      'w-[260px] justify-start text-left font-normal',
      'data-[empty=true]:text-muted-foreground',
    ],
    triggerWithInlinePresets: 'rounded-r-none',
    triggerIcon: 'mr-2 h-4 w-4',
    calendarWrapper: 'flex',
    presetsContainer: 'justify-evenly px-3 py-4',
    presetsColumn: 'flex w-32 flex-col gap-1',
    presetButton: 'w-full justify-start text-left',
    inlineListboxTrigger: 'w-[140px] rounded-l-none border-l-0',
    popoverContent: 'w-auto p-0',
  },
  variants: {
    inlinePresets: {
      true: {},
      false: {},
    },
    internalPresets: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    inlinePresets: false,
    internalPresets: false,
  },
})

const rangeDatePickerStyles = tv({
  slots: {
    root: 'inline-flex',
    trigger: [
      'w-[260px] justify-start text-left font-normal',
      'data-[empty=true]:text-muted-foreground',
    ],
    triggerWithInlinePresets: 'rounded-r-none',
    triggerIcon: 'mr-2 h-4 w-4',
    calendarWrapper: 'flex',
    presetsContainer: 'justify-evenly px-3 py-4',
    presetsColumn: 'flex w-32 flex-col gap-1',
    presetButton: 'w-full justify-start text-left',
    inlineListboxTrigger: 'w-[140px] rounded-l-none border-l-0',
    popoverContent: 'w-auto p-0',
  },
  variants: {
    inlinePresets: {
      true: {},
      false: {},
    },
    internalPresets: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    inlinePresets: false,
    internalPresets: false,
  },
})

const timePickerStyles = tv({
  slots: {
    container: 'flex items-center justify-center gap-2',
    label: 'cursor-pointer',
    labelIcon: 'mr-2 h-4 w-4',
    input:
      'w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none',
    periodContainer: 'grid gap-1 text-center',
    periodTrigger: 'w-[65px] focus:bg-accent focus:text-accent-foreground',
    separator: '',
  },
  variants: {
    hourCycle: {
      12: {},
      24: {},
    },
    granularity: {
      day: {},
      hour: {},
      minute: {},
      second: {},
    },
  },
  defaultVariants: {
    hourCycle: 24,
    granularity: 'second',
  },
})

type SingleDatePickerStyles = VariantProps<typeof singleDatePickerStyles>
type RangeDatePickerStyles = VariantProps<typeof rangeDatePickerStyles>
type TimePickerStyles = VariantProps<typeof timePickerStyles>

export { singleDatePickerStyles, rangeDatePickerStyles, timePickerStyles }
export type { SingleDatePickerStyles, RangeDatePickerStyles, TimePickerStyles }
