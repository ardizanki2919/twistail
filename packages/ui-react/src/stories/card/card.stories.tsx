import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '#/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/card'
import { Checkbox } from '#/components/checkbox'
import { Heading } from '#/components/heading'
import { Input } from '#/components/input'
import { Label } from '#/components/label'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components/listbox'
import { RadioGroup, RadioGroupItem } from '#/components/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/tabs'
import { Text } from '#/components/text'
import { Textarea } from '#/components/textarea'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/tooltip'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Base Components/Card',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full justify-center p-4">
        <div className="w-full max-w-lg">
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This is a basic card with just content.</p>
      </CardContent>
    </Card>
  ),
}

export const CompactCard: Story = {
  render: () => (
    <Card>
      <CardHeader spacing="compact">
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>This card uses compact spacing for all sections</CardDescription>
      </CardHeader>
      <CardDivider spacing="compact" />
      <CardContent spacing="compact">
        <Text size="sm" className="leading-relaxed">
          The compact spacing variant reduces padding in all card sections, making it more suitable
          for dense UIs or when space is limited.
        </Text>
      </CardContent>
      <CardDivider spacing="compact" />
      <CardFooter spacing="compact">
        <Button variant="outline" size="sm" className="w-full">
          Close
        </Button>
        <Button size="sm" className="w-full">
          I Agree
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithText: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Perseverance Rover's Latest Mars Discovery</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed">
          NASA's Perseverance Rover has made an exciting discovery on Mars, finding evidence of
          ancient microbial life in rock samples. This marks a significant step forward in our
          understanding of the Red Planet's history and the search for extraterrestrial life.
        </p>
      </CardContent>
    </Card>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle asChild>
          <Heading level="h4">Card with Divider</Heading>
        </CardTitle>
        <CardDescription>This card uses CardDivider component between sections</CardDescription>
      </CardHeader>
      <CardDivider />
      <CardContent>
        <Text className="leading-relaxed">
          Using the CardDivider component provides a clear visual separation between different
          sections of the card. This can be useful when you want to organize content into distinct
          sections.
        </Text>
      </CardContent>
      <CardDivider />
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  ),
}

export const AsChildList: Story = {
  render: () => (
    <ol className="flex list-none flex-col gap-4">
      <Card asChild spacing="compact">
        <li>
          <CardContent>
            This card will be turned into a {`<li>`} element. The asChild prop allows the Card
            component to be rendered as a different element while maintaining its styling.
          </CardContent>
        </li>
      </Card>
      <Card asChild>
        <li>
          <CardContent>
            This card will also be turned into a {`<li>`} element. This is useful for creating lists
            of cards that semantically should be list items.
          </CardContent>
        </li>
      </Card>
    </ol>
  ),
}

const formItems = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4 (Disabled)', disabled: true },
  { value: 'option5', label: 'Option 5' },
]

export const WithForm: Story = {
  render: () => (
    <Card>
      <CardHeader className="border-border border-b pb-4">
        <CardTitle>Form Example</CardTitle>
        <CardDescription>Fill out this form to submit your request.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="line" className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Personal</TabsTrigger>
            <TabsTrigger value="tab2">Account</TabsTrigger>
            <TabsTrigger value="tab3" disabled>
              Advanced
            </TabsTrigger>
          </TabsList>
          <div className="mt-4">
            <TabsContent value="tab1">
              <p className="text-muted-foreground text-sm">Enter your personal information.</p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="text-muted-foreground text-sm">Configure your account settings.</p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="text-muted-foreground text-sm">
                Advanced settings are currently disabled.
              </p>
            </TabsContent>
          </div>
        </Tabs>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" placeholder="John Doe" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="notifications" />
          <Label htmlFor="notifications">
            I'd like to receive notifications about product updates and news.
          </Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Preferred Contact Method</Label>
          <RadioGroup>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem checked value="email" id="contact_email" />
              <Label htmlFor="contact_email">Email</Label>
            </div>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem value="phone" id="contact_phone" />
              <Label htmlFor="contact_phone">Phone</Label>
            </div>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem value="sms" id="contact_sms" />
              <Label htmlFor="contact_sms">SMS</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests">Interests</Label>
          <Listbox>
            <ListboxTrigger>
              <ListboxValue placeholder="Select your interests" />
            </ListboxTrigger>
            <ListboxContent>
              {formItems.map((item) => (
                <ListboxItem key={item.value} value={item.value} disabled={item.disabled}>
                  {item.label}
                </ListboxItem>
              ))}
            </ListboxContent>
          </Listbox>
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Upload Document</Label>
          <Input id="file" type="file" />
        </div>
      </CardContent>

      <CardDivider />

      <CardFooter>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
        <Button className="w-full" variant="destructive">
          Reset
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </TooltipTrigger>
          <TooltipContent>Submit your information to continue</TooltipContent>
        </Tooltip>
      </CardFooter>
    </Card>
  ),
}
