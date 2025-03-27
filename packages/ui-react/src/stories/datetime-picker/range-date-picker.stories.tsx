import type { Meta, StoryObj } from '@storybook/react'
import { subMonths } from 'date-fns'
import { id } from 'date-fns/locale'
import { RangeDatePicker } from '#/components/datetime-picker'

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  title: 'Base Components/Datetime Picker/Range Picker',
  tags: ['autodocs', 'status:experimental'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-fit">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    inlinePresets: {
      control: 'boolean',
      description: 'Show presets inline as a dropdown',
    },
    internalPresets: {
      control: 'boolean',
      description: 'Show presets inside the calendar popover',
    },
    numberOfMonths: {
      control: { type: 'select', options: [2, 3, 4, 5, 6] },
      description: 'Number of months to display in the calendar',
    },
    presets: {
      control: 'object',
      description: 'Custom date range presets',
    },
    withTimePicker: {
      control: 'boolean',
      description: 'Show time picker component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
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
    displayFormat: {
      control: 'text',
      description: 'Custom date format for display',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pick a date range' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof RangeDatePicker>

export const RangeDefault: Story = {
  name: 'Range Picker',
  render: () => <RangeDatePicker />,
}

export const RangeWithInlinePresets: Story = {
  name: 'Range with Inline Presets',
  render: () => <RangeDatePicker inlinePresets />,
}

export const RangeWithInternalPresets: Story = {
  name: 'Range with Internal Presets',
  render: () => <RangeDatePicker internalPresets />,
}

export const RangeWithBothPresets: Story = {
  name: 'Range with Both Presets',
  render: () => <RangeDatePicker inlinePresets internalPresets />,
}

export const RangeWithThreeMonths: Story = {
  name: 'Range with Three Months',
  render: () => <RangeDatePicker numberOfMonths={3} />,
}

export const RangeWithCustomPresets: Story = {
  name: 'Range with Custom Presets',
  render: () => (
    <RangeDatePicker
      inlinePresets
      internalPresets
      numberOfMonths={2}
      presets={[
        {
          label: 'Last Month',
          range: {
            from: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
            to: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
          },
        },
        {
          label: 'Last Quarter',
          range: {
            from: subMonths(new Date(), 3),
            to: new Date(),
          },
        },
        {
          label: 'Last 6 Months',
          range: {
            from: subMonths(new Date(), 6),
            to: new Date(),
          },
        },
        {
          label: 'Last Year',
          range: {
            from: subMonths(new Date(), 12),
            to: new Date(),
          },
        },
      ]}
    />
  ),
}

export const RangeWithFourMonths: Story = {
  name: 'Range with Four Months',
  render: () => <RangeDatePicker numberOfMonths={4} />,
}

export const RangeWithLocale: Story = {
  name: 'Range with Locale',
  render: () => <RangeDatePicker locale={id} inlinePresets internalPresets />,
}

// New stories for TimePicker integration

export const RangeWithTimePicker: Story = {
  name: 'Range with Time Picker',
  render: () => <RangeDatePicker withTimePicker />,
}

export const RangeWithTimePickerHour12: Story = {
  name: 'Range with 12-hour Time Picker',
  render: () => <RangeDatePicker withTimePicker hourCycle={12} />,
}

export const RangeWithTimePickerMinuteGranularity: Story = {
  name: 'Range with Minute Granularity',
  render: () => <RangeDatePicker withTimePicker granularity="minute" />,
}

export const RangeWithTimePickerHourGranularity: Story = {
  name: 'Range with Hour Granularity',
  render: () => <RangeDatePicker withTimePicker granularity="hour" />,
}

export const RangeWithTimePickerAndPresets: Story = {
  name: 'Range with Time Picker and Presets',
  render: () => <RangeDatePicker withTimePicker internalPresets />,
}

export const RangeWithTimePickerAndCustomFormat: Story = {
  name: 'Range with Time Picker Custom Format',
  render: () => <RangeDatePicker withTimePicker displayFormat="dd MMM yyyy, HH:mm" />,
}

export const RangeWithCustomPlaceholder: Story = {
  name: 'Range with Custom Placeholder',
  render: () => <RangeDatePicker placeholder="Select date and time range" withTimePicker />,
}

export const RangeWithAllFeatures: Story = {
  name: 'Range with All Features',
  render: () => (
    <RangeDatePicker
      withTimePicker
      hourCycle={12}
      granularity="minute"
      internalPresets
      inlinePresets
      numberOfMonths={2}
      placeholder="Select your date and time range"
    />
  ),
}
