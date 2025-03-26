import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardHeader,
  CardTitle,
} from '#/components/card'
import { Textarea } from '#/components/textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Base Components/Textarea',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-sm flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
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
      <CardHeader spacing="compact">
        <CardTitle>Submit details</CardTitle>
        <CardDescription>Insert some text</CardDescription>
      </CardHeader>
      <CardDivider spacing="compact" />
      <CardContent spacing="compact">
        <Textarea id="textarea" name="textarea" className="mt-2" />
        <p className="mt-4 text-gray-500 text-sm">This is disabled</p>
        <Textarea id="textarea" name="textarea" className="mt-2" disabled />
      </CardContent>
    </Card>
  ),
}
