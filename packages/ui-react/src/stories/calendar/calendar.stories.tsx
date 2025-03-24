import type { Meta, StoryObj } from '@storybook/react'
import { id } from 'date-fns/locale'
import * as React from 'react'
import { DateRange } from 'react-day-picker'
import { Calendar } from '#/components/calendar'

const Demo = ({ mode, ...args }: Parameters<typeof Calendar>[0]) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(undefined)

  return (
    <div className="flex flex-col items-center gap-y-4">
      <Calendar
        mode={mode}
        selected={mode === 'single' ? date : dateRange}
        onSelect={mode === 'single' ? setDate : setDateRange}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(args as any)}
      />

      {mode === 'single' && (
        <p className="rounded-sm bg-gray-100 p-2 text-gray-500 dark:bg-gray-800 dark:text-gray-300">
          Selected Date: {date ? date.toDateString() : 'None'}
        </p>
      )}
      {mode === 'range' && (
        <p className="rounded-sm bg-gray-100 p-2 text-gray-500 dark:bg-gray-800 dark:text-gray-300">
          Selected Range:{' '}
          {dateRange
            ? `${dateRange.from?.toDateString()} – ${dateRange.to?.toDateString() ?? ''}`
            : 'None'}
        </p>
      )}
    </div>
  )
}

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Base Components/Calendar',
  tags: ['autodocs', 'status:wip'],
  render: Demo,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {
    mode: 'single',
  },
}

export const WithDropdown: Story = {
  args: { captionLayout: 'dropdown' },
}

export const SingleWithYearNavigation: Story = {
  args: {
    mode: 'single',
    enableYearNavigation: true,
  },
}

export const SingleDisableNavigation: Story = {
  args: {
    mode: 'single',
    enableYearNavigation: true,
    disableNavigation: true,
  },
}

export const SingleTwoMonth: Story = {
  args: {
    mode: 'single',
    numberOfMonths: 2,
  },
}

export const SingleTwoMonthWithYearNavigation: Story = {
  args: {
    mode: 'single',
    numberOfMonths: 2,
    enableYearNavigation: true,
  },
}

// Range --------------------------------------------------

export const Range: Story = {
  args: {
    mode: 'range',
  },
}

export const RangeTwoMonth: Story = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
  },
}

// Misc ---------------------------------------------------

export const Locale: Story = {
  args: {
    mode: 'single',
    locale: id,
  },
}

export const DisabledNextWeek: Story = {
  args: {
    mode: 'single',
    disabled: (() => {
      const today = new Date()

      const daysUntilNextMonday = (8 - today.getDay()) % 7
      const nextMonday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + daysUntilNextMonday
      )
      if (today.getDay() === 0) {
        nextMonday.setDate(today.getDate() + 1)
      }
      const disableStart = new Date(
        nextMonday.getFullYear(),
        nextMonday.getMonth(),
        nextMonday.getDate()
      )
      const disableEnd = new Date(
        disableStart.getFullYear(),
        disableStart.getMonth(),
        disableStart.getDate() + 6
      )

      return [{ from: disableStart, to: disableEnd }]
    })(),
  },
}

export const WithYearNavigationLimited: Story = {
  args: {
    mode: 'single',
    enableYearNavigation: true,
    toDate: new Date(),
  },
}
