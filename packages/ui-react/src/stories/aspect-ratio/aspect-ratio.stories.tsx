import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from '#/components/aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
  title: 'Base Components/Aspect Ratio',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description: 'The desired aspect ratio',
      defaultValue: 16 / 9,
    },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: (args) => (
    <div className="w-[480px]">
      <AspectRatio ratio={16 / 9} className="border border-white bg-muted" {...args}>
        <img
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          className="size-full rounded-md object-cover"
          alt="Pict by Alvaro Pinot"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: (args) => (
    <div className="w-[480px]">
      <AspectRatio ratio="square" className="bg-muted" {...args}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          className="size-full rounded-md object-cover"
          alt="Pict by Drew Beamer"
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: (args) => (
    <div className="w-[420px]">
      <AspectRatio ratio={3 / 4} className="bg-muted" {...args}>
        <img
          src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?w=800&dpr=2&q=80"
          className="size-full rounded-md object-cover"
          alt="Pict by Johannes Plenio"
        />
      </AspectRatio>
    </div>
  ),
}
