import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  InputPin,
  InputPinGroup,
  InputPinSeparator,
  InputPinSlot,
  inputPinStyles,
} from '#/components/input-pin'

const meta: Meta<typeof InputPin> = {
  component: InputPin,
  title: 'Base Components/Input PIN',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: [...Object.keys(inputPinStyles.variants.inputSize)],
      description: 'Input size',
      defaultValue: 'md',
    },
    hasError: {
      control: 'boolean',
      description: 'Display error state',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof InputPin>

export const Default: Story = {
  args: {
    maxLength: 4,
    inputSize: 'md',
  },
  render: (args) => (
    // @ts-ignore
    <InputPin {...args}>
      <InputPinGroup>
        <InputPinSlot index={0} />
        <InputPinSlot index={1} />
        <InputPinSlot index={2} />
        <InputPinSlot index={3} />
      </InputPinGroup>
    </InputPin>
  ),
}

export const Separator: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-20 font-medium text-sm">Horizontal:</span>
        <InputPin maxLength={6} inputSize="md">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
          </InputPinGroup>
          <InputPinSeparator />
          <InputPinGroup>
            <InputPinSlot index={3} />
            <InputPinSlot index={4} />
            <InputPinSlot index={5} />
          </InputPinGroup>
        </InputPin>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-20 font-medium text-sm">Vertical:</span>
        <InputPin maxLength={6} inputSize="md">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
          </InputPinGroup>
          <InputPinSeparator orientation="vertical" />
          <InputPinGroup>
            <InputPinSlot index={3} />
            <InputPinSlot index={4} />
            <InputPinSlot index={5} />
          </InputPinGroup>
        </InputPin>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  parameters: {
    controls: { exclude: ['inputSize'] },
  },
  render: () => (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-10 font-medium text-sm">XS:</span>
        <InputPin maxLength={4} inputSize="xs">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
            <InputPinSlot index={3} />
          </InputPinGroup>
        </InputPin>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-10 font-medium text-sm">SM:</span>
        <InputPin maxLength={4} inputSize="sm">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
            <InputPinSlot index={3} />
          </InputPinGroup>
        </InputPin>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-10 font-medium text-sm">MD:</span>
        <InputPin maxLength={4} inputSize="md">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
            <InputPinSlot index={3} />
          </InputPinGroup>
        </InputPin>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-10 font-medium text-sm">LG:</span>
        <InputPin maxLength={4} inputSize="lg">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
            <InputPinSlot index={3} />
          </InputPinGroup>
        </InputPin>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-10 font-medium text-sm">XL:</span>
        <InputPin maxLength={4} inputSize="xl">
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
            <InputPinSlot index={3} />
          </InputPinGroup>
        </InputPin>
      </div>
    </div>
  ),
}

export const WithError: Story = {
  args: {
    maxLength: 4,
    hasError: true,
  },
  render: (args) => (
    // @ts-ignore
    <InputPin {...args}>
      <InputPinGroup>
        <InputPinSlot index={0} />
        <InputPinSlot index={1} />
        <InputPinSlot index={2} />
        <InputPinSlot index={3} />
      </InputPinGroup>
    </InputPin>
  ),
}

export const Disabled: Story = {
  args: {
    maxLength: 4,
    disabled: true,
  },
  render: (args) => (
    // @ts-ignore
    <InputPin {...args}>
      <InputPinGroup>
        <InputPinSlot index={0} />
        <InputPinSlot index={1} />
        <InputPinSlot index={2} />
        <InputPinSlot index={3} />
      </InputPinGroup>
    </InputPin>
  ),
}

export const VerificationCode: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const handleComplete = (val: string) => {
      console.info('Completed:', val)
    }

    return (
      <div className="flex flex-col space-y-4">
        <h3 className="font-medium text-lg">Verification Code</h3>
        <p className="text-muted-foreground text-sm">
          Please enter the 6-digit code sent to your phone
        </p>
        <InputPin
          value={value}
          onChange={setValue}
          maxLength={6}
          onComplete={handleComplete}
          inputSize="lg"
        >
          <InputPinGroup>
            <InputPinSlot index={0} />
            <InputPinSlot index={1} />
            <InputPinSlot index={2} />
          </InputPinGroup>
          <InputPinSeparator />
          <InputPinGroup>
            <InputPinSlot index={3} />
            <InputPinSlot index={4} />
            <InputPinSlot index={5} />
          </InputPinGroup>
        </InputPin>
        <p className="text-muted-foreground text-sm">Current value: {value || '(empty)'}</p>
      </div>
    )
  },
}

export const CreditCardFormat: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <h3 className="font-medium text-lg">Credit Card Number</h3>
      <InputPin maxLength={16} inputMode="numeric">
        <InputPinGroup>
          <InputPinSlot index={0} />
          <InputPinSlot index={1} />
          <InputPinSlot index={2} />
          <InputPinSlot index={3} />
        </InputPinGroup>
        <InputPinSeparator />
        <InputPinGroup>
          <InputPinSlot index={4} />
          <InputPinSlot index={5} />
          <InputPinSlot index={6} />
          <InputPinSlot index={7} />
        </InputPinGroup>
        <InputPinSeparator />
        <InputPinGroup>
          <InputPinSlot index={8} />
          <InputPinSlot index={9} />
          <InputPinSlot index={10} />
          <InputPinSlot index={11} />
        </InputPinGroup>
        <InputPinSeparator />
        <InputPinGroup>
          <InputPinSlot index={12} />
          <InputPinSlot index={13} />
          <InputPinSlot index={14} />
          <InputPinSlot index={15} />
        </InputPinGroup>
      </InputPin>
    </div>
  ),
}
