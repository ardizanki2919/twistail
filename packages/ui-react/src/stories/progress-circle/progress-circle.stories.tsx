import type { Meta, StoryObj } from '@storybook/react'
import { ProgressCircle, progressCircleStyles } from '#/components/progress-circle'

const meta: Meta<typeof ProgressCircle> = {
  component: ProgressCircle,
  title: 'Visualizations/Progress Circle',
  tags: ['autodocs', 'status:done'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'Maximum progress value',
    },
    radius: {
      control: { type: 'number', min: 16, max: 100 },
      description: 'Radius of the circle',
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Width of the progress stroke',
    },
    variant: {
      control: 'select',
      options: [...Object.keys(progressCircleStyles.variants.variant)],
      description: 'Visual style variant',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate progress changes',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressCircle>

export const Default: Story = {
  args: {
    value: 65,
    max: 100,
    radius: 50,
    strokeWidth: 8,
    variant: 'default',
    animated: true,
  },
  render: (args) => (
    <ProgressCircle {...args}>
      <span className="font-medium text-lg">{args.value}%</span>
    </ProgressCircle>
  ),
}

export const WithLabel: Story = {
  args: {
    value: 75,
    max: 100,
    radius: 50,
    strokeWidth: 8,
  },
  render: (args) => (
    <ProgressCircle {...args}>
      <span className="font-medium text-lg">{args.value}%</span>
    </ProgressCircle>
  ),
}

export const VariantShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="default">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="neutral">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Neutral</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="warning">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="error">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Error</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="success">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Success</span>
      </div>
    </div>
  ),
}

export const SizesShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <ProgressCircle value={65} radius={24} strokeWidth={4}>
        <span className="font-medium text-xs">65%</span>
      </ProgressCircle>
      <ProgressCircle value={65} radius={40} strokeWidth={6}>
        <span className="font-medium text-sm">65%</span>
      </ProgressCircle>
      <ProgressCircle value={65} radius={60} strokeWidth={8}>
        <span className="font-medium text-base">65%</span>
      </ProgressCircle>
      <ProgressCircle value={65} radius={80} strokeWidth={10}>
        <span className="font-medium text-lg">65%</span>
      </ProgressCircle>
    </div>
  ),
}

export const CustomContent: Story = {
  args: {
    value: 42,
    radius: 60,
    strokeWidth: 8,
  },
  render: (args) => (
    <ProgressCircle {...args}>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-2xl">{args.value}</span>
        <span className="text-muted-foreground text-xs">of {args.max}</span>
      </div>
    </ProgressCircle>
  ),
}

export const MultipleCircles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <ProgressCircle value={25} variant="default">
        <span className="font-medium text-sm">25%</span>
      </ProgressCircle>
      <ProgressCircle value={50} variant="warning">
        <span className="font-medium text-sm">50%</span>
      </ProgressCircle>
      <ProgressCircle value={75} variant="success">
        <span className="font-medium text-sm">75%</span>
      </ProgressCircle>
      <ProgressCircle value={100} variant="error">
        <span className="font-medium text-sm">100%</span>
      </ProgressCircle>
    </div>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-x-5">
      <ProgressCircle value={75}>
        <span className="font-medium text-foreground text-sm">75%</span>
      </ProgressCircle>
      <div>
        <p className="font-medium text-foreground">$340/$450</p>
        <p className="text-muted-foreground text-xs">Spend management control</p>
      </div>
    </div>
  ),
}

export const CustomRadius: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <ProgressCircle value={72} radius={16} strokeWidth={4} />
      <ProgressCircle value={72} radius={25} strokeWidth={6} />
      <ProgressCircle value={72} radius={40} strokeWidth={10} />
      <ProgressCircle value={72} radius={45} strokeWidth={5} />
      <ProgressCircle value={72} radius={50} strokeWidth={8} />
    </div>
  ),
}
