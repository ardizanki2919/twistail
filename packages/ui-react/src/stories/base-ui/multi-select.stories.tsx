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

const popularLanguages = [
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

const programmingLanguages = [
  {
    value: 'java',
    label: 'Java',
  },
  {
    value: 'csharp',
    label: 'C#',
  },
  {
    value: 'cpp',
    label: 'C++',
  },
  {
    value: 'php',
    label: 'PHP',
  },
  {
    value: 'ruby',
    label: 'Ruby',
  },
  {
    value: 'swift',
    label: 'Swift',
  },
  {
    value: 'kotlin',
    label: 'Kotlin',
  },
  {
    value: 'scala',
    label: 'Scala',
  },
  {
    value: 'elixir',
    label: 'Elixir',
  },
  {
    value: 'haskell',
    label: 'Haskell',
  },
  {
    value: 'dart',
    label: 'Dart',
  },
  {
    value: 'clojure',
    label: 'Clojure',
  },
  {
    value: 'r',
    label: 'R',
  },
  {
    value: 'perl',
    label: 'Perl',
  },
  {
    value: 'lua',
    label: 'Lua',
  },
  {
    value: 'julia',
    label: 'Julia',
  },
  {
    value: 'groovy',
    label: 'Groovy',
  },
  {
    value: 'cobol',
    label: 'COBOL',
  },
  {
    value: 'erlang',
    label: 'Erlang',
  },
  {
    value: 'fortran',
    label: 'Fortran',
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
    options: popularLanguages,
    placeholder: 'Select programming languages',
    maxCount: 3,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[420px]">
        <MultiSelect {...args} onValueChange={handleChange} />
      </div>
    )
  },
}

export const WithValue: Story = {
  args: {
    options: popularLanguages,
    placeholder: 'Select programming languages',
    maxCount: 4,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[420px]">
        <MultiSelect
          {...args}
          onValueChange={handleChange}
          defaultValue={['javascript', 'typescript']}
        />
      </div>
    )
  },
}

export const WithIcon: Story = {
  args: {
    options: cloudProviders,
    placeholder: 'Select cloud providers',
    maxCount: 2,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[420px]">
        <MultiSelect {...args} onValueChange={handleChange} defaultValue={['aws', 'gcp']} />
      </div>
    )
  },
}

export const ManyOptions: Story = {
  args: {
    options: [...popularLanguages, ...programmingLanguages],
    placeholder: 'Select multiple options',
    maxCount: 3,
    modalPopover: false,
  },
  render: (args) => {
    const handleChange = (value: string[]) => {
      console.info('Selected values:', value)
    }
    return (
      <div className="w-[420px]">
        <p className="mb-2 text-muted-foreground text-sm">
          Demonstrates handling of many options with search functionality
        </p>
        <MultiSelect {...args} onValueChange={handleChange} defaultValue={['javascript', 'aws']} />
      </div>
    )
  },
}
