import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogDivider,
  AlertDialogFooter,
  AlertDialogHeader,
  type AlertDialogProps,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#/components/alert-dialog'
import { Button } from '#/components/button'

const meta: Meta<AlertDialogProps> = {
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
    spacing: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Controls the spacing of the alert dialog content',
      table: {
        type: { summary: 'default | compact' },
        defaultValue: { summary: 'default' },
      },
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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogDivider />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithDivider: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Files</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Selected Files</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to delete multiple files. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogDivider />
        <div className="text-muted-foreground text-sm">
          <ul className="list-disc space-y-1 pl-5">
            <li>document.pdf (2.5MB)</li>
            <li>image.jpg (1.8MB)</li>
            <li>presentation.pptx (5.2MB)</li>
          </ul>
        </div>
        <AlertDialogDivider />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete Files</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CompactDialog: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent spacing="compact" className="sm:max-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Logout Confirmation</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout? Any unsaved changes will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogDivider />
        <AlertDialogFooter>
          <AlertDialogCancel size="sm" className="w-full">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction size="sm" className="w-full">
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
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
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Warning</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to enter a dangerous area, this action is irreversible.
              <br /> Are you sure you want to proceed?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogDivider />
          <div className="text-muted-foreground text-sm">
            <p>By confirming, you acknowledge that:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>All your personal data will be erased</li>
              <li>Your subscription will be canceled</li>
              <li>You will lose access to all premium features</li>
            </ul>
          </div>
          <AlertDialogDivider />
          <AlertDialogFooter>
            <AlertDialogCancel>Go Back</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={handleAction}>
              I Understand
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
}
