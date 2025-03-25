import { differenceInCalendarDays as diffDays } from 'date-fns'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import type { ChevronProps, DayPickerProps } from 'react-day-picker'
import { DayFlag, DayPicker, SelectionState, UI } from 'react-day-picker'
import { labelNext, labelPrevious, useDayPicker } from 'react-day-picker'
import { calendarStyles } from './calendar.css'

//#region Calendar
// ============================================================================

type CalendarProps = DayPickerProps & {
  disableYearSelector?: boolean /* @default true */
  yearRange?: number /* @default 12 */
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  disableYearSelector = false,
  yearRange = 12,
  numberOfMonths,
  ...props
}: CalendarProps) {
  const styles = calendarStyles()
  const { onPrevClick, startMonth, endMonth } = props
  const [navView, setNavView] = React.useState<NavView>('days')
  const columnsDisplayed = navView === 'years' ? 1 : numberOfMonths

  const currentYear = new Date().getFullYear()
  const [displayYears, setDisplayYears] = React.useState<{ from: number; to: number }>({
    from: currentYear - Math.floor(yearRange / 2 - 1),
    to: currentYear + Math.ceil(yearRange / 2),
  })

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={styles.base({ className })}
      style={{ width: `${249 * (columnsDisplayed ?? 1)}px` }}
      classNames={{
        [UI.CaptionLabel]: styles.uiCaptionLabel(),
        [UI.Day]: styles.uiDay(),
        [UI.Chevron]: styles.uiChevron(),
        [UI.DayButton]: styles.uiDayButton(),
        [UI.Month]: styles.uiMonth(),
        [UI.MonthCaption]: styles.uiMonthCaption(),
        [UI.MonthGrid]: styles.uiMonthGrid(),
        [UI.Months]: styles.uiMonths(),
        [UI.Nav]: styles.uiNav(),
        [UI.NextMonthButton]: styles.uiNextMonthButton(),
        [UI.PreviousMonthButton]: styles.uiPreviousMonthButton(),
        [UI.Week]: styles.uiWeek(),
        [UI.Weekday]: styles.uiWeekday(),
        [UI.Weekdays]: styles.uiWeekdays(),
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
        Chevron: (props) => <Chevron {...props} />,
        CaptionLabel: (props) => (
          <CaptionLabel
            navView={navView}
            disableYearSelector={disableYearSelector}
            setNavView={setNavView}
            displayYears={displayYears}
            {...props}
          />
        ),
        Nav: ({ className }) => (
          <Nav
            navView={navView}
            className={className}
            displayYears={displayYears}
            setDisplayYears={setDisplayYears}
            startMonth={startMonth}
            endMonth={endMonth}
            onPrevClick={onPrevClick}
          />
        ),
        MonthGrid: ({ className, children, ...props }) => (
          <MonthGrid
            className={className}
            displayYears={displayYears}
            startMonth={startMonth}
            endMonth={endMonth}
            navView={navView}
            setNavView={setNavView}
            {...props}
          >
            {children}
          </MonthGrid>
        ),
      }}
      numberOfMonths={columnsDisplayed}
      {...props}
    />
  )
}

//#region Custom Components
// ============================================================================

type NavView = 'days' | 'years'

const Chevron = ({ orientation, className }: ChevronProps): React.JSX.Element => {
  switch (orientation) {
    case 'left':
      return <Lucide.ChevronLeftIcon className={className} aria-hidden="true" />
    case 'right':
      return <Lucide.ChevronRightIcon className={className} aria-hidden="true" />
    case 'up':
      return <Lucide.ChevronUpIcon className={className} aria-hidden="true" />
    case 'down':
      return <Lucide.ChevronDownIcon className={className} aria-hidden="true" />
    default:
      return <Lucide.CircleDot className={className} aria-hidden="true" />
  }
}

