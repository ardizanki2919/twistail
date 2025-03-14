import type { Meta, StoryObj } from '@storybook/react'
import { Text, textStyles } from '#/components'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Base Components/Text',
  tags: ['status:preview'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content',
      table: {
        type: { summary: 'ReactNode | string' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: [...Object.keys(textStyles.variants.size)],
      table: {
        type: { summary: 'TextStyles["size"]' },
      },
    },
    weight: {
      control: { type: 'radio' },
      options: [...Object.keys(textStyles.variants.weight)],
      table: {
        type: { summary: 'TextStyles["weight"]' },
      },
    },
    align: {
      control: { type: 'radio' },
      options: [...Object.keys(textStyles.variants.align)],
      table: {
        type: { summary: 'TextStyles["align"]' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const SizeShowcase: Story = {
  parameters: {
    controls: { exclude: ['size'] },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="md">Medium Text</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
      <Text size="2xl">2XL Text</Text>
    </div>
  ),
}

export const WeightShowcase: Story = {
  parameters: {
    controls: { exclude: ['weight'] },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
}

export const AlignmentShowcase: Story = {
  parameters: {
    controls: { exclude: ['align'] },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Text align="left">Left aligned text</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
    </div>
  ),
}
