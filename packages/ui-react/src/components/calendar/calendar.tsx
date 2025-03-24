import * as Lucide from 'lucide-react'
import * as React from 'react'
import { DayFlag, DayPicker, SelectionState, UI } from 'react-day-picker'
import type { ChevronProps, DropdownProps } from 'react-day-picker'
// import type { DayProps, MonthCaptionProps } from 'react-day-picker'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components/listbox'
import { ScrollArea } from '#/components/scroll-area'
import { calendarStyles } from './calendar.css'

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  enableYearNavigation?: boolean
}

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const styles = calendarStyles()
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={styles.base({ className })}
      classNames={{
        [UI.Months]: styles.uiMonths(),
        [UI.Month]: styles.uiMonth(),
        [UI.MonthCaption]: styles.uiMonthCaption(),
        [UI.CaptionLabel]: styles.uiCaptionLabel(),
        [UI.PreviousMonthButton]: styles.buttonNavigation({
          class: styles.uiPreviousMonthButton(),
        }),
        [UI.NextMonthButton]: styles.buttonNavigation({
          class: styles.uiNextMonthButton(),
        }),
        [UI.MonthGrid]: styles.uiMonthGrid(),
        [UI.Weekdays]: styles.uiWeekdays(),
        [UI.Weekday]: styles.uiWeekday(),
        [UI.Week]: styles.uiWeek(),
        [UI.Day]: styles.uiDay(),
        [UI.DayButton]: styles.uiDayButton(),
        [UI.Dropdowns]: styles.uiDropdowns(),
        [SelectionState.range_start]: styles.selectionStateRangeStart(),
        [SelectionState.range_middle]: styles.selectionStateRangeMiddle(),
        [SelectionState.range_end]: styles.selectionStateRangeEnd(),
        [SelectionState.selected]: styles.selectionStateSelected(),
        [DayFlag.today]: styles.dayFlagToday(),
        [DayFlag.outside]: styles.dayFlagOutside(),
        [DayFlag.disabled]: styles.dayFlagDisabled(),
        [DayFlag.hidden]: styles.dayFlagHidden(),
        ...classNames,
      }}
      components={{
        Chevron,
        Dropdown,
        // MonthCaption,
        // Day,
      }}
      {...props}
    />
  )
}

// TODO: add implmentation from Tremor
// const MonthCaption = (_props: MonthCaptionProps) => {
//   return <div className="flex h-7 items-center justify-center" />
// }

// const Day = ({ day }: DayProps) => {
//   const styles = calendarStyles()
//   const { date, displayMonth, outside } = day
//   return (
//     <div className={styles.uiDayButton()}>
//       <span className={styles.uiDay()}>{date.getDate()}</span>
//     </div>
//   )
// }

const Dropdown = ({ value, onChange, ...props }: DropdownProps) => {
  const selected = props.options?.find((child) => child.value === value)
  const handleChange = (value: string) => {
    const changeEvent = { target: { value } } as React.ChangeEvent<HTMLSelectElement>
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
