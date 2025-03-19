import type { Meta, StoryObj } from '@storybook/react'
import { Slot } from 'radix-ui'

const DummyComponent = Slot.Root

const meta: Meta<typeof DummyComponent> = {
  component: DummyComponent,
  title: 'Layout Components/Sidebar',
  tags: ['status:planned'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof DummyComponent>

export const Default: Story = {
  render: () => <DummyComponent />,
}
