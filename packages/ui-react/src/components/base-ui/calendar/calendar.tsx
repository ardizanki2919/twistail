import * as Lucide from 'lucide-react'
import * as React from 'react'
import { DayFlag, DayPicker, SelectionState, UI } from 'react-day-picker'
import type { ChevronProps, DropdownProps } from 'react-day-picker'
// import type { DayProps, MonthCaptionProps } from 'react-day-picker'
import { tv } from 'tailwind-variants'
import { clx } from 'twistail-utils'
import { Listbox, ListboxContent, ListboxItem, ListboxTrigger, ListboxValue } from '../listbox'
import { ScrollArea } from '../scroll-area'

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  enableYearNavigation?: boolean
}

const buttonNavigation = tv({
  base: [
    'flex size-8 shrink-0 select-none items-center justify-center rounded-sm border p-1 outline-hidden transition sm:size-[30px]',
    // text color
    'text-gray-600 hover:text-gray-800 dark:text-gray-400 hover:dark:text-gray-200',
    // border color
    'border-gray-300 dark:border-gray-800',
    // background color
    'hover:bg-gray-50 active:bg-gray-100',
    'active:dark:bg-gray-800 hover:dark:bg-gray-900',
    // disabled
    'disabled:pointer-events-none',
    'disabled:border-gray-200 disabled:dark:border-gray-800',
    'disabled:text-gray-400 disabled:dark:text-gray-600',
    'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
  ],
})

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clx('p-3', className)}
      classNames={{
        [UI.Months]: 'relative flex space-y-0',
        [UI.Month]: 'space-y-4 ml-0 p-0',
        [UI.MonthCaption]: 'flex justify-center items-center h-7',
        [UI.CaptionLabel]: 'text-sm font-medium',
        [UI.PreviousMonthButton]: buttonNavigation({
          class: 'absolute top-0 left-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        }),
        [UI.NextMonthButton]: buttonNavigation({
          class: 'absolute top-0 right-1 size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        }),
        [UI.MonthGrid]: 'w-full border-collapse space-y-1',
        [UI.Weekdays]: 'flex',
        [UI.Weekday]: clx(
          'w-9 pb-2 text-center font-medium text-gray-400 text-sm sm:text-xs dark:text-gray-600'
        ),
        [UI.Week]: 'flex w-full mt-1.5',
        [UI.Day]: clx(
          'relative size-9 rounded-md p-0 text-center text-gray-900 text-sm dark:text-gray-50',
          'focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md'
        ),
        [UI.DayButton]: clx(
          'size-9 rounded-sm text-sm focus:z-10',
          'text-gray-900 dark:text-gray-50',
          'hover:bg-gray-200 hover:dark:bg-gray-700',
          'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */
        ),
        [UI.Dropdowns]: 'flex items-center gap-1',
        [SelectionState.range_start]: 'rounded-r-none !rounded-l',
        [SelectionState.range_end]: 'rounded-l-none !rounded-r',
        [SelectionState.selected]: clx(
          'rounded',
          'aria-selected:bg-blue-500 aria-selected:text-white',
          'dark:aria-selected:bg-blue-500 dark:aria-selected:text-white'
        ),
        [SelectionState.range_middle]: clx(
          '!rounded-none',
          'aria-selected:!bg-gray-100 aria-selected:!text-gray-900',
          'dark:aria-selected:!bg-gray-900 dark:aria-selected:!text-gray-50'
        ),
        [DayFlag.today]: 'bg-accent text-accent-foreground font-semibold',
        [DayFlag.outside]:
          'day-outside text-gray-400 dark:text-gray-600 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        [DayFlag.disabled]:
          '!text-gray-300 dark:!text-gray-700 line-through disabled:hover:bg-transparent',
        [DayFlag.hidden]: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron,
        Dropdown,
        // MonthCaption,
        // Day
      }}
      {...props}
    />
  )
}

// TODO: add implmentation from Tremor
// const MonthCaption = (_props: MonthCaptionProps) => {
//   return <div className="flex h-7 items-center justify-center" />
// }

// TODO: add implmentation from Tremor
// const Day = (_props: DayProps) => {
//   return <div className="flex h-7 items-center justify-center" />
// }

const Dropdown = ({ value, onChange, ...props }: DropdownProps) => {
  const selected = props.options?.find((child) => child.value === value)

  const handleChange = (value: string) => {
    const changeEvent = {
      target: { value },
    } as React.ChangeEvent<HTMLSelectElement>
    onChange?.(changeEvent)
  }

  return (
    <Listbox value={value?.toString()} onValueChange={handleChange}>
      <ListboxTrigger className="pr-1.5 focus:ring-0">
        <ListboxValue>{selected?.label}</ListboxValue>
      </ListboxTrigger>
      <ListboxContent position="popper">
        <ScrollArea className="h-80">
          {props.options?.map((option, id: number) => (
            <ListboxItem key={`${option.value}-${id}`} value={option.value?.toString() ?? ''}>
              {option.label}
            </ListboxItem>
          ))}
        </ScrollArea>
      </ListboxContent>
    </Listbox>
  )
}

const Chevron = ({ orientation = 'left' }: ChevronProps): React.JSX.Element => {
  switch (orientation) {
    case 'left':
      return <Lucide.ChevronLeftIcon className="size-4" aria-hidden="true" />
    case 'right':
      return <Lucide.ChevronRightIcon className="size-4" aria-hidden="true" />
    case 'up':
      return <Lucide.ChevronUpIcon className="size-4" aria-hidden="true" />
    case 'down':
      return <Lucide.ChevronDownIcon className="size-4" aria-hidden="true" />
    default:
      return <Lucide.CircleDot className="size-4" aria-hidden="true" />
  }
}

Calendar.displayName = 'Calendar'

export { Calendar, type CalendarProps }
