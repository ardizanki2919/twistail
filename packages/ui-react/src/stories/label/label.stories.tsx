import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Input, Label } from '#/components'

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Base Components/Label',
  tags: ['autodocs', 'status:done'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const LabelWithInput: Story = {
  render: () => (
    <form className="flex w-xs flex-col gap-3">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </form>
  ),
}

export const LabelWithCheckbox: Story = {
  render: () => (
    <form className="flex gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">Accept terms and conditions</Label>
    </form>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Label disabled data-testid="label-disabled" htmlFor="search">
      Search
    </Label>
  ),
}
