import type { Meta, StoryObj } from '@storybook/react'
import { Card, Textarea } from '#/components'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Base Components/Textarea',
  tags: ['status:wip'],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    placeholder: 'Write something...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const HasError: Story = {
  args: {
    hasError: true,
  },
}

export const WithCard: Story = {
  render: () => (
    <Card className="sm:w-96">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">Submit details</h3>
      <p className="mt-4 text-gray-500 text-sm">Insert some text</p>
      <Textarea id="textarea" name="textarea" className="mt-2" />
      <p className="mt-4 text-gray-500 text-sm">This is disabled</p>
      <Textarea id="textarea" name="textarea" className="mt-2" disabled />
    </Card>
  ),
}
