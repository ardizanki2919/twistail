import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { TimePicker } from '#/components/datetime-picker'

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  title: 'Base Components/Datetime Picker/Time Picker',
  tags: ['autodocs', 'status:experimental'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-fit">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    granularity: {
      control: 'select',
      options: ['day', 'hour', 'minute', 'second'],
      description: 'Smallest time unit to display',
      table: {
        type: { summary: 'Granularity' },
        defaultValue: { summary: 'second' },
      },
    },
    hourCycle: {
      control: 'radio',
      options: [12, 24],
      description: 'Use 12-hour or 24-hour format',
      table: {
        type: { summary: '12 | 24' },
        defaultValue: { summary: '24' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
    date: {
      control: 'date',
      description: 'Initial date value',
      table: {
        type: { summary: 'Date | null' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback when date changes',
      table: {
        type: { summary: '(date: Date | undefined) => void' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TimePicker>

export const TimePickerDefault: Story = {
  name: 'Time Picker Default',
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} />
      </div>
    )
  },
}

export const TimePickerHour12: Story = {
  name: 'Time Picker 12-hour',
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} hourCycle={12} />
      </div>
    )
  },
}

export const TimePickerMinuteGranularity: Story = {
  name: 'Time Picker Minute Granularity',
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} granularity="minute" />
      </div>
    )
  },
}

export const TimePickerHourGranularity: Story = {
  name: 'Time Picker Hour Granularity',
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} granularity="hour" />
      </div>
    )
  },
}

export const TimePickerWithInitialTime: Story = {
  name: 'Time Picker with Initial Time',
  render: () => {
    const initialDate = new Date()
    initialDate.setHours(15, 30, 45)
    const [date, setDate] = React.useState<Date>(initialDate)

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} />
      </div>
    )
  },
}

export const TimePickerWithCustomTime: Story = {
  name: 'Time Picker with Custom Time (10:15 PM)',
  render: () => {
    const customDate = new Date()
    customDate.setHours(22, 15, 0)
    const [date, setDate] = React.useState<Date>(customDate)

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="rounded-md border p-2">
        <TimePicker date={date} onChange={handleDateChange} hourCycle={12} />
      </div>
    )
  },
}

export const TimePickerWithStateManagement: Story = {
  name: 'Time Picker with State Management',
  render: () => {
    const TimePickerWithState = () => {
      const [currentDate, setCurrentDate] = React.useState<Date>(new Date())

      const handleDateChange = (date: Date | undefined) => {
        if (date) {
          setCurrentDate(date)
          console.debug('Time changed:', date.toLocaleTimeString())
        }
      }

      return (
        <div className="space-y-2">
          <TimePicker date={currentDate} onChange={handleDateChange} />
          <div className="px-2.5 pb-2 text-muted-foreground text-sm">
            Selected time: {currentDate.toLocaleTimeString()}
          </div>
        </div>
      )
    }

    return (
      <div className="rounded-md border p-2">
        <TimePickerWithState />
      </div>
    )
  },
}

export const TimePickerVariations: Story = {
  name: 'Time Picker Variations',
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())

    const handleDateChange = (newDate: Date | undefined) => {
      if (newDate) {
        setDate(newDate)
      }
    }

    return (
      <div className="space-y-6 rounded-md border p-4">
        <div>
          <h3 className="mb-2 font-medium text-sm">24-hour format with seconds</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={24} granularity="second" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-sm">12-hour format with seconds</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={12} granularity="second" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-sm">24-hour format with minutes</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={24} granularity="minute" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-sm">12-hour format with minutes</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={12} granularity="minute" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-sm">24-hour format, hour only</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={24} granularity="hour" />
        </div>

        <div>
          <h3 className="mb-2 font-medium text-sm">12-hour format, hour only</h3>
          <TimePicker date={date} onChange={handleDateChange} hourCycle={12} granularity="hour" />
        </div>
      </div>
    )
  },
}
