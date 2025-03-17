import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components'
import { Card } from '#/components'
import { Divider } from '#/components'
import { Slider } from '#/components'

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Base Components/Slider',
  tags: ['status:done'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => <Slider defaultValue={[55]} />,
}

export const Range: Story = {
  render: () => <Slider defaultValue={[55, 75]} />,
}

export const Disabled: Story = {
  render: () => <Slider defaultValue={[55]} disabled />,
}

export const Inverted: Story = {
  render: () => <Slider defaultValue={[55]} inverted />,
}

export const Vertical: Story = {
  render: () => (
    <div className="h-20">
      <Slider defaultValue={[55]} orientation="vertical" />
    </div>
  ),
}

export const StepSize: Story = {
  render: () => <Slider defaultValue={[55]} step={10} />,
}

export const ControlledForm: Story = {
  render: (args) => {
    const [value, setValue] = React.useState([55, 75])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(`Submitted: ${value[0]}, ${value[1]}`)
    }

    return (
      <Card className="w-96">
        <form onSubmit={handleSubmit} onReset={() => setValue([55, 75])}>
          <Slider id="a" value={value} onValueChange={setValue} {...args} />
          <Divider />
          <div className="flex gap-4">
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <Button type="reset" variant="secondary" className="w-full">
              Reset Input
            </Button>
          </div>
        </form>
        <Divider />
        <p className="mt-2 text-gray-500 text-sm">
          Slider value:
          <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
            {value[0]}, {value[1]}
          </span>
        </p>
      </Card>
    )
  },
}
