import { RiInformation2Fill } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip } from '@twistail/react/components'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Base Components/Tooltip',
  tags: ['status:wip'],
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Which KPIs are the most visited in your project">
      <p className="text-slate-700 dark:text-slate-700">Show tooltip</p>
    </Tooltip>
  ),
}

export const TooltipSides: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="flex flex-wrap justify-center gap-6">
      <Tooltip side="top" content="Tooltip">
        <span className="rounded-md bg-slate-100 p-2 font-medium text-slate-700 dark:border dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Top
        </span>
      </Tooltip>
      <Tooltip side="right" content="Tooltip">
        <span className="rounded-md bg-slate-100 p-2 font-medium text-slate-700 dark:border dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Right
        </span>
      </Tooltip>
      <Tooltip side="bottom" content="Tooltip">
        <span className="rounded-md bg-slate-100 p-2 font-medium text-slate-700 dark:border dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Bottom
        </span>
      </Tooltip>
      <Tooltip side="left" content="Tooltip">
        <span className="rounded-md bg-slate-100 p-2 font-medium text-slate-700 dark:border dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          Left
        </span>
      </Tooltip>
    </div>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip content="Which KPIs are the most visited in your project" showArrow={false}>
      <p className="text-slate-700 dark:text-slate-700">Show tooltip</p>
    </Tooltip>
  ),
}

export const Icon: Story = {
  render: () => (
    <Tooltip side="top" content="The quick brown fox jumps over the lazy dog.">
      <RiInformation2Fill className="size-5 text-slate-700 dark:text-slate-700" />
    </Tooltip>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Tooltip side="left" defaultOpen content="The quick brown fox jumps over the lazy dog.">
      <RiInformation2Fill className="size-5 text-slate-700" />
    </Tooltip>
  ),
}

export const WrappedAroundButton: Story = {
  render: () => (
    <>
      <Tooltip content="Once you submitted this request, there is no way back.">
        <Button variant="secondary">Submit request</Button>
      </Tooltip>
      <p className="mt-4 max-w-sm text-slate-700 leading-6 dark:text-slate-700">
        You can hover over the button to see a tooltip, while it still functions as a button.
      </p>
    </>
  ),
}
