import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { MultiSelect } from '#/components'

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: 'Base Components/MultiSelect',
  tags: ['status:wip'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'inverted'],
      description: 'Style variant of the multi-select component',
    },
    maxCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of items to display before showing a count',
    },
    modalPopover: {
      control: 'boolean',
      description: 'Whether to render the popover as a modal',
    },
  },
}

export default meta
type Story = StoryObj<typeof MultiSelect>

const programmingLanguages = [
  {
    value: 'javascript',
    label: 'JavaScript',
  },
  {
    value: 'typescript',
    label: 'TypeScript',
  },
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'rust',
    label: 'Rust',
  },
  {
    value: 'go',
    label: 'Go',
  },
]

const cloudProviders = [
  {
    value: 'aws',
    label: 'AWS',
    icon: Lucide.Cloud,
  },
  {
    value: 'azure',
    label: 'Azure',
    icon: Lucide.CloudCog,
  },
  {
    value: 'gcp',
    label: 'Google Cloud',
    icon: Lucide.CloudLightning,
  },
  {
    value: 'digitalocean',
    label: 'DigitalOcean',
    icon: Lucide.CloudDrizzle,
  },
  {
    value: 'linode',
    label: 'Linode',
    icon: Lucide.CloudRain,
  },
  {
    value: 'heroku',
    label: 'Heroku',
    icon: Lucide.CloudSnow,
  },
]

export const Default: Story = {
  args: {
    options: programmingLanguages,
    placeholder: 'Select programming languages',
    variant: 'default',
    maxCount: 3,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[350px]">
        <MultiSelect
          {...args}
          onValueChange={handleChange}
          defaultValue={['javascript', 'typescript']}
        />
      </div>
    )
  },
}

export const InvertedVariant: Story = {
  args: {
    options: cloudProviders,
    placeholder: 'Select cloud providers',
    variant: 'inverted',
    maxCount: 2,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[350px]">
        <MultiSelect {...args} onValueChange={handleChange} defaultValue={['aws', 'gcp']} />
      </div>
    )
  },
}

export const ManyOptions: Story = {
  args: {
    options: [...programmingLanguages, ...cloudProviders],
    placeholder: 'Select multiple options',
    variant: 'default',
    maxCount: 3,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[350px]">
        <p className="mb-2 text-muted-foreground text-sm">
          Demonstrates handling of many options with search functionality
        </p>
        <MultiSelect {...args} onValueChange={handleChange} defaultValue={['javascript', 'aws']} />
      </div>
    )
  },
}
