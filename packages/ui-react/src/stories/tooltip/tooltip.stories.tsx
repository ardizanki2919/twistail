import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Button } from '#/components/button'
import { Text } from '#/components/text'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Base Components/Tooltip',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    delayDuration: {
      control: { type: 'number' },
      description: 'The delay duration for the tooltip',
      defaultValue: 150,
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is open by default',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Controlled open state of the tooltip',
    },
  },
  subcomponents: {
    TooltipTrigger,
    TooltipContent,
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Text className="text-muted-foreground">Show tooltip</Text>
      </TooltipTrigger>
      <TooltipContent content="Which KPIs are the most visited in your project" />
    </Tooltip>
  ),
}

export const TooltipSides: Story = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-6">
      <Tooltip>
        <TooltipTrigger>
          <span className="rounded-md bg-background p-2 font-medium text-muted-foreground">
            Top
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" content="Tooltip" />
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <span className="rounded-md bg-background p-2 font-medium text-muted-foreground">
            Right
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" content="Tooltip" />
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <span className="rounded-md bg-background p-2 font-medium text-muted-foreground">
            Bottom
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom" content="Tooltip" />
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <span className="rounded-md bg-background p-2 font-medium text-muted-foreground">
            Left
          </span>
        </TooltipTrigger>
        <TooltipContent side="left" content="Tooltip" />
      </Tooltip>
    </div>
  ),
}

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <p className="text-muted-foreground">Show tooltip</p>
      </TooltipTrigger>
      <TooltipContent content="Which KPIs are the most visited in your project" hideArrow />
    </Tooltip>
  ),
}

export const IconTrigger: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <Lucide.Info className="size-5 text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent side="top" content="The quick brown fox jumps over the lazy dog." />
    </Tooltip>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger>
        <Lucide.Info className="size-5 text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent side="left" content="The quick brown fox jumps over the lazy dog." />
    </Tooltip>
  ),
}

export const WrappedAroundButton: Story = {
  render: () => (
    <>
      <Tooltip delayDuration={10}>
        <TooltipTrigger asChild>
          <Button variant="secondary">Submit request</Button>
        </TooltipTrigger>
        <TooltipContent content="Once you submitted this request, there is no way back." />
      </Tooltip>
      <p className="mt-4 max-w-sm text-muted-foreground leading-6">
        You can hover over the button to see a tooltip, while it still functions as a button.
      </p>
    </>
  ),
}
