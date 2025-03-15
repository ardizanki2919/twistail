import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { DropdownMenu, DropdownMenuTrigger } from '#/components'
import { DropdownMenuContent, DropdownMenuItem } from '#/components'
import { Badge, Button, type ButtonProps, buttonStyles } from '#/components'

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'Base Components/Button',
  tags: ['status:preview'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      table: {
        type: { summary: 'ReactNode | string' },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: [...Object.keys(buttonStyles.variants.variant)],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'ButtonStyles["variant"]' },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      options: [...Object.keys(buttonStyles.variants.size)],
      table: {
        type: { summary: 'ButtonStyles["size"]' },
      },
    },
    isLoading: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    controls: { exclude: ['asChild'] },
  },
  args: { children: 'Button' },
}

export const VariantShowcase: Story = {
  parameters: {
    controls: { exclude: ['variant', 'children', 'asChild'] },
  },
  args: {
    isLoading: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
}

export const SizeShowcase: Story = {
  parameters: {
    controls: { exclude: ['size', 'children', 'asChild'] },
  },
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div className="flex flex-wrap items-end gap-4">
      <Button {...args} size="xs">
        Extra Small
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Extra Large
      </Button>
      <Button {...args} size="icon">
        <Lucide.Plus strokeWidth={2.5} />
      </Button>
    </div>
  ),
}

export const StateShowcase: Story = {
  parameters: {
    controls: { exclude: ['children', 'asChild'] },
  },
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} isLoading>
        Loading
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button {...args} variant="ghost" disabled>
        Disabled Ghost
      </Button>
      <Button {...args} variant="link" disabled>
        Disabled Link
      </Button>
    </div>
  ),
}

export const WithDisabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const IsLoadingIcon: Story = {
  args: {
    isLoading: true,
  },
}

export const IsLoadingWithChildren: Story = {
  args: {
    isLoading: true,
    children: 'Add item',
  },
}

export const IsLoadingWithLoadingText: Story = {
  args: {
    loadingText: 'Custom loading text',
    isLoading: true,
  },
}

export const AsChildAnchor: Story = {
  render: () => (
    <Button asChild>
      <a href="#api-reference-button">API Reference</a>
    </Button>
  ),
}

export const AnchorWithVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a href="#" className={buttonStyles({ variant: 'secondary' }).base()}>
        Anchor element
      </a>
    </div>
  ),
}

export const GroupButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="-space-x-px isolate flex">
        <Button variant="outline" className="rounded-r-none focus:z-10">
          Prev
        </Button>
        <Button variant="outline" className="rounded-l-none focus:z-10">
          Next
        </Button>
      </div>
      <div className="-space-x-px isolate flex">
        <Button variant="outline" className="rounded-r-none focus:z-10">
          Prev
        </Button>
        <Button variant="outline" className="rounded-none focus:z-10">
          Now
        </Button>
        <Button variant="outline" className="rounded-l-none focus:z-10">
          Next
        </Button>
      </div>
    </div>
  ),
}

export const GroupWithMenu: Story = {
  render: () => {
    const [starCount, setStarCount] = React.useState(148)
    const [isStarred, setIsStarred] = React.useState(false)

    const handleStar = () => {
      if (!isStarred) {
        setStarCount(starCount + 1)
      } else {
        setStarCount(Math.max(0, starCount - 1))
      }
      setIsStarred(!isStarred)
    }

    return (
      <div className="flex">
        <Button
          onClick={handleStar}
          variant={isStarred ? 'secondary' : 'outline'}
          className="flex h-9 items-center gap-2 rounded-r-none border-r-0 px-4"
        >
          <Lucide.Star
            className={clx(isStarred ? 'fill-primary text-primary' : 'fill-none', 'size-4')}
            strokeWidth={2}
          />
          <span>{isStarred ? 'Starred' : 'Star'}</span>
          <Badge variant={isStarred ? 'primary' : 'neutral'} className="-me-1 font-mono">
            {starCount}
          </Badge>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9 rounded-l-none px-2">
              <Lucide.ChevronDown className="size-4 stroke-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Set repository to public</DropdownMenuItem>
            <DropdownMenuItem>Add to list</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export const IconShowcase: Story = {
  parameters: {
    controls: { exclude: ['children', 'asChild', 'variant'] },
  },
  args: {
    size: 'md',
    isLoading: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>
        <Lucide.Search className="-ml-0.5 mr-2 size-4" />
        <span>Search</span>
      </Button>
      <Button {...args} variant="secondary">
        <Lucide.Mail className="-ml-0.5 mr-2 size-4" />
        <span>Email</span>
      </Button>
      <Button {...args} variant="outline">
        <Lucide.Github className="-ml-0.5 mr-2 size-4" />
        <span>Github</span>
      </Button>
      <Button {...args} size="icon" variant="outline">
        <Lucide.MonitorCog className="size-4" />
      </Button>
      <Button {...args} size="icon" variant="ghost">
        <Lucide.Bell className="size-4" />
      </Button>
    </div>
  ),
}
