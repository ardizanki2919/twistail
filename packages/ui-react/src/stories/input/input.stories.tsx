import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components/button'
import { Input } from '#/components/input'
import { Label } from '#/components/label'
import { Text } from '#/components/text'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Base Components/Input',
  tags: ['autodocs', 'status:done'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input />,
}

export const Disabled: Story = {
  render: () => <Input disabled />,
}

export const WithPlaceholder: Story = {
  render: () => <Input placeholder="With Placeholder" />,
}

export const TypePassword: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </div>
  ),
}

export const TypeSearch: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Label htmlFor="search">Search</Label>
      <Input placeholder="Enter search" id="search" name="search" type="search" />
    </div>
  ),
}

export const TypeSearchDisabled: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Label htmlFor="search">Search</Label>
      <Input disabled placeholder="Enter search" id="search" name="search" type="search" />
    </div>
  ),
}

export const RequiredAndPattern: Story = {
  render: () => (
    <form className="flex w-xs flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input
        required
        id="secret"
        name="secret"
        type="text"
        placeholder="Non-capitalized only"
        pattern="[a-z]+"
      />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
  ),
}

export const TypeFile: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Input id="upload" name="username" placeholder="Username" />
      <Input id="upload" name="password" placeholder="Password" type="password" />
      <Input id="upload" name="upload" type="file" className="mt-1" />
    </div>
  ),
}

export const TypeNumber: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
  ),
}

export const HasError: Story = {
  render: () => (
    <div className="flex w-xs flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input hasError placeholder="Enter full name" id="full_name" name="full_name" type="text" />
    </div>
  ),
}
export const InputWithButton: Story = {
  render: () => (
    <form className="inline-flex w-xs items-center gap-1">
      <Input
        required
        id="secret"
        name="secret"
        type="text"
        placeholder="Non-capitalized only"
        pattern="[a-z]+"
      />
      <Button variant="outline">Submit</Button>
    </form>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [search, setSearch] = React.useState('')
    return (
      <form className="flex w-xs flex-col gap-2">
        <Label htmlFor="File">Search</Label>
        <Input
          placeholder="Enter search"
          id="search"
          name="search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button type="submit" variant="secondary">
          Submit
        </Button>
        <Text size="sm" className="my-1">
          {search}
        </Text>
      </form>
    )
  },
}
