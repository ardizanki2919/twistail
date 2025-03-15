import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { clx, getInitials } from 'twistail-utils'
import { Avatar, AvatarFallback, AvatarImage, TooltipContent, TooltipTrigger } from '#/components'
import { Tooltip } from '#/components'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Base Components/Avatar',
  tags: ['status:preview'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Avatar',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/921834?v=4" alt="@riipandi" />
      <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-sm">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const AvatarShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/921834?v=4" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
        <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>{getInitials('John Doe')}</AvatarFallback>
      </Avatar>
    </div>
  ),
}

const users = [
  {
    name: 'Robert Wilson',
    role: 'Designer',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Robert&backgroundColor=ffdfbf',
  },
  {
    name: 'Jocelyn Davis',
    role: 'Developer',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn&backgroundColor=ffdfbf',
  },
  {
    name: 'Jack Brown',
    role: 'Manager',
    image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jack&backgroundColor=ffdfbf',
  },
  {
    name: 'Liliana Johnson',
    role: 'Marketing',
  },
]

export const GroupCentered: Story = {
  render: () => (
    <div className="-space-x-2 z-0 flex items-center *:ring-3 *:ring-background">
      <Avatar className="z-0 size-8">
        <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg?seed=Robert&backgroundColor=ffdfbf" />
      </Avatar>
      <Avatar className="z-10 size-10">
        <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn&backgroundColor=ffdfbf" />
      </Avatar>
      <Avatar className="z-20 size-14">
        <AvatarImage src="https://github.com/riipandi.png" />
      </Avatar>
      <Avatar className="z-10 size-10">
        <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack&backgroundColor=ffdfbf" />
      </Avatar>
      <Avatar className="z-0 size-8">
        <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg?seed=Leo&backgroundColor=ffdfbf" />
      </Avatar>
    </div>
  ),
}

export const GroupWithTooltip: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

    return (
      <div className="-space-x-2 flex *:ring-3 *:ring-background">
        {users.map((user, index) => (
          <Tooltip key={user.name} delayDuration={10}>
            <TooltipTrigger asChild>
              <Avatar
                className={clx(
                  activeIndex === index && 'z-10 scale-110',
                  'cursor-pointer transition-transform'
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm">{user.role}</p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    )
  },
}
