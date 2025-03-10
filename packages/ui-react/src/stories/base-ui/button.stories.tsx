import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { cn } from 'twistail-utils'
import { Button, type ButtonProps, buttonStyles } from '#/components'

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'Base Components/Button',
  tags: ['status:wip'],
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
    // size: {
    //   control: { type: 'inline-radio' },
    //   options: sizeOptions,
    //   table: {
    //     type: { summary: 'ButtonStyles["size"]' },
    //   },
    // },
    isLoading: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
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
    // size: 'default',
    isLoading: false,
    disabled: false,
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Primary</Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="light">
        Light
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
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

export const IsLoading: Story = {
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
      <a href="#" className={cn(buttonStyles({ variant: 'secondary' }))}>
        Anchor element
      </a>
    </div>
  ),
}

// export const SizeShowcase: Story = {
//   parameters: {
//     controls: { exclude: ['size', 'children', 'asChild'] },
//   },
//   args: {
//     variant: 'default',
//     isLoading: false,
//     disabled: false,
//   },
//   render: (args) => (
//     <div className="flex flex-wrap items-end gap-4">
//       <Button {...args} size="sm">
//         Small
//       </Button>
//       <Button {...args}>Default</Button>
//       <Button {...args} size="lg">
//         Large
//       </Button>
//       <Button {...args} size="icon">
//         <Lucide.Plus />
//       </Button>
//     </div>
//   ),
// }

// export const IconShowcase: Story = {
//   parameters: {
//     controls: { exclude: ['children', 'asChild', 'variant'] },
//   },
//   args: {
//     size: 'default',
//     isLoading: false,
//     disabled: false,
//   },
//   render: (args) => (
//     <div className="flex flex-wrap items-center gap-4">
//       <Button {...args}>
//         <Lucide.Search className="-ml-0.5" />
//         Search
//       </Button>
//       <Button {...args} variant="secondary">
//         <Lucide.Mail className="-ml-0.5" />
//         Email
//       </Button>
//       <Button {...args} variant="outline">
//         <Lucide.Github className="-ml-0.5" />
//         Github
//       </Button>
//       <Button {...args} size="icon" variant="ghost">
//         <Lucide.Bell className="-ml-0.5" />
//       </Button>
//     </div>
//   ),
// }

// export const StateShowcase: Story = {
//   parameters: {
//     controls: { exclude: ['children', 'asChild'] },
//   },
//   args: {
//     variant: 'default',
//     size: 'default',
//   },
//   render: (args) => (
//     <div className="flex flex-wrap items-center gap-4">
//       <Button {...args} isLoading>
//         Loading
//       </Button>
//       <Button {...args} disabled>
//         Disabled
//       </Button>
//       <Button {...args} variant="outline" disabled>
//         Disabled Outline
//       </Button>
//     </div>
//   ),
// }
