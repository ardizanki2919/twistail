import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage, Button } from '#/components'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '#/components'

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  title: 'Base Components/HoverCard',
  tags: ['status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@riipandi</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center justify-between space-x-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/riipandi.png" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Aris Ripandi</h4>
            <p className="text-sm">Web artisan and tech enthusiast.</p>
            <div className="flex items-center pt-2">
              <Lucide.CalendarDays className="mr-2 h-4 w-4 opacity-70" strokeWidth={1.5} />
              <span className="text-muted-foreground text-xs">Joined March 2025</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">View Product</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1.5">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="h-40 w-full rounded-md object-cover"
            alt="Smart Watch"
          />
          <h4 className="mt-3 font-semibold">Smart Watch Pro</h4>
          <p className="text-muted-foreground text-sm">
            Smart watch with health monitoring and notification features.
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="font-bold">$249.99</span>
            <div className="flex items-center">
              <Lucide.Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              <span className="ml-1 text-sm">4.8/5</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const CustomDelay: Story = {
  render: () => (
    <HoverCard openDelay={100} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="secondary">Hover with Delay</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-semibold">Custom Delay</h4>
          <p className="text-muted-foreground text-sm">
            This card has a 100ms open delay and 300ms close delay.
          </p>
          <div className="flex items-center pt-2">
            <Lucide.Clock className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs">Delay set through props</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

interface Gallery {
  author: string
  picture: string
}

const gallery: Gallery[] = [
  {
    author: 'Olav Tvedt',
    picture: `https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    author: 'George Dagerotip',
    picture: `https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    author: 'Josh Berquist',
    picture: `https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
]

export const ImageGallery: Story = {
  render: () => (
    <div className="flex gap-4">
      {gallery.map((item) => (
        <HoverCard key={item.author}>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer">
              <img
                src={item.picture}
                className="h-16 w-16 rounded-md object-cover"
                alt={item.author}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="space-y-1">
              <img
                src={item.picture}
                className="h-40 w-full rounded-md object-cover"
                alt={item.author}
              />
              <h4 className="mt-2.5 font-semibold">{item.author}</h4>
              <p className="text-muted-foreground text-sm">
                Amazing photography captured by {item.author}.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}

export const FeatureHighlight: Story = {
  render: () => (
    <div className="text-center">
      <p className="mb-4">
        Our application offers{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className="cursor-help font-medium text-primary underline">
              advanced analytics
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Advanced Analytics</h4>
              <p className="text-center text-sm">
                Advanced analytics features allow you to view data trends, make predictions, and
                generate automated reports.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="flex items-center">
                  <Lucide.BarChart className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-xs">Data Visualization</span>
                </div>
                <div className="flex items-center">
                  <Lucide.TrendingUp className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-xs">Trend Prediction</span>
                </div>
                <div className="flex items-center">
                  <Lucide.FileText className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-xs">Automated Reports</span>
                </div>
                <div className="flex items-center">
                  <Lucide.Share2 className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-xs">Share Results</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{' '}
        that can help your business.
      </p>
    </div>
  ),
}

export const NotificationPreview: Story = {
  render: () => (
    <HoverCard openDelay={200} closeDelay={50}>
      <HoverCardTrigger asChild>
        <div className="relative cursor-pointer">
          <Lucide.Bell className="h-6 w-6" />
          <span className="-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
            3
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold">Recent Notifications</h4>
          <div className="divide-y">
            {[
              { title: 'New message from Sarah', time: '2 minutes ago' },
              { title: 'Your order has been shipped', time: '1 hour ago' },
              { title: 'Payment successful', time: '3 hours ago' },
            ].map((notification) => (
              <div key={notification.title} className="py-2">
                <p className="font-medium text-sm">{notification.title}</p>
                <p className="text-muted-foreground text-xs">{notification.time}</p>
              </div>
            ))}
          </div>
          <Button variant="link" className="w-full justify-center text-xs">
            View all notifications
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ToolTipAlternative: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {[
        { icon: Lucide.Home, label: 'Home' },
        { icon: Lucide.Search, label: 'Search' },
        { icon: Lucide.Settings, label: 'Settings' },
      ].map((item) => (
        <HoverCard key={item.label} openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <div className="cursor-pointer rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <item.icon className="h-5 w-5" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto px-3 py-1.5">
            <p className="text-sm">{item.label}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}
