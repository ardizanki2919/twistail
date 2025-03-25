'use client'

import 'atropos/css'
import Atropos from 'atropos/react'
import { ScrollArea } from 'fumadocs-ui/components/ui/scroll-area'
import * as Lucide from 'lucide-react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'twistail-react/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'twistail-react/alert-dialog'
import { AspectRatio } from 'twistail-react/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from 'twistail-react/avatar'
import { Badge } from 'twistail-react/badge'
import { Button } from 'twistail-react/button'
import { Callout } from 'twistail-react/callout'
import { Checkbox } from 'twistail-react/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'twistail-react/collapsible'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'twistail-react/dialog'
import { Divider } from 'twistail-react/divider'
import { Heading } from 'twistail-react/heading'
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'twistail-react/hover-card'
import { Input } from 'twistail-react/input'
import { Kbd } from 'twistail-react/kbd'
import { Label } from 'twistail-react/label'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'twistail-react/navigation-menu'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'twistail-react/pagination'
import { Popover, PopoverContent, PopoverTrigger } from 'twistail-react/popover'
import { RadioGroup, RadioGroupItem } from 'twistail-react/radio-group'
import { Skeleton } from 'twistail-react/skeleton'
import { Slider } from 'twistail-react/slider'
import { Switch } from 'twistail-react/switch'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from 'twistail-react/table'
import {} from 'twistail-react/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'twistail-react/tabs'
import { Text } from 'twistail-react/text'
import { Textarea } from 'twistail-react/textarea'
import { toast } from 'twistail-react/toast'
import { Tooltip, TooltipContent, TooltipTrigger } from 'twistail-react/tooltip'
import Link from '#/app/link'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'twistail-react/select'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'twistail-react/card'

export default function LandingPage() {
  const installCommand = `npm install twistail-react`
  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      toast.success('Copied to clipboard', {
        position: 'top-center',
      })
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <BackgroundPattern />
        <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <HeroContent installCommand={installCommand} handleCopy={handleCopy} />
            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* Components Showcase Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-6">
          <SectionHeading
            title="Explore Components"
            description="Discover our extensive library of beautiful, accessible, and customizable UI components."
          />
          <ComponentsTabs />
        </div>
      </section>
    </div>
  )
}

// Background Pattern Component
function BackgroundPattern() {
  return (
    <svg
      className="-z-10 absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-800/50"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </svg>
  )
}

// Hero Content Component
function HeroContent({
  installCommand,
  handleCopy,
}: { installCommand: string; handleCopy: () => void }) {
  return (
    <div className="flex flex-col lg:w-1/2">
      <div className="mb-6 flex space-x-4">
        <Badge variant="primary">Currently in beta</Badge>
        <Link
          href="https://npmjs.com/package/twistail-react"
          className="inline-flex items-center space-x-2 font-medium text-gray-600 text-sm leading-6"
          newTab
        >
          <span className="dark:text-gray-300">NPM v0.1.x</span>
          <Lucide.ExternalLink
            className="size-4 text-gray-400 dark:text-gray-300"
            aria-hidden="true"
            strokeWidth={2}
          />
        </Link>
      </div>

      <Heading level="h1" className="mb-8 font-bold text-5xl md:text-6xl">
        <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Twistail
        </span>{' '}
        <span className="relative text-black dark:text-white">
          UI library
          <span className="-bottom-2 absolute left-0 h-1 w-full bg-blue-500" />
        </span>
      </Heading>

      <Text className="mb-6 text-gray-600 text-lg/8 dark:text-gray-300">
        Speed up building your website and dashboard by using modular and extensible UI components
        built on top of{' '}
        <Link
          href="https://www.radix-ui.com/primitives?ref=twistail"
          className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert"
          newTab
        >
          Radix UI
        </Link>{' '}
        and{' '}
        <Link
          href="https://tailwindcss.com/?ref=twistail"
          className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text font-medium text-transparent hover:invert"
          newTab
        >
          Tailwind CSS
        </Link>
        .
      </Text>

      <div className="mb-8 flex items-center rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <Lucide.Package className="mr-3 size-5 text-blue-500" />
        <Text className="text-blue-700 dark:text-blue-300">
          Available as a copy-paste package on NPM for your React projects.
        </Text>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" className="group px-5" onClick={handleCopy}>
          <code className="font-mono group-hover:text-blue-500">{installCommand}</code>
          <Lucide.ClipboardCopy
            className="ml-2.5 size-5 group-hover:text-blue-500"
            strokeWidth={1.8}
          />
        </Button>
      </div>

      <div className="flex items-center gap-4 text-gray-500 text-sm dark:text-gray-400">
        <div className="flex items-center">
          <Lucide.Package className="mr-2 size-4" />
          <span>40+ Components</span>
        </div>
        <div className="flex items-center">
          <Lucide.Github className="mr-2 size-4" />
          <span>Open Source</span>
        </div>
        <div className="flex items-center">
          <Lucide.Code2 className="mr-2 size-4" />
          <span>TypeScript First</span>
        </div>
      </div>
    </div>
  )
}

