import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components/button'
import { Card, CardContent } from '#/components/card'
import { Divider } from '#/components/divider'
import { Label } from '#/components/label'
import { Switch } from '#/components/switch'

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Base Components/Switch',
  tags: ['autodocs', 'status:done'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const SizeShowcase: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Switch size="md" />
      <Switch size="sm" />
    </div>
  ),
}

export const DefaultChecked: Story = {
  render: () => <Switch id="label" defaultChecked />,
}

export const Disabled: Story = {
  render: () => <Switch id="label" disabled />,
}

export const CheckedDisabled: Story = {
  render: () => <Switch id="label" defaultChecked disabled />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2.5">
      <Switch id="r1" />
      <Label htmlFor="r1">Click this Label check the Switch</Label>
    </div>
  ),
  args: { size: 'sm' },
}

export const ControlledForm: Story = {
  args: { required: true },
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean>(false)
    return (
      <div className="space-y-4">
        <Card className="w-96">
          <CardContent>
            <form
              onSubmit={(event) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                event.preventDefault()
                alert('Submitted')
              }}
              onReset={() => setChecked(false)}
            >
              <div className="flex items-center gap-3">
                <Label htmlFor="a">Click the Label</Label>
                <Switch id="a" checked={checked} onCheckedChange={setChecked} {...args} />
              </div>
              <Divider />
              <div className="flex gap-4">
                <Button type="submit" className="mt-2 w-fit">
                  Submit
                </Button>

                <Button type="reset" variant="secondary" className="mt-2 w-fit">
                  Reset Input
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-gray-500 text-sm">
          Switch is:
          <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
            {checked ? 'On' : 'Off'}
          </span>
        </p>
      </div>
    )
  },
}
