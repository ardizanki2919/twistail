import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { clx } from 'twistail-utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuStyles,
} from '#/components/layout/navigation-menu'

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: 'Layout Components/NavigationMenu',
  tags: ['status:wip'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description: `A modal dialog that interrupts the user with important content and expects a response.`,
  },
  {
    title: 'Hover Card',
    href: '#',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description: `Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.`,
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description: `A set of layered sections of content—known as tab panels—that are displayed one at a time.`,
  },
  {
    title: 'Tooltip',
    href: '#',
    description: `A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.`,
  },
]

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={clx(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none',
              'transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="font-medium text-sm leading-none">{title}</div>
            <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)

ListItem.displayName = 'ListItem'

const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={176}
    height={40}
    fill="none"
    viewBox="0 0 176 40"
    className={className}
  >
    <path
      fill="#283841"
      fillRule="evenodd"
      d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
      clipRule="evenodd"
    />
    <path fill="#283841" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[580px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <Logo className="h-4 w-fit" />
                  <div className="mt-4 mb-2 font-medium text-lg">Twistail</div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    Modular and extensible copy-paste React UI components powered by Radix UI and
                    Tailwind CSS.
                  </p>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="#" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="#" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuStyles().trigger()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