// Hero Showcase Component
function HeroShowcase() {
  return (
    <div className="relative lg:w-1/2">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-2xl dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20" />
        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          className="size-full rounded-lg bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset"
        >
          <Image
            src="/images/screenshots/hero-image.png"
            alt="Twistail UI Components"
            width={1200}
            height={800}
            className="rounded-lg"
            priority
          />
        </Atropos>
        <div className="-bottom-6 -right-6 absolute size-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="-top-6 -left-6 absolute size-40 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
    </div>
  )
}

// Section Heading Component
function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto mb-16 text-center">
      <Heading level="h2" className="mb-4 font-bold text-3xl md:text-4xl" align="center">
        {title}
      </Heading>
      <Text className="mx-auto max-w-3xl text-gray-600 text-lg dark:text-gray-300">
        {description}
      </Text>
    </div>
  )
}

// Components Tabs
function ComponentsTabs() {
  return (
    <Tabs defaultValue="inputs" className="w-full">
      <TabsList className="mx-auto mb-8 grid max-w-2xl grid-cols-4">
        <TabsTrigger value="inputs">Inputs</TabsTrigger>
        <TabsTrigger value="display">Display</TabsTrigger>
        <TabsTrigger value="feedback">Feedback</TabsTrigger>
        <TabsTrigger value="layout">Layout</TabsTrigger>
      </TabsList>
      <TabsContent value="inputs" className="mt-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Button Component */}
          <ComponentCard title="Button">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
          </ComponentCard>

          {/* Input Component */}
          <ComponentCard title="Input">
            <div className="flex w-full flex-col gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email address" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
            </div>
          </ComponentCard>

          {/* Checkbox Component */}
          <ComponentCard title="Checkbox">
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
            </div>
          </ComponentCard>

          {/* Radio Group Component */}
          <ComponentCard title="Radio Group">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </ComponentCard>

          {/* Switch Component */}
          <ComponentCard title="Switch">
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" defaultChecked />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
            </div>
          </ComponentCard>

          {/* Select Component */}
          {/* <ComponentCard title="Select">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </ComponentCard> */}

          {/* Slider Component */}
          <ComponentCard title="Slider">
            <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
          </ComponentCard>

          {/* Textarea Component */}
          <ComponentCard title="Textarea">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>
          </ComponentCard>
        </div>
      </TabsContent>
      <TabsContent value="display" className="mt-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card Component */}
          {/* <ComponentCard title="Card">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
                <Button size="sm" className="ml-2">
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </ComponentCard> */}

          {/* Avatar Component */}
          <ComponentCard title="Avatar">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/riipandi.png" alt="@riipandi" />
                <AvatarFallback>RP</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </ComponentCard>

          {/* Badge Component */}
          <ComponentCard title="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="neutral">Neutral</Badge>
              <Badge variant="primary">Secondary</Badge>
              <Badge variant="error">Destructive</Badge>
            </div>
          </ComponentCard>

          {/* Typography Component */}
          <ComponentCard title="Typography">
            <div className="space-y-2">
              <Heading level="h1" className="text-2xl">
                Heading 1
              </Heading>
              <Heading level="h2" className="text-xl">
                Heading 2
              </Heading>
              <Heading level="h3" className="text-lg">
                Heading 3
              </Heading>
              <Text>Regular text</Text>
              <Text className="text-gray-500 text-sm">Muted text</Text>
            </div>
          </ComponentCard>

          {/* Aspect Ratio Component */}
          <ComponentCard title="Aspect Ratio">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700"
            >
              <Image
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Image"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </ComponentCard>

          {/* Skeleton Component */}
          <ComponentCard title="Skeleton">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </ComponentCard>

          {/* Kbd Component */}
          <ComponentCard title="Kbd">
            <div className="flex items-center gap-2">
              <Text>Press</Text>
              <Kbd keys={['command']}>K</Kbd>
              <Text>to open command menu</Text>
            </div>
          </ComponentCard>

          {/* Callout Component */}
          <ComponentCard title="Callout">
            <Callout title="Callout Title">
              <div className="flex items-center">
                <Lucide.Info className="mr-2 size-4" />
                <Text className="text-white">This is a callout component.</Text>
              </div>
            </Callout>
          </ComponentCard>

          {/* Divider Component */}
          <ComponentCard title="Divider">
            <div className="space-y-4">
              <Text>Above divider</Text>
              <Divider />
              <Text>Below divider</Text>
            </div>
          </ComponentCard>
        </div>
      </TabsContent>
      <TabsContent value="feedback" className="mt-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Alert Dialog Component */}
          <ComponentCard title="Alert Dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ComponentCard>

          {/* Dialog Component */}
          <ComponentCard title="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Show Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" defaultValue="John Doe" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentCard>

          {/* Toast Component */}
          <ComponentCard title="Toast">
            <ToastDemo />
          </ComponentCard>

          {/* Popover Component */}
          <ComponentCard title="Popover">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-gray-500 text-sm dark:text-gray-400">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentCard>

          {/* Hover Card Component */}
          <ComponentCard title="Hover Card">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@riipandi</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/riipandi.png" />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">@riipandi</h4>
                    <p className="text-sm">Developer of Twistail UI components library.</p>
                    <div className="flex items-center pt-2">
                      <Lucide.Calendar className="mr-2 size-4 opacity-70" />{' '}
                      <span className="text-gray-500 text-xs dark:text-gray-400">
                        Joined January 2025
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </ComponentCard>

          {/* Tooltip Component */}
          <ComponentCard title="Tooltip">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </ComponentCard>
        </div>
      </TabsContent>
      <TabsContent value="layout" className="mt-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Accordion Component */}
          <ComponentCard title="Accordion">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentCard>

          {/* Collapsible Component */}
          <ComponentCard title="Collapsible">
            <Collapsible className="w-full">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="font-semibold text-sm">@riipandi</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Lucide.ChevronsUpDown className="size-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2 px-4 py-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                  Developer of Twistail UI components library.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ComponentCard>

          {/* Navigation Menu Component */}
          <ComponentCard title="Navigation Menu">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/50 to-blue-900/50 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mt-4 mb-2 font-medium text-lg text-white">
                              Twistail UI
                            </div>
                            <p className="text-sm text-white/90 leading-tight">
                              Beautiful UI components built with Radix UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-800 dark:hover:bg-gray-800"
                          >
                            <div className="font-medium text-sm leading-none">Introduction</div>
                            <p className="line-clamp-2 text-gray-500 text-sm leading-snug dark:text-gray-400">
                              Re-usable components built using Radix UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ComponentCard>

          {/* Tabs Component */}
          {/* <ComponentCard title="Tabs">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>Make changes to your account here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ComponentCard> */}

          {/* Table Component */}
          <ComponentCard title="Table">
            <Table>
              <TableCaption>A list of recent invoices.</TableCaption>
              <TableHead>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>

          {/* Drawer Component */}
          {/* <ComponentCard title="Drawer">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" value="John Doe" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Save changes</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </ComponentCard> */}

          {/* Pagination Component */}
          <ComponentCard title="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ComponentCard>

          {/* Context Menu Component */}
          {/* <ComponentCard title="Context Menu">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Settings</ContextMenuItem>
                <ContextMenuItem>Keyboard shortcuts</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentCard> */}

          {/* Scroll Area Component */}
          <ComponentCard title="Scroll Area">
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <div className="space-y-4">
                <h4 className="font-medium text-sm leading-none">Radix Primitives</h4>
                <p className="text-sm">
                  An open-source UI component library for building high-quality, accessible design
                  systems and web apps.
                </p>
                <p className="text-sm">
                  Radix Primitives is a low-level UI component library with a focus on
                  accessibility, customization and developer experience.
                </p>
                <p className="text-sm">
                  You can use these components either as the base layer of your design system, or
                  adopt them incrementally.
                </p>
                <h4 className="font-medium text-sm leading-none">Twistail UI</h4>
                <p className="text-sm">
                  Beautiful UI components built with Radix UI and Tailwind CSS.
                </p>
                <p className="text-sm">
                  This project is a collection of re-usable components built using Radix UI and
                  Tailwind CSS.
                </p>
                <p className="text-sm">
                  It&apos;s a great starting point for building your own design system.
                </p>
              </div>
            </ScrollArea>
          </ComponentCard>
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Component Card
function ComponentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Text className="mb-4 font-medium">{title}</Text>
      <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-900">{children}</div>
    </div>
  )
}

function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast('Scheduled: Catch up', {
          description: 'Friday, February 10, 2025 at 5:57 PM',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
