import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Combobox } from '#/components/combobox'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro', disabled: true },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'sveltekit', label: 'SvelteKit', disabled: true },
  { value: 'angular', label: 'Angular', disabled: true },
  { value: 'svelte', label: 'Svelte', disabled: true },
  { value: 'solid', label: 'Solid' },
]

const frameworksWithIcons = [
  { value: 'next.js', label: 'Next.js', icon: Lucide.Layers },
  { value: 'sveltekit', label: 'SvelteKit', icon: Lucide.FileCode },
  { value: 'nuxt.js', label: 'Nuxt.js', icon: Lucide.Code, disabled: true },
  { value: 'remix', label: 'Remix', icon: Lucide.Terminal },
  { value: 'astro', label: 'Astro', icon: Lucide.Laptop },
  { value: 'react', label: 'React', icon: Lucide.Code },
  { value: 'vue', label: 'Vue', icon: Lucide.Layers, disabled: true },
  { value: 'angular', label: 'Angular', icon: Lucide.FileCode },
  { value: 'svelte', label: 'Svelte', icon: Lucide.Terminal },
  { value: 'solid', label: 'Solid', icon: Lucide.Laptop },
]

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'Base Components/Combobox',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Whether the combobox has an error state',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message to display when no options match the search',
    },
    modalPopover: {
      control: 'boolean',
      description: 'Whether the popover should be modal',
    },
    onValueChange: { action: 'valueChanged' },
  },
  args: {
    placeholder: 'Select framework',
    searchPlaceholder: 'Search framework',
    emptyMessage: 'No framework found.',
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: {
    options: frameworks,
  },
  render: (args) => {
    const [value, setValue] = React.useState('')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}

export const WithError: Story = {
  args: {
    options: frameworks,
    hasError: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState('')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}

export const WithIcons: Story = {
  args: {
    options: frameworksWithIcons,
    placeholder: 'Select framework',
  },
  render: (args) => {
    const [value, setValue] = React.useState('')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}

export const WithDefaultValue: Story = {
  args: {
    options: frameworks,
    defaultValue: 'react',
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.defaultValue || '')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}

export const Modal: Story = {
  args: {
    options: frameworks,
    modalPopover: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState('')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}

export const LongList: Story = {
  args: {
    options: [
      ...frameworks,
      { value: 'ember', label: 'Ember', disabled: true },
      { value: 'preact', label: 'Preact' },
      { value: 'lit', label: 'Lit' },
      { value: 'alpine', label: 'Alpine.js', disabled: true },
      { value: 'jquery', label: 'jQuery' },
      { value: 'backbone', label: 'Backbone.js', disabled: true },
      { value: 'meteor', label: 'Meteor' },
      { value: 'polymer', label: 'Polymer' },
      { value: 'aurelia', label: 'Aurelia', disabled: true },
      { value: 'mithril', label: 'Mithril' },
    ],
  },
  render: (args) => {
    const [value, setValue] = React.useState('')
    return (
      <div className="flex w-[180px] flex-col gap-4">
        <Combobox
          {...args}
          onValueChange={(newValue) => {
            setValue(newValue)
            args.onValueChange?.(newValue)
          }}
        />
        <div className="px-1 text-sm">
          Selected value: <span className="font-semibold">{value || 'none'}</span>
        </div>
      </div>
    )
  },
}
