import { type VariantProps, tv } from 'tailwind-variants'
import { buttonStyles } from '#/components/button'

const calendarStyles = tv({
  slots: {
    base: 'p-3',
    uiChevron: 'size-4',
    uiCaptionLabel: 'truncate font-medium text-sm h-7 w-full items-center justify-center flex',
    uiCaptionButton: buttonStyles({ variant: 'ghost' }).base({
      class: 'truncate font-medium text-sm h-7 w-full',
    }),
    uiDay: 'flex size-8 flex-1 items-center justify-center p-0 text-sm',
    uiDayButton: buttonStyles({ variant: 'ghost' }).base({
      class: 'size-8 rounded-md p-0 font-normal transition-none aria-selected:opacity-100',
    }),
    uiMonth: 'w-full',
    uiMonthCaption: 'relative mx-10 flex h-7 items-center justify-center',
    uiMonthGrid: 'mx-auto mt-4',
    uiMonths: 'relative flex',
    uiNav: 'flex items-start',
    uiNextMonthButton: buttonStyles({ variant: 'outline' }).base({
      class: 'absolute size-7 p-0 opacity-80 hover:opacity-100 right-0',
    }),
    uiPreviousMonthButton: buttonStyles({ variant: 'outline' }).base({
      class: 'absolute size-7 p-0 opacity-80 hover:opacity-100 left-0',
    }),
    uiWeek: 'mt-2 flex w-max items-start',
    uiWeekday: 'w-8 font-normal text-accent-foreground text-xs',
    uiWeekdays: 'flex flex-row',
    selectionStateRangeStart: [
      'bg-accent day-range-start rounded-s-md [&>button]:bg-primary [&>button]:text-primary-foreground',
      '[&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
    ],
    selectionStateRangeMiddle: [
      '!text-foreground bg-accent [&>button]:!text-foreground [&>button]:hover:!text-foreground',
      '[&>button]:bg-transparent [&>button]:hover:bg-transparent',
    ],
    selectionStateRangeEnd: 'day-range-end rounded-e-md',
    selectionStateSelected: [
      'bg-accent [&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary ',
      '[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:text-primary-foreground',
      '[&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
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
      class: 'h-7 w-full font-normal text-foreground text-sm',
    }),
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type CalendarStyles = VariantProps<typeof calendarStyles>

export { calendarStyles, type CalendarStyles }
