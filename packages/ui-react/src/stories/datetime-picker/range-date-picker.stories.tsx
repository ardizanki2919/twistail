import type { Meta, StoryObj } from '@storybook/react'
import { RangeDatePicker } from '#/components/datetime-picker'

const meta: Meta<typeof RangeDatePicker> = {
  component: RangeDatePicker,
  title: 'Base Components/Range Date Picker',
  tags: ['autodocs', 'status:experimental'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof RangeDatePicker>

export const Default: Story = {
  render: () => <RangeDatePicker />,
}

export const WithDefaultPresets: Story = {
  render: () => <RangeDatePicker inlinePresets internalPresets numberOfMonths={2} />,
}

export const WithCustomPresets: Story = {
  render: () => (
    <RangeDatePicker
      inlinePresets
      internalPresets
      numberOfMonths={2}
      presets={[
        {
          label: 'Yesterday',
          range: {
            from: new Date(new Date().setDate(new Date().getDate() - 1)),
          },
        },
        {
          label: 'Last 7 Days',
          range: {
            from: new Date(new Date().setDate(new Date().getDate() - 7)),
          },
        },
      ]}
    />
  ),
}