function Nav({
  className,
  navView,
  startMonth,
  endMonth,
  displayYears,
  setDisplayYears,
  onPrevClick,
  onNextClick,
}: {
  className?: string
  navView: NavView
  startMonth?: Date
  endMonth?: Date
  displayYears: { from: number; to: number }
  setDisplayYears: React.Dispatch<React.SetStateAction<{ from: number; to: number }>>
  onPrevClick?: (date: Date) => void
  onNextClick?: (date: Date) => void
}) {
  const styles = calendarStyles()
  const { nextMonth, previousMonth, goToMonth } = useDayPicker()

  const isPreviousDisabled = (() => {
    if (navView === 'years') {
      return (
        (startMonth && diffDays(new Date(displayYears.from - 1, 0, 1), startMonth) < 0) ||
        (endMonth && diffDays(new Date(displayYears.from - 1, 0, 1), endMonth) > 0)
      )
    }
    return !previousMonth
  })()

  const isNextDisabled = (() => {
    if (navView === 'years') {
      return (
        (startMonth && diffDays(new Date(displayYears.to + 1, 0, 1), startMonth) < 0) ||
        (endMonth && diffDays(new Date(displayYears.to + 1, 0, 1), endMonth) > 0)
      )
    }
    return !nextMonth
  })()

  const handlePreviousClick = React.useCallback(() => {
    if (!previousMonth) return
    if (navView === 'years') {
      setDisplayYears((prev) => ({
        from: prev.from - (prev.to - prev.from + 1),
        to: prev.to - (prev.to - prev.from + 1),
      }))
      onPrevClick?.(new Date(displayYears.from - (displayYears.to - displayYears.from), 0, 1))
      return
    }
    goToMonth(previousMonth)
    onPrevClick?.(previousMonth)
  }, [
    previousMonth,
    goToMonth,
    displayYears.from,
    displayYears.to,
    navView,
    onPrevClick,
    setDisplayYears,
  ])

  const handleNextClick = React.useCallback(() => {
    if (!nextMonth) return
    if (navView === 'years') {
      setDisplayYears((prev) => ({
        from: prev.from + (prev.to - prev.from + 1),
        to: prev.to + (prev.to - prev.from + 1),
      }))
      onNextClick?.(new Date(displayYears.from + (displayYears.to - displayYears.from), 0, 1))
      return
    }
    goToMonth(nextMonth)
    onNextClick?.(nextMonth)
  }, [
    nextMonth,
    goToMonth,
    displayYears.from,
    displayYears.to,
    navView,
    onNextClick,
    setDisplayYears,
  ])

  const ariaLabelPrevious =
    navView === 'years'
      ? `Go to the previous ${displayYears.to - displayYears.from + 1} years`
      : labelPrevious(previousMonth)

  const ariaLabelNext =
    navView === 'years'
      ? `Go to the next ${displayYears.to - displayYears.from + 1} years`
      : labelNext(nextMonth)

  return (
    <nav className={styles.uiNav({ className })}>
      <button
        type="button"
        className={styles.uiPreviousMonthButton()}
        tabIndex={isPreviousDisabled ? undefined : -1}
        disabled={isPreviousDisabled}
        aria-label={ariaLabelPrevious}
        onClick={handlePreviousClick}
      >
        <Chevron orientation="left" className={styles.uiChevron()} />
      </button>
      <button
        type="button"
        className={styles.uiNextMonthButton()}
        tabIndex={isNextDisabled ? undefined : -1}
        disabled={isNextDisabled}
        aria-label={ariaLabelNext}
        onClick={handleNextClick}
      >
        <Chevron orientation="right" className={styles.uiChevron()} />
      </button>
    </nav>
  )
}

function CaptionLabel({
  children,
  className,
  disableYearSelector,
  displayYears,
  setNavView,
  navView,
  ...props
}: {
  disableYearSelector?: boolean
  navView: NavView
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
  displayYears: { from: number; to: number }
} & React.HTMLAttributes<HTMLSpanElement>) {
  const styles = calendarStyles()
  return !disableYearSelector ? (
    <button
      type="button"
      className={styles.uiCaptionButton({ className })}
      onClick={() => setNavView((prev) => (prev === 'days' ? 'years' : 'days'))}
    >
      {navView === 'days' ? children : `${displayYears.from} - ${displayYears.to}`}
    </button>
  ) : (
    <span className={styles.uiCaptionLabel({ className })} {...props}>
      {children}
    </span>
  )
}

function MonthGrid({
  className,
  children,
  displayYears,
  startMonth,
  endMonth,
  navView,
  setNavView,
  ...props
}: {
  className?: string
  children: React.ReactNode
  displayYears: { from: number; to: number }
  startMonth?: Date
  endMonth?: Date
  navView: NavView
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
} & React.TableHTMLAttributes<HTMLTableElement>) {
  if (navView === 'years') {
    return (
      <YearGrid
        displayYears={displayYears}
        startMonth={startMonth}
        endMonth={endMonth}
        setNavView={setNavView}
        navView={navView}
        className={className}
        {...props}
      />
    )
  }
  return (
    <table className={className} {...props}>
      {children}
    </table>
  )
}

function YearGrid({
  className,
  displayYears,
  startMonth,
  endMonth,
  setNavView,
  navView,
  ...props
}: {
  className?: string
  displayYears: { from: number; to: number }
  startMonth?: Date
  endMonth?: Date
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
  navView: NavView
} & React.HTMLAttributes<HTMLDivElement>) {
  const { goToMonth, selected } = useDayPicker()
  const styles = calendarStyles()

  return (
    <div className={styles.yearGrid({ className })} {...props}>
      {Array.from({ length: displayYears.to - displayYears.from + 1 }, (_, i) => {
        const year = displayYears.from + i
        const isBefore = startMonth ? diffDays(new Date(year, 11, 31), startMonth) < 0 : false
        const isAfter = endMonth ? diffDays(new Date(year, 0, 0), endMonth) > 0 : false
        const isCurrent = year === new Date().getFullYear()
        const isDisabled = isBefore || isAfter

        const handleClick = () => {
          setNavView('days')
          goToMonth(new Date(year, (selected as Date | undefined)?.getMonth() ?? 0))
        }

        return (
          <button
            key={year}
            type="button"
            className={styles.yearGridButton({
              className: isCurrent && 'bg-accent font-medium text-accent-foreground',
            })}
            onClick={handleClick}
            disabled={navView === 'years' ? isDisabled : undefined}
          >
            {year}
          </button>
        )
      })}
    </div>
  )
}

Calendar.displayName = 'Calendar'

export { Calendar, type CalendarProps }
