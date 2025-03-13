import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '#/components'
import { Select } from '#/components'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Base Components/Select',
  tags: ['status:preview'],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select className="max-w-72">
      <option value="0-18">18 and under</option>
      <option value="19-39">19 to 39</option>
      <option value="40-64">40 to 64</option>
      <option value="65-infinity">65 and over</option>
    </Select>
  ),
}

export const WithLongValues: Story = {
  render: () => (
    <Select>
      <option value="gpt-3">GPT-3 (Generative Pre-trained Transformer 3)</option>
      <option value="bert">BERT (Bidirectional Encoder Representations from Transformers)</option>
      <option value="t5">T5 (Text-To-Text Transfer Transformer)</option>
    </Select>
  ),
}
export const WithLabel: Story = {
  render: () => (
    <>
      <Label htmlFor="age1">Select age</Label>
      <Select className="max-w-72" id="age1">
        <option value="0-18">18 and under</option>
        <option value="19-39">19 to 39</option>
        <option value="40-64">40 to 64</option>
        <option value="65-infinity">65 and over</option>
      </Select>
    </>
  ),
}
export const HasError: Story = {
  render: () => (
    <Select className="max-w-72" id="age-error" hasError>
      <option value="0-18">18 and under</option>
      <option value="19-39">19 to 39</option>
      <option value="40-64">40 to 64</option>
      <option value="65-infinity">65 and over</option>
    </Select>
  ),
}
export const LongOption: Story = {
  render: () => (
    <>
      <Label htmlFor="model">Select model</Label>
      <Select id="model">
        <option value="gpt-3">GPT-3 (Generative Pre-trained Transformer 3)</option>
        <option value="bert">BERT (Bidirectional Encoder Representations from Transformers)</option>
        <option value="t5">T5 (Text-To-Text Transfer Transformer)</option>
      </Select>
    </>
  ),
}
