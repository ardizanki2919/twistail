import type { Meta, StoryObj } from '@storybook/react'
import { addDays, addMonths, addWeeks, subDays } from 'date-fns'
import { id } from 'date-fns/locale'
import { SingleDatePicker } from '#/components/datetime-picker'

const meta: Meta<typeof SingleDatePicker> = {
  component: SingleDatePicker,
  title: 'Base Components/Datetime Picker/Date Picker',
  tags: ['autodocs', 'status:done'],
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
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    internalPresets: {
      control: 'boolean',
      description: 'Show presets inside the calendar popover',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    presets: {
      control: 'object',
      description: 'Custom date presets',
      table: {
        type: { summary: 'DatePreset[]' },
      },
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
    className: {
      control: 'text',
      description: 'Additional CSS class names',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pick a date' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SingleDatePicker>

export const SingleDefault: Story = {
  name: 'Single Date Picker',
  render: () => <SingleDatePicker />,
}

export const SingleWithInlinePresets: Story = {
  name: 'Single with Inline Presets',
  render: () => <SingleDatePicker inlinePresets />,
}

export const SingleWithInternalPresets: Story = {
  name: 'Single with Internal Presets',
  render: () => <SingleDatePicker internalPresets />,
}

export const SingleWithBothPresets: Story = {
  name: 'Single with Both Presets',
  render: () => <SingleDatePicker inlinePresets internalPresets />,
}

export const SingleWithCustomPresets: Story = {
  name: 'Single with Custom Presets',
  render: () => (
    <SingleDatePicker
      internalPresets
      presets={[
        { label: 'Today', date: new Date() },
        { label: 'Tomorrow', date: addDays(new Date(), 1) },
        { label: 'Next Week', date: addWeeks(new Date(), 1) },
        { label: 'Next Month', date: addMonths(new Date(), 1) },
        { label: 'Christmas', date: new Date(new Date().getFullYear(), 11, 25) },
        { label: 'New Year', date: new Date(new Date().getFullYear() + 1, 0, 1) },
      ]}
    />
  ),
}

export const SingleWithInlineCustomPresets: Story = {
  name: 'Single with Inline Custom Presets',
  render: () => (
    <SingleDatePicker
      inlinePresets
      presets={[
        { label: 'Today', date: new Date() },
        { label: 'Yesterday', date: subDays(new Date(), 1) },
        { label: 'Tomorrow', date: addDays(new Date(), 1) },
        { label: 'Next Week', date: addWeeks(new Date(), 1) },
      ]}
    />
  ),
}

export const SingleWithLocale: Story = {
  name: 'Single with Locale',
  render: () => <SingleDatePicker locale={id} inlinePresets internalPresets />,
}

export const SingleWithTimePicker: Story = {
  name: 'Single with Time Picker',
  render: () => <SingleDatePicker withTimePicker />,
}

export const SingleWithTimePickerHour12: Story = {
  name: 'Single with 12-hour Time Picker',
  render: () => <SingleDatePicker withTimePicker hourCycle={12} />,
}

export const SingleWithTimePickerMinuteGranularity: Story = {
  name: 'Single with Minute Granularity',
  render: () => <SingleDatePicker withTimePicker granularity="minute" />,
}

export const SingleWithTimePickerHourGranularity: Story = {
  name: 'Single with Hour Granularity',
  render: () => <SingleDatePicker withTimePicker granularity="hour" />,
}

export const SingleWithTimePickerAndPresets: Story = {
  name: 'Single with Time Picker and Presets',
  render: () => <SingleDatePicker withTimePicker internalPresets />,
}

export const SingleWithCustomPlaceholder: Story = {
  name: 'Single with Custom Placeholder',
  render: () => <SingleDatePicker placeholder="Select date and time" withTimePicker />,
}
