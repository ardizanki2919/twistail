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
      'w-fit min-w-[260px] justify-start text-left font-normal',
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
    container: 'flex items-center justify-center gap-2 p-2 rounded-md',
    timeInputGroup: 'flex items-center bg-muted/30 rounded-md px-2 py-1',
    label: 'cursor-pointer text-muted-foreground flex items-center mx-1.5',
    labelIcon: 'size-4',
    input: [
      'w-[40px] h-8 text-center font-mono text-base tabular-nums caret-transparent shadow-none',
      'bg-transparent border-0 focus:ring-0 focus:outline-none hover:bg-accent/30 rounded',
      'focus:bg-accent focus:border focus:border-border focus:text-accent-foreground',
      '[&::-webkit-inner-spin-button]:appearance-none',
    ],
    periodTrigger: [
      'h-[40px] w-[70px] focus:bg-accent focus:text-accent-foreground rounded-md',
      '[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:-mr-1',
    ],
    periodItem: '[&_svg]:size-4 [&_svg]:shrink-0 py-1.5',
    separator: 'text-muted-foreground mx-0.5 select-none',
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
