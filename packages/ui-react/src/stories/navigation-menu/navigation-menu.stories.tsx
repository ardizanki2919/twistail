import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
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
} from '#/components/navigation-menu'

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: 'Layout Components/Navigation Menu',
  tags: ['autodocs', 'status:done'],
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

const ListItem = React.forwardRef<React.ComponentRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
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
    <div className="mx-auto max-w-5xl rounded-lg border border-border bg-white p-1.5">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[580px] lg:grid-cols-[.75fr_1fr]">
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
    </div>
  ),
}

export const MegaMenu: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl justify-center rounded-lg border border-border bg-white p-1.5">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="w-full justify-between">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-1">
              <Lucide.Layers className="h-4 w-4" />
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[850px] rounded-xl bg-white p-6">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-medium text-indigo-700 text-lg">
                      <Lucide.Code2 className="h-5 w-5" />
                      Development Tools
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-indigo-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 transition-colors group-hover:bg-indigo-100">
                            <Lucide.Blocks className="h-4 w-4 text-indigo-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Component Library</span>
                            <p className="text-gray-500 text-xs">Pre-built UI components</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-indigo-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 transition-colors group-hover:bg-indigo-100">
                            <Lucide.Palette className="h-4 w-4 text-indigo-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Design System</span>
                            <p className="text-gray-500 text-xs">Consistent design patterns</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-indigo-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-50 transition-colors group-hover:bg-indigo-100">
                            <Lucide.Wand2 className="h-4 w-4 text-indigo-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Theme Builder</span>
                            <p className="text-gray-500 text-xs">Customize your themes</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-medium text-emerald-700 text-lg">
                      <Lucide.BookOpen className="h-5 w-5" />
                      Resources
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-emerald-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                            <Lucide.FileText className="h-4 w-4 text-emerald-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Documentation</span>
                            <p className="text-gray-500 text-xs">Guides and references</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-emerald-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                            <Lucide.GraduationCap className="h-4 w-4 text-emerald-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Tutorials</span>
                            <p className="text-gray-500 text-xs">Step-by-step guides</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-emerald-600"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 transition-colors group-hover:bg-emerald-100">
                            <Lucide.Youtube className="h-4 w-4 text-emerald-600" />
                          </span>
                          <div>
                            <span className="font-medium text-sm">Video Courses</span>
                            <p className="text-gray-500 text-xs">Visual learning content</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-5">
                    <div className="mb-4 flex items-start justify-between">
                      <h4 className="font-medium text-indigo-900 text-lg">New Release</h4>
                      <span className="rounded-full bg-indigo-100 px-2 py-1 font-medium text-indigo-800 text-xs">
                        v2.0
                      </span>
                    </div>
                    <div className="mb-4">
                      <Lucide.Sparkles className="mb-2 h-12 w-12 text-indigo-500" />
                      <h5 className="mb-1 font-medium">Twistail Pro</h5>
                      <p className="mb-3 text-gray-600 text-sm">
                        Our premium component library with advanced features and priority support.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 font-medium text-white text-xs transition-colors hover:bg-indigo-700"
                      >
                        <Lucide.ExternalLink className="h-3 w-3" />
                        Explore Pro
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 font-medium text-indigo-600 text-xs transition-colors hover:text-indigo-800"
                      >
                        Learn more
                        <Lucide.ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-gray-100 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Lucide.HelpCircle className="h-4 w-4" />
                      <span>
                        Need help? Check our{' '}
                        <a href="#" className="text-indigo-600 hover:underline">
                          support page
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="#" className="text-gray-400 transition-colors hover:text-gray-600">
                        <Lucide.Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 transition-colors hover:text-gray-600">
                        <Lucide.Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 transition-colors hover:text-gray-600">
                        <Lucide.Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-1">
              <Lucide.Building2 className="h-4 w-4" />
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[600px] rounded-xl bg-white p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-medium text-amber-700 text-lg">
                      <Lucide.Briefcase className="h-5 w-5" />
                      For Business
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                        >
                          <Lucide.BarChart3 className="h-4 w-4 text-amber-600" />
                          <span className="text-sm">Analytics Platform</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                        >
                          <Lucide.ShoppingCart className="h-4 w-4 text-amber-600" />
                          <span className="text-sm">E-commerce Solutions</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-amber-50 hover:text-amber-600"
                        >
                          <Lucide.Users className="h-4 w-4 text-amber-600" />
                          <span className="text-sm">Team Collaboration</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-medium text-lg text-rose-700">
                      <Lucide.Lightbulb className="h-5 w-5" />
                      By Industry
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        >
                          <Lucide.HeartPulse className="h-4 w-4 text-rose-600" />
                          <span className="text-sm">Healthcare</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        >
                          <Lucide.GraduationCap className="h-4 w-4 text-rose-600" />
                          <span className="text-sm">Education</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex items-center gap-3 rounded-md p-2 text-gray-700 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        >
                          <Lucide.Building className="h-4 w-4 text-rose-600" />
                          <span className="text-sm">Real Estate</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-1">
              <Lucide.BookOpen className="h-4 w-4" />
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                <ListItem href="#" title="Documentation" className="hover:bg-blue-50">
                  <div className="flex items-center gap-2">
                    <Lucide.FileText className="h-4 w-4 text-blue-500" />
                    <span>Comprehensive guides and API references</span>
                  </div>
                </ListItem>
                <ListItem href="#" title="Blog" className="hover:bg-green-50">
                  <div className="flex items-center gap-2">
                    <Lucide.BookOpen className="h-4 w-4 text-green-500" />
                    <span>Latest news, tips, and best practices</span>
                  </div>
                </ListItem>
                <ListItem href="#" title="Community" className="hover:bg-purple-50">
                  <div className="flex items-center gap-2">
                    <Lucide.Users className="h-4 w-4 text-purple-500" />
                    <span>Join our growing community of developers</span>
                  </div>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={clx(navigationMenuStyles().trigger(), 'gap-1')}>
              <Lucide.LifeBuoy className="h-4 w-4" />
              Support
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
}
