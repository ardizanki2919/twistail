import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import { Toggle, ToggleGroup, ToggleGroupItem } from '#/components/toggle'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Base Components/Toggle',
  tags: ['autodocs', 'status:done'],
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <>
      <Toggle aria-label="Toggle star">
        <Lucide.Star className="pointer-events-none size-4 shrink-0" />
      </Toggle>
    </>
  ),
}

export const Grouped: Story = {
  render: () => (
    <>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Lucide.Bold className="size-4 shrink-0" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Lucide.Italic className="size-4 shrink-0" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <Lucide.Underline className="size-4 shrink-0" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  ),
}
