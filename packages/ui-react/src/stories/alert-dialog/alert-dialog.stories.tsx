import type { Meta, StoryObj } from '@storybook/react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#/components/alert-dialog'
import { Button } from '#/components/button'

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: 'Base Components/Alert Dialog',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'The open state of the dialog when it is initially rendered',
    },
  },
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger className="cursor-pointer hover:underline">
        Show Dialog
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  ),
}

export const CustomAction: Story = {
  render: (args) => {
    const handleAction = () => console.info('Do something')
    return (
      <AlertDialog {...args}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </AlertDialogTrigger>
        <AlertDialogPortal>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Warning</AlertDialogTitle>
              <AlertDialogDescription>
                You are about to enter a dangerous area, this action is irreversible.
                <br /> Are you sure you want to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Go Back</AlertDialogCancel>
              <AlertDialogAction variant="destructive" onClick={handleAction}>
                I Understand
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogPortal>
      </AlertDialog>
    )
  },
}
