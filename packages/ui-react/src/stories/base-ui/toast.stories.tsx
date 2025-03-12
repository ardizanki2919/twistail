import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toaster, toast } from '#/components'

const meta: Meta = {
  component: Toaster,
  title: 'Base Components/Toast',
  tags: ['status:new'],
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
