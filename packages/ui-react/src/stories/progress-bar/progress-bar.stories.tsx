import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ProgressBar, progressBarStyles } from '#/components/progress-bar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: 'Visualizations/Progress Bar',
  tags: ['autodocs', 'status:done'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
      defaultValue: 50,
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value',
      defaultValue: 100,
    },
    variant: {
      control: 'select',
      options: [...Object.keys(progressBarStyles.variants.variant)],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: [...Object.keys(progressBarStyles.variants.size)],
      description: 'Size of the progress bar',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate progress changes',
    },
    label: {
      control: 'text',
      description: 'Optional label to display next to the progress bar',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full min-w-lg max-w-xl rounded-md bg-card p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    value: 62,
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
    label: '75%',
  },
}

export const NonAnimated: Story = {
  args: {
    value: 50,
    animated: false,
  },
}

export const VariantShowcase: Story = {
  render: () => (
    <div className="mx-auto max-w-sm space-y-4">
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="default" value={50} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Default</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="neutral" value={40} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Neutral</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="success" value={50} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Success</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="warning" value={20} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Warning</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="error" value={10} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Error</span>
      </div>
    </div>
  ),
}

export const SizeShowcase: Story = {
  render: () => (
    <div className="mx-auto max-w-sm space-y-4">
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar size="sm" value={60} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Small</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar size="md" value={60} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Medium</span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar size="lg" value={60} className="w-72" />
        <span className="font-semibold text-foreground text-sm">Large</span>
      </div>
    </div>
  ),
}

export const AnimatedProgress: Story = {
  render: function AnimatedExample() {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
      }, 1000)
      return () => clearTimeout(timer)
    }, [progress])

    return (
      <div className="space-y-4">
        <ProgressBar value={progress} label={`${progress}%`} />
        <p className="text-muted-foreground text-sm">
          Progress automatically increments every second
        </p>
      </div>
    )
  },
}

export const CustomMaxValue: Story = {
  args: {
    value: 75,
    max: 200,
    label: '75/200',
  },
}
