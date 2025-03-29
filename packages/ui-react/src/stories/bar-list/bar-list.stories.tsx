import type { Meta, StoryObj } from '@storybook/react'
import { BarList, barListStyles } from '#/components/bar-list'

const meta: Meta<typeof BarList> = {
  component: BarList,
  title: 'Visualizations/Bar List',
  tags: ['autodocs', 'status:preview'],
  argTypes: {
    size: {
      control: 'select',
      options: [...Object.keys(barListStyles.variants.size)],
      description: 'Size of the bar list items',
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: [...Object.keys(barListStyles.variants.variant)],
      description: 'Color variant of the bars',
      defaultValue: 'default',
    },
    hideValue: {
      control: 'boolean',
      description: 'Whether to hide the value labels',
      defaultValue: false,
    },
    hideTooltip: {
      control: 'boolean',
      description: 'Whether to hide tooltips',
      defaultValue: false,
    },
    hideArrow: {
      control: 'boolean',
      description: 'Whether to hide tooltip arrows',
      defaultValue: false,
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the bars are interactive (clickable)',
      defaultValue: false,
    },
    sortOrder: {
      control: 'select',
      options: ['ascending', 'descending', 'none'],
      description: 'Sort order for the data',
      defaultValue: 'none',
    },
    showAnimation: {
      control: 'boolean',
      description: 'Whether to show animation when the component mounts',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof BarList>

const basicData = [
  { title: '/home', value: 843, maxValue: 1000 },
  { title: '/imprint', value: 46, maxValue: 1000 },
  { title: '/cancellation', value: 3, maxValue: 1000 },
  { title: '/blocks', value: 108, maxValue: 1000 },
  { title: '/documentation', value: 384, maxValue: 1000 },
]

const dataWithSubtitles = basicData.map((item) => ({
  ...item,
  subtitle: `${Math.round((item.value / item.maxValue) * 100)}% of total traffic`,
}))

const dataWithTooltips = dataWithSubtitles.map((item) => ({
  ...item,
  tooltip: (
    <div className="flex flex-col items-start gap-1">
      <div className="text-left font-medium">{item.title}</div>
      <div className="text-muted-foreground text-xs">{item.subtitle}</div>
      <div className="mt-1 font-medium text-xs">{item.value} visits</div>
    </div>
  ),
}))

const dataWithCustomColors = [
  { title: 'Product A', value: 420, maxValue: 1000, color: 'var(--color-chart-1)' },
  { title: 'Product B', value: 362, maxValue: 1000, color: 'var(--color-chart-2)' },
  { title: 'Product C', value: 175, maxValue: 1000, color: 'var(--color-chart-3)' },
  { title: 'Product D', value: 92, maxValue: 1000, color: 'var(--color-chart-4)' },
  { title: 'Product E', value: 51, maxValue: 1000, color: 'var(--color-chart-5)' },
]

const dataWithFormatting = basicData.map((item) => ({
  ...item,
  formatValue: (value: number) => `${value.toLocaleString()} visits`,
}))

const interactiveData = dataWithTooltips.map((item) => ({
  ...item,
  onClick: () => console.log(`Clicked on ${item.title} with value ${item.value}`),
}))

const dataWithLinks = basicData.map((item) => ({
  ...item,
  href: `https://example.com${item.title}`,
  tooltip: `Click to visit ${item.title}`,
}))

export const Default: Story = {
  args: {
    data: basicData,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithSubtitles: Story = {
  args: {
    data: dataWithSubtitles,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithTooltips: Story = {
  args: {
    data: dataWithTooltips,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const CustomColors: Story = {
  args: {
    data: dataWithCustomColors,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const FormattedValues: Story = {
  args: {
    data: dataWithFormatting,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithValueFormatter: Story = {
  args: {
    data: basicData,
    valueFormatter: (value) => `${value.toLocaleString()} views`,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const Small: Story = {
  args: {
    data: dataWithSubtitles,
    size: 'sm',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const Large: Story = {
  args: {
    data: dataWithSubtitles,
    size: 'lg',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const HiddenValues: Story = {
  args: {
    data: dataWithTooltips,
    hideValue: true,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const SuccessVariant: Story = {
  args: {
    data: basicData,
    variant: 'success',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WarningVariant: Story = {
  args: {
    data: basicData,
    variant: 'warning',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const DestructiveVariant: Story = {
  args: {
    data: basicData,
    variant: 'destructive',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const InfoVariant: Story = {
  args: {
    data: basicData,
    variant: 'info',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    data: interactiveData,
    interactive: true,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithLinks: Story = {
  args: {
    data: dataWithLinks,
    interactive: true,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithValueChange: Story = {
  args: {
    data: basicData,
    interactive: true,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList
        {...args}
        onValueChange={(item) => {
          console.debug(`Selected item:`, item)
          alert(`Selected: ${item.title} with value ${item.value}`)
        }}
      />
    </div>
  ),
}

export const SortedAscending: Story = {
  args: {
    data: basicData,
    sortOrder: 'ascending',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const SortedDescending: Story = {
  args: {
    data: basicData,
    sortOrder: 'descending',
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const WithAnimation: Story = {
  args: {
    data: basicData,
    showAnimation: true,
  },
  render: (args) => (
    <div className="mx-auto w-md">
      <BarList {...args} />
    </div>
  ),
}

export const DarkMode: Story = {
  args: {
    data: dataWithTooltips,
  },
  render: (args) => (
    <div className="mx-auto w-md rounded-lg bg-background p-6" data-theme="dark">
      <BarList {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="mx-auto flex w-3xl flex-col gap-8">
      <div>
        <h3 className="mb-4 font-medium text-lg">Default Variant</h3>
        <BarList data={basicData} variant="default" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Success Variant</h3>
        <BarList data={basicData} variant="success" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Warning Variant</h3>
        <BarList data={basicData} variant="warning" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Destructive Variant</h3>
        <BarList data={basicData} variant="destructive" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Info Variant</h3>
        <BarList data={basicData} variant="info" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Custom Colors</h3>
        <BarList data={dataWithCustomColors} />
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="mx-auto flex w-3xl flex-col gap-8">
      <div>
        <h3 className="mb-4 font-medium text-lg">Small Size</h3>
        <BarList data={basicData} size="sm" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Medium Size (Default)</h3>
        <BarList data={basicData} size="md" />
      </div>
      <div>
        <h3 className="mb-4 font-medium text-lg">Large Size</h3>
        <BarList data={basicData} size="lg" />
      </div>
    </div>
  ),
}
