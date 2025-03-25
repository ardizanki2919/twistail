import type { Meta, StoryObj } from '@storybook/react'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '#/components/description-list'

const meta: Meta<typeof DescriptionList> = {
  component: DescriptionList,
  title: 'Base Components/Description List',
  tags: ['autodocs', 'status:done'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Controls the size of the description list',
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'card'],
      description: 'Controls the visual style of the description list',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-sm justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DescriptionList>

const ExampleData = () => (
  <>
    <DescriptionTerm>Name</DescriptionTerm>
    <DescriptionDetails>John Doe</DescriptionDetails>

    <DescriptionTerm>Email</DescriptionTerm>
    <DescriptionDetails>john.doe@example.com</DescriptionDetails>

    <DescriptionTerm>Position</DescriptionTerm>
    <DescriptionDetails>Software Engineer</DescriptionDetails>

    <DescriptionTerm>Department</DescriptionTerm>
    <DescriptionDetails>Engineering</DescriptionDetails>

    <DescriptionTerm>Location</DescriptionTerm>
    <DescriptionDetails>San Francisco, CA</DescriptionDetails>
  </>
)

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => (
    <DescriptionList {...args}>
      <ExampleData />
    </DescriptionList>
  ),
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    variant: 'default',
  },
  render: (args) => (
    <DescriptionList {...args}>
      <ExampleData />
    </DescriptionList>
  ),
}

export const SizeLarge: Story = {
  args: {
    size: 'lg',
    variant: 'default',
  },
  render: (args) => (
    <DescriptionList {...args}>
      <ExampleData />
    </DescriptionList>
  ),
}

export const VariantBordered: Story = {
  args: {
    variant: 'bordered',
  },
  render: (args) => (
    <DescriptionList {...args}>
      <ExampleData />
    </DescriptionList>
  ),
}

export const VariantCard: Story = {
  args: {
    variant: 'card',
  },
  render: (args) => (
    <DescriptionList {...args}>
      <ExampleData />
    </DescriptionList>
  ),
}

export const WithCustomClasses: Story = {
  render: () => (
    <DescriptionList className="max-w-2xl">
      <DescriptionTerm className="font-bold">Custom Term</DescriptionTerm>
      <DescriptionDetails className="italic">Custom Details with italic text</DescriptionDetails>

      <DescriptionTerm className="text-primary">Colored Term</DescriptionTerm>
      <DescriptionDetails className="text-success">Colored Details</DescriptionDetails>
    </DescriptionList>
  ),
}

export const ResponsiveExample: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="mx-auto w-full max-w-[1200px] p-6">
      <div className="mb-8">
        <h3 className="mb-4 font-medium text-lg">
          Default (stacks on mobile, side-by-side on desktop)
        </h3>
        <DescriptionList className="max-w-3xl">
          <ExampleData />
        </DescriptionList>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-medium text-lg">Card Variant</h3>
          <DescriptionList variant="card" size="sm">
            <ExampleData />
          </DescriptionList>
        </div>

        <div>
          <h3 className="mb-4 font-medium text-lg">Bordered Variant</h3>
          <DescriptionList variant="bordered" size="sm">
            <ExampleData />
          </DescriptionList>
        </div>
      </div>
    </div>
  ),
}

export const InvoiceDetails: Story = {
  render: () => (
    <div className="mx-auto w-full min-w-2xl rounded-lg border border-border p-6">
      <h2 className="mb-4 font-bold text-xl">Invoice #INV-2023-001</h2>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <DescriptionList size="sm">
          <DescriptionTerm>Client</DescriptionTerm>
          <DescriptionDetails>Acme Corporation</DescriptionDetails>

          <DescriptionTerm>Contact</DescriptionTerm>
          <DescriptionDetails>John Doe</DescriptionDetails>

          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>john@acmecorp.com</DescriptionDetails>

          <DescriptionTerm>Address</DescriptionTerm>
          <DescriptionDetails>
            123 Business St, Suite 100, San Francisco, CA 94107
          </DescriptionDetails>
        </DescriptionList>

        <DescriptionList size="sm">
          <DescriptionTerm>Invoice Date</DescriptionTerm>
          <DescriptionDetails>March 15, 2023</DescriptionDetails>

          <DescriptionTerm>Due Date</DescriptionTerm>
          <DescriptionDetails>April 15, 2023</DescriptionDetails>

          <DescriptionTerm>Status</DescriptionTerm>
          <DescriptionDetails>
            <span className="inline-flex items-center rounded-full bg-info/20 px-2 py-1 font-medium text-info text-xs">
              Pending
            </span>
          </DescriptionDetails>

          <DescriptionTerm>Payment Method</DescriptionTerm>
          <DescriptionDetails>Bank Transfer</DescriptionDetails>
        </DescriptionList>
      </div>

      <div className="mt-4 border-border border-t pt-4">
        <h3 className="mb-2 font-medium">Summary</h3>
        <DescriptionList size="sm" variant="bordered" className="mt-2">
          <DescriptionTerm>Subtotal</DescriptionTerm>
          <DescriptionDetails>$1,200.00</DescriptionDetails>

          <DescriptionTerm>Tax (10%)</DescriptionTerm>
          <DescriptionDetails>$120.00</DescriptionDetails>

          <DescriptionTerm className="font-bold">Total</DescriptionTerm>
          <DescriptionDetails className="font-bold">$1,320.00</DescriptionDetails>
        </DescriptionList>
      </div>
    </div>
  ),
}
