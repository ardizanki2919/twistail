import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '#/components/button'
import { RadioCardGroup, RadioCardIndicator, RadioCardItem } from '#/components/radio-card-group'

const meta: Meta<typeof RadioCardGroup> = {
  component: RadioCardGroup,
  title: 'Base Components/Radio Card Group',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-md flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof RadioCardGroup>

export const Default: Story = {
  render: () => {
    return (
      <RadioCardGroup className="w-full">
        <RadioCardItem value="1">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Hardware Engineer</span>
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}

export const Grid: Story = {
  render: () => {
    return (
      <RadioCardGroup className="w-full grid-cols-2">
        <RadioCardItem value="1">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Software Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="2">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Platform Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="3">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Hardware Engineer</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="4">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Security</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="5">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Marketing Ops</span>
          </div>
        </RadioCardItem>
        <RadioCardItem value="6">
          <div className="flex items-center gap-3">
            <RadioCardIndicator />
            <span>Product Manager</span>
          </div>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}

export const DefaultChecked: Story = {
  render: () => {
    return (
      <RadioCardGroup defaultValue="1" className="w-full text-sm">
        <RadioCardItem value="1" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Software Engineer</span>
        </RadioCardItem>
        <RadioCardItem value="2" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Plarform Engineer</span>
        </RadioCardItem>
        <RadioCardItem value="3" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Hardware Engineer</span>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <RadioCardGroup defaultValue="1" className="w-full text-sm">
        <RadioCardItem value="1" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Software Engineer</span>
        </RadioCardItem>
        <RadioCardItem value="2" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Plarform Engineer</span>
        </RadioCardItem>
        <RadioCardItem disabled value="3" className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Hardware Engineer</span>
        </RadioCardItem>
      </RadioCardGroup>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = React.useState('base-performance')

    const databases: {
      label: string
      value: string
      description: string
      isRecommended: boolean
    }[] = [
      {
        label: 'Base performance',
        value: 'base-performance',
        description: '1/8 vCPU, 1 GB RAM',
        isRecommended: true,
      },
      {
        label: 'Advanced performance',
        value: 'advanced-performance',
        description: '1/4 vCPU, 2 GB RAM',
        isRecommended: false,
      },
      {
        label: 'Turbo performance',
        value: 'turbo-performance',
        description: '1/2 vCPU, 4 GB RAM',
        isRecommended: false,
      },
    ]

    return (
      <div className="flex w-full min-w-xl flex-col items-center justify-start">
        <form className="w-full">
          <fieldset className="space-y-3">
            <RadioCardGroup
              value={selectedOption}
              onValueChange={(value) => setSelectedOption(value)}
              className="mt-2 grid w-full min-w-sm grid-cols-1 gap-4 text-sm md:grid-cols-2"
            >
              {databases.map((database) => (
                <RadioCardItem key={database.value} value={database.value}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="mt-1 text-gray-500 text-xs">1/8 vCPU, 1 GB RAM</p>
                    </div>
                    <RadioCardIndicator className="mt-1" />
                  </div>
                </RadioCardItem>
              ))}
            </RadioCardGroup>
          </fieldset>
          <Button
            className="mt-4"
            type="reset"
            variant="secondary"
            onClick={() => setSelectedOption('base-performance')}
          >
            Reset
          </Button>
        </form>
        <pre className="mt-6 w-full rounded-md bg-gray-100 p-2 font-mono text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-200">
          Selected Opt: {selectedOption ? selectedOption : 'Nothing selected!'}
        </pre>
      </div>
    )
  },
}
