import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardHeader } from '#/components/card'
import { Skeleton } from '#/components/skeleton'

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Base Components/Skeleton',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-xl flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const InsideCard: Story = {
  render: () => (
    <Card className="max-w-lg p-0">
      <CardHeader className="space-y-2 p-4">
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent className="border-t p-4 dark:border-gray-900">
        <Skeleton className="h-72 w-full rounded" />
      </CardContent>
    </Card>
  ),
}

export const ListItems: Story = {
  render: () => (
    <div className="w-full max-w-80">
      <dl className="space-y-4">
        <dt className="flex items-center gap-4">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </dt>
        <dt className="flex items-center gap-4">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </dt>
        <dt className="flex items-center gap-4">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </dt>
        <dt className="flex items-center gap-4">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </dt>
        <dt className="flex items-center gap-4">
          <Skeleton className="size-6 rounded-full" />
          <Skeleton className="h-6 w-full" />
        </dt>
      </dl>
    </div>
  ),
}
