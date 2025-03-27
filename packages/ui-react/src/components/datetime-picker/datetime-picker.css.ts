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

type SingleDatePickerStyles = VariantProps<typeof singleDatePickerStyles>
type RangeDatePickerStyles = VariantProps<typeof rangeDatePickerStyles>

export { singleDatePickerStyles, rangeDatePickerStyles }
export type { SingleDatePickerStyles, RangeDatePickerStyles }
