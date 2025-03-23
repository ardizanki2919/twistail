import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Button } from '#/components/button'
import { Toaster, toast } from '#/components/toast'

const meta: Meta = {
  component: Toaster,
  title: 'Base Components/Toast',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster richColors />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          position: 'top-right',
        })
      }}
    >
      Show Toast
    </Button>
  ),
}

export const ToastShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => {
          toast.success('Successfully saved!', {
            description: 'Your changes have been saved.',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }}
      >
        Success Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast.error('Error occurred', {
            description: 'There was a problem with your request.',
            action: {
              label: 'Retry',
              onClick: () => console.debug('Retry'),
            },
          })
        }}
      >
        Error Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
            loading: 'Loading...',
            success: 'Successfully loaded',
            error: 'Error loading data',
          })
        }}
      >
        Promise Toast
      </Button>
    </div>
  ),
}

export const AdditionalToastTypes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        className="bg-orange-500 hover:bg-orange-600"
        onClick={() => {
          toast.warning('System update', {
            description: 'A system update is required. Please save your work.',
            action: {
              label: 'Update Now',
              onClick: () => console.log('Update action triggered'),
            },
          })
        }}
      >
        Warning Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast.info('Information', {
            description: 'Your profile has been viewed 49 times this week.',
          })
        }}
      >
        Info Toast
      </Button>
    </div>
  ),
}

export const ToastPositions: Story = {
  render: () => (
    <div className="grid w-full max-w-md grid-cols-3 gap-6 p-4">
      {/* Top Row */}
      <Button
        variant="outline"
        onClick={() => {
          toast('Top Left Toast', {
            position: 'top-left',
            description: 'This toast appears at the top-left corner',
          })
        }}
      >
        Top Left
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast('Top Center Toast', {
            position: 'top-center',
            description: 'This toast appears at the top-center',
          })
        }}
      >
        Top Center
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast('Top Right Toast', {
            position: 'top-right',
            description: 'This toast appears at the top-right corner',
          })
        }}
      >
        Top Right
      </Button>

      {/* Bottom Row */}
      <Button
        variant="outline"
        onClick={() => {
          toast('Bottom Left Toast', {
            position: 'bottom-left',
            description: 'This toast appears at the bottom-left corner',
          })
        }}
      >
        Bottom Left
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast('Bottom Center Toast', {
            position: 'bottom-center',
            description: 'This toast appears at the bottom-center',
          })
        }}
      >
        Bottom Center
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast('Bottom Right Toast', {
            position: 'bottom-right',
            description: 'This toast appears at the bottom-right corner',
          })
        }}
      >
        Bottom Right
      </Button>
    </div>
  ),
}

export const CustomToasts: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        variant="secondary"
        onClick={() => {
          toast('Custom Icon Toast', {
            icon: <Lucide.Bell className="size-4" />,
            description: 'This toast has a custom bell icon',
          })
        }}
      >
        Custom Icon
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast('Persistent Toast', {
            description: 'This toast will not auto-dismiss',
            duration: Number.POSITIVE_INFINITY,
            action: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }}
      >
        Persistent Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast('Styled Toast', {
            description: 'This toast has custom styling',
            className: 'bg-red-500 text-white',
          })
        }}
      >
        Styled Toast
      </Button>
    </div>
  ),
}

export const MultiActionToast: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Permission Request', {
          description: 'This application wants to access your location',
          action: {
            label: 'Allow',
            onClick: () => console.log('Permission allowed'),
          },
          cancel: {
            label: 'Deny',
            onClick: () => console.log('Permission denied'),
          },
        })
      }}
    >
      Multi-Action Toast
    </Button>
  ),
}
