import { type VariantProps, tv } from 'tailwind-variants'
import { buttonStyles } from '#/components/button'

const calendarStyles = tv({
  slots: {
    base: 'px-4 py-5',
    root: 'bg-card px-4 py-5 w-[calc(269px*var(--calendar-columns))] max-w-full',
    uiChevron: 'size-4',
    uiCaptionLabel: 'truncate font-medium text-sm h-7 w-full items-center justify-center flex',
    uiCaptionButton: buttonStyles({ variant: 'ghost' }).base({
      class: 'truncate font-medium text-sm h-7 w-full rounded-md',
    }),
    uiDay: [
      'size-9 flex flex-1 justify-center items-center text-center',
      'relative focus-within:relative focus-within:z-20 text-sm p-0',
      '[&:has([aria-selected].day-range-end)]:rounded-r-md',
      '[&:has([aria-selected].day-outside)]:bg-accent/50',
      '[&:has([aria-selected])]:bg-accent',
      'first:[&:has([aria-selected])]:rounded-l-md',
      'last:[&:has([aria-selected])]:rounded-r-md',
    ],
    uiDayButton: buttonStyles({ variant: 'ghost' }).base({
      class: 'size-9 rounded-md p-0 font-normal transition-none aria-selected:opacity-100',
    }),
    uiMonth: 'w-full flex flex-col items-center space-y-0 justify-start',
    uiMonthCaption: 'relative mx-10 flex h-7 items-center justify-center w-full max-w-40',
    uiMonthGrid: 'mx-auto mt-4 w-auto border-collapse',
    uiMonths: 'relative flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0',
    uiNav: 'flex items-start mx-auto border-transparent bg-transparent',
    uiNextMonthButton: buttonStyles({ variant: 'outline' }).base({
      class: [
        'absolute size-7 rounded-md p-0 opacity-80 hover:opacity-100 right-1',
        'disabled:border-none disabled:text-muted-foreground/80',
        'disabled:pointer-events-none',
      ],
    }),
    uiPreviousMonthButton: buttonStyles({ variant: 'outline' }).base({
      class: [
        'absolute size-7 rounded-md p-0 opacity-80 hover:opacity-100 left-1',
        'disabled:border-none disabled:text-muted-foreground/80',
        'disabled:pointer-events-none',
      ],
    }),
    uiWeek: 'mt-2 flex w-max items-start space-x-0',
    uiWeekday: 'w-9 font-normal text-muted-foreground text-xs',
    uiWeekdays: 'flex flex-row',
    selectionStateRangeStart: [
      'bg-accent day-range-start rounded-s-md [&>button]:bg-primary [&>button]:text-primary-foreground',
      '[&>button]:hover:bg-primary/90 [&>button]:hover:text-primary-foreground',
    ],
    selectionStateRangeMiddle: [
      '!text-foreground bg-accent [&>button]:!text-foreground [&>button]:hover:!text-foreground',
      '[&>button]:bg-transparent [&>button]:hover:bg-transparent',
    ],
    selectionStateRangeEnd: 'day-range-end rounded-e-md',
    selectionStateSelected: [
      'bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground',
      '[&>button]:hover:bg-primary/90 [&>button]:hover:text-primary-foreground',
    ],
    dayFlagToday: '[&>button]:bg-accent [&>button]:text-accent-foreground',
    dayFlagOutside: [
      'day-outside text-muted-foreground opacity-50',
      'aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
    ],
    dayFlagDisabled: 'text-muted-foreground opacity-50',
    dayFlagHidden: 'invisible flex-1',
    yearGrid: 'grid grid-cols-4 gap-x-1 gap-y-2',
    yearGridButton: buttonStyles({ variant: 'ghost' }).base({
      class: 'h-7 w-full font-normal text-foreground text-sm rounded-md',
    }),
  },
  variants: {
    hasError: {
      true: {
        base: 'ring-1 ring-destructive border-destructive',
      },
    },
    showWeekNumber: {
      true: {
        uiWeekdays: 'justify-end',
      },
    },
  },
  defaultVariants: {
    hasError: false,
    showWeekNumber: false,
  },
})

type CalendarStyles = VariantProps<typeof calendarStyles>

export { calendarStyles, type CalendarStyles }
