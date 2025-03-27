import type { Meta, StoryObj } from '@storybook/react'
import { clx } from 'twistail-utils'
import { Tracker } from '#/components/tracker'

const meta: Meta<typeof Tracker> = {
  component: Tracker,
  title: 'Visualizations/Tracker',
  tags: ['autodocs', 'status:done'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tracker component',
    },
    hoverEffect: {
      control: 'boolean',
      description: 'Enable hover effect on tracker blocks',
    },
    flatten: {
      control: 'boolean',
      description: 'Remove rounded corners from tracker blocks',
    },
    hideArrow: {
      control: 'boolean',
      description: 'Hide arrow on tooltip',
    },
    defaultColor: {
      control: 'text',
      description: 'Default background color for blocks without specified color',
    },
    emptyColor: {
      control: 'text',
      description: 'Color to use when data is empty',
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
type Story = StoryObj<typeof Tracker>

// Sample data for stories
const basicData = [
  { key: 'item-1', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-2', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-3', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-4', color: 'bg-red-600', tooltip: 'Failed' },
  { key: 'item-5', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-6', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-7', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-8', color: 'bg-red-600', tooltip: 'Failed' },
  { key: 'item-9', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-10', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-11', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-12', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-13', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-14', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-15', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-16', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-17', color: 'bg-yellow-600', tooltip: 'Warning' },
  { key: 'item-18', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-19', color: 'bg-emerald-600', tooltip: 'Completed' },
  { key: 'item-20', color: 'bg-emerald-600', tooltip: 'Completed' },
]

// Data with click handlers
const interactiveData = basicData.map((item) => ({
  ...item,
  onClick: () => console.log(`Clicked on ${item.key}`),
  ariaLabel: `${item.tooltip} ${item.key}`,
}))

// Data with custom React elements in tooltips
const customTooltipData = basicData.map((item) => ({
  ...item,
  tooltip: (
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{item.tooltip}</div>
      <div className="text-muted-foreground text-xs">{item.key}</div>
    </div>
  ),
}))

// Status data example
const statusData = [
  { key: 'status-success', color: 'bg-success', tooltip: 'Success' },
  { key: 'status-warning', color: 'bg-warning', tooltip: 'Warning' },
  { key: 'status-error', color: 'bg-destructive', tooltip: 'Error' },
  { key: 'status-info', color: 'bg-info', tooltip: 'Info' },
  { key: 'status-primary', color: 'bg-primary', tooltip: 'Primary' },
  { key: 'status-secondary', color: 'bg-secondary', tooltip: 'Secondary' },
  { key: 'status-muted', color: 'bg-muted', tooltip: 'Muted' },
  { key: 'status-accent', color: 'bg-accent', tooltip: 'Accent' },
]

export const Default: Story = {
  args: {
    data: basicData,
    hoverEffect: false,
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    data: basicData.slice(0, 10),
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    data: basicData.slice(0, 10),
    size: 'lg',
  },
}

export const WithHoverEffect: Story = {
  args: {
    data: basicData,
    hoverEffect: true,
  },
}

export const WithoutArrow: Story = {
  args: {
    data: basicData,
    hideArrow: true,
  },
}

export const Interactive: Story = {
  args: {
    data: interactiveData,
    hoverEffect: true,
  },
}

export const CustomTooltips: Story = {
  args: {
    data: customTooltipData,
  },
}

export const StatusColors: Story = {
  args: {
    data: statusData,
    size: 'md',
  },
}

export const EmptyState: Story = {
  args: {
    data: [],
    emptyColor: 'bg-muted/80',
    className: 'border rounded-md border-border',
  },
}

export const FewItems: Story = {
  args: {
    data: basicData.slice(0, 3),
  },
}

export const ManyItems: Story = {
  args: {
    size: 'md',
    hoverEffect: true,
    data: Array(40)
      .fill(null)
      .map((_, i) => ({
        key: `many-item-${i + 1}`,
        color: i % 5 === 0 ? 'bg-red-600' : i % 7 === 0 ? 'bg-yellow-600' : 'bg-emerald-600',
        tooltip: i % 5 === 0 ? 'Failed' : i % 7 === 0 ? 'Warning' : 'Completed',
      })),
  },
}

export const Heatmap: Story = {
  args: { flatten: true },
  render: (args) => {
    // Generate 7 rows (days of week) with varying intensities
    const heatmapData = Array(7)
      .fill(null)
      .map((_, rowIndex) => {
        const rowData = Array(52)
          .fill(null)
          .map((_, colIndex) => {
            // Generate random intensity (0-4)
            const intensity = Math.floor(Math.random() * 5)
            // Map intensity to color classes
            const colorMap = [
              'bg-emerald-100 dark:bg-emerald-950',
              'bg-emerald-200 dark:bg-emerald-900',
              'bg-emerald-300 dark:bg-emerald-800',
              'bg-emerald-400 dark:bg-emerald-700',
              'bg-emerald-500 dark:bg-emerald-600',
            ]

            return {
              key: `heatmap-${new Date().getTime()}-${rowIndex}-${colIndex}`,
              color: colorMap[intensity],
              tooltip: `${intensity} contributions on Week ${colIndex + 1}, Day ${rowIndex + 1}`,
            }
          })

        return (
          <Tracker
            key={`row-${new Date().getTime()}-${rowIndex}`}
            flatten={args.flatten}
            data={rowData}
            className="mb-1"
            size="sm"
            hoverEffect
          />
        )
      })
    return (
      <div className="flex flex-col">
        <h3 className="mb-2 font-medium text-sm">Contribution Activity</h3>
        {heatmapData}
        <div className="mt-2 flex items-center justify-end text-muted-foreground text-xs">
          <span>Less</span>
          <div className="mx-2 flex">
            {[
              'bg-emerald-100 dark:bg-emerald-950',
              'bg-emerald-200 dark:bg-emerald-900',
              'bg-emerald-300 dark:bg-emerald-800',
              'bg-emerald-400 dark:bg-emerald-700',
              'bg-emerald-500 dark:bg-emerald-600',
            ].map((color) => (
              <div key={`legend-${color}`} className={clx('mr-0.5 h-3 w-3', color)} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    )
  },
}
