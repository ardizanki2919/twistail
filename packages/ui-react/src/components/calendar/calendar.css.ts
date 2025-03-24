import { type VariantProps, tv } from 'tailwind-variants'

const calendarStyles = tv({
  slots: {
    base: 'p-3',
    buttonNavigation: [
      'flex size-8 shrink-0 select-none items-center justify-center rounded-sm border p-1 outline-hidden transition sm:size-[30px]',
      'text-gray-600 hover:text-muted-foreground dark:text-gray-400 hover:dark:text-gray-200',
      'border-gray-300 dark:border-gray-800',
      'hover:bg-gray-50 active:bg-gray-100',
      'active:dark:bg-gray-800 hover:dark:bg-gray-900',
      'disabled:pointer-events-none',
      'disabled:border-gray-200 disabled:dark:border-gray-800',
      'disabled:text-gray-400 disabled:dark:text-gray-600',
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    uiMonths: 'relative flex space-y-0',
    uiMonth: 'space-y-4 ml-0 p-0',
    uiMonthCaption: 'flex justify-center items-center h-7',
    uiCaptionLabel: 'text-sm font-medium',
    uiPreviousMonthButton: [
      'absolute top-0 left-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    ],
    uiNextMonthButton: [
      'absolute top-0 right-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    ],
    uiMonthGrid: 'w-full border-collapse space-y-1',
    uiWeekdays: 'flex',
    uiWeekday:
      'w-9 pb-2 text-center font-medium text-gray-400 text-sm sm:text-xs dark:text-gray-600',
    uiWeek: 'flex w-full mt-1.5',
    uiDay: [
      'relative size-9 rounded-md p-0 text-center text-gray-900 text-sm dark:text-gray-50',
      'focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
    ],
    uiDayButton: [
      'size-9 rounded-sm text-sm focus:z-10',
      'text-gray-900 dark:text-gray-50',
      'hover:bg-gray-200 hover:dark:bg-gray-700',
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
    ],
    uiDropdowns: 'flex items-center gap-1',
    selectionStateRangeStart: 'rounded-r-none !rounded-l',
    selectionStateRangeMiddle: [
      '!rounded-none',
      'aria-selected:!bg-gray-100 aria-selected:!text-gray-900',
      'dark:aria-selected:!bg-gray-900 dark:aria-selected:!text-gray-50',
    ],
    selectionStateRangeEnd: 'rounded-l-none !rounded-r',
    selectionStateSelected: [
      'rounded aria-selected:bg-blue-500 aria-selected:text-white',
      'dark:aria-selected:bg-blue-500 dark:aria-selected:text-white',
    ],
    dayFlagToday: 'bg-accent text-accent-foreground font-semibold',
    dayFlagOutside: [
      'day-outside text-gray-400 dark:text-gray-600 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
    ],
    dayFlagDisabled: [
      '!text-gray-300 dark:!text-gray-700 line-through disabled:hover:bg-transparent',
    ],
    dayFlagHidden: 'invisible',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CalendarStyles = VariantProps<typeof calendarStyles>

export { calendarStyles, type CalendarStyles }
