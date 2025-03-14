import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Callout, calloutStyles } from '#/components'

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: 'Base Components/Callout',
  tags: ['status:wip'],
  args: {
    title: 'Sales Performance',
    children:
      'System Update: Enhanced Salesforce and Dynamics 365 integration now delivers key sales performance metrics directly to your dashboard for improved target achievement.',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [...Object.keys(calloutStyles.variants.variant)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Callout>

export const Default: Story = {}

export const Success: Story = {
  args: {
    variant: 'success',
  },
}

export const ErrorState: Story = {
  args: {
    variant: 'error',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
}

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
}

// FIXME: Objects are not valid as a React child
// export const WithLucideIcon: Story = {
//   args: {
//     icon: Lucide.OctagonAlert,
//     title: 'AWS Credit Alert',
//     children:
//       'Warning: Your AWS credits are nearly depleted. Please review your usage and consider adding more credits to avoid service interruptions. Visit your account dashboard for details.',
//   },
// }

export const WithIconElement: Story = {
  args: {
    icon: <Lucide.Info className="mr-1.5 size-5 shrink-0" />,
    title: 'Information',
    children: 'Visit your account dashboard for details.',
  },
}
