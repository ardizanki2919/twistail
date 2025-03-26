import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote, BlockquoteAuthor, blockquoteStyles } from '#/components/blockquote'

const meta: Meta<typeof Blockquote> = {
  component: Blockquote,
  title: 'Base Components/Blockquote',
  tags: ['autodocs', 'status:done'],
  argTypes: {
    variant: {
      control: 'select',
      options: [...Object.keys(blockquoteStyles.variants.variant)],
    },
    size: {
      control: 'select',
      options: [...Object.keys(blockquoteStyles.variants.size)],
    },
  },
}

export default meta
type Story = StoryObj<typeof Blockquote>

export const Default: Story = {
  render: (args) => (
    <Blockquote {...args}>
      The science of operations, as derived from mathematics more especially, is a science of
      itself, and has its own abstract truth and value.
      <BlockquoteAuthor>Ada Lovelace</BlockquoteAuthor>
    </Blockquote>
  ),
}

export const WithoutAuthor: Story = {
  render: (args) => (
    <Blockquote {...args}>
      The only way to learn a new programming language is by writing programs in it.
    </Blockquote>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <Blockquote variant="default">
        The best way to predict the future is to invent it.
        <BlockquoteAuthor>Alan Kay</BlockquoteAuthor>
      </Blockquote>

      <Blockquote variant="muted">
        Simplicity is prerequisite for reliability.
        <BlockquoteAuthor>Edsger W. Dijkstra</BlockquoteAuthor>
      </Blockquote>

      <Blockquote variant="primary">
        Programming isn't about what you know; it's about what you can figure out.
        <BlockquoteAuthor>Chris Pine</BlockquoteAuthor>
      </Blockquote>

      <Blockquote variant="destructive">
        The most disastrous thing that you can ever learn is your first programming language.
        <BlockquoteAuthor>Alan Kay</BlockquoteAuthor>
      </Blockquote>

      <Blockquote variant="success">
        Any fool can write code that a computer can understand. Good programmers write code that
        humans can understand.
        <BlockquoteAuthor>Martin Fowler</BlockquoteAuthor>
      </Blockquote>

      <Blockquote variant="warning">
        Always code as if the guy who ends up maintaining your code will be a violent psychopath who
        knows where you live.
        <BlockquoteAuthor>John Woods</BlockquoteAuthor>
      </Blockquote>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <Blockquote size="sm">
        First, solve the problem. Then, write the code.
        <BlockquoteAuthor>John Johnson</BlockquoteAuthor>
      </Blockquote>

      <Blockquote size="md">
        Experience is the name everyone gives to their mistakes.
        <BlockquoteAuthor>Oscar Wilde</BlockquoteAuthor>
      </Blockquote>

      <Blockquote size="lg">
        Code is like humor. When you have to explain it, it's bad.
        <BlockquoteAuthor>Cory House</BlockquoteAuthor>
      </Blockquote>
    </div>
  ),
}

export const LongContent: Story = {
  render: (args) => (
    <Blockquote className="max-w-3xl" {...args}>
      The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds
      his castles in the air, from air, creating by exertion of the imagination. Few media of
      creation are so flexible, so easy to polish and rework, so readily capable of realizing grand
      conceptual structures.
      <BlockquoteAuthor>Frederick P. Brooks Jr., The Mythical Man-Month</BlockquoteAuthor>
    </Blockquote>
  ),
}
