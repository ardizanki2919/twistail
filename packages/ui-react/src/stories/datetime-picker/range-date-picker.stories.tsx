import type { Meta, StoryObj } from '@storybook/react'
import { subMonths } from 'date-fns'
import { id } from 'date-fns/locale'
import { RangeDatePicker } from '#/components/datetime-picker'

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  title: 'Base Components/Datetime Picker/Range Picker',
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
