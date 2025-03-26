import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { Button } from '#/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardHeader,
  CardTitle,
} from '#/components/card'
import { TextAreaRef, Textarea } from '#/components/textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Base Components/Textarea',
  tags: ['autodocs', 'status:done'],
  decorators: [
    (Story) => (
      <div className="flex w-full min-w-sm flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const Placeholder: Story = {
  args: {
    placeholder: 'Write something...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const HasError: Story = {
  args: {
    hasError: true,
  },
}

export const AutoResize: Story = {
  args: {
    autoResize: true,
    placeholder: 'This textarea will auto-resize as you type...',
  },
}

export const WithMaxHeight: Story = {
  args: {
    autoResize: true,
    maxHeight: 200,
    placeholder: 'This textarea has min height 52px and max height 200px...',
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.',
  },
}

export const WithRef: Story = {
  render: () => {
    const textareaRef = useRef<TextAreaRef>(null)
    const [maxHeight, setMaxHeight] = useState(0)

    const checkRef = () => {
      if (textareaRef.current) {
        setMaxHeight(textareaRef.current.maxHeight)
      }
    }

    return (
      <div className="w-full max-w-md space-y-4">
        <p>Current max height from ref: {maxHeight}</p>
        <Textarea
          ref={textareaRef}
          autoResize
          placeholder="Type something and click the button to check ref..."
        />
        <Button onClick={checkRef}>Check Ref</Button>
      </div>
    )
  },
}

export const FormExample: Story = {
  render: () => {
    const [bio, setBio] = useState(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
    const [shouldClear, setShouldClear] = useState(false)
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      alert(`Submitted bio: ${bio}`)
      if (shouldClear) {
        setBio('')
      }
    }

    return (
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="bio" className="font-medium">
            Bio
          </label>
          <Textarea
            id="bio"
            name="bio"
            autoResize
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button type="submit" size="sm">
            Submit
          </Button>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="should-clear-bio"
              checked={shouldClear}
              onChange={(e) => setShouldClear(e.target.checked)}
            />
            <label htmlFor="should-clear-bio">Clear bio after submit.</label>
          </div>
        </div>
      </form>
    )
  },
}

export const WithCard: Story = {
  render: () => (
    <Card className="sm:w-96">
      <CardHeader spacing="compact">
        <CardTitle>Submit details</CardTitle>
        <CardDescription>Insert some text</CardDescription>
      </CardHeader>
      <CardDivider spacing="compact" />
      <CardContent spacing="compact">
        <Textarea
          id="textarea1"
          name="textarea1"
          className="mt-2"
          placeholder="Standard textarea (no auto-resize)"
        />

        <p className="mt-4 font-medium text-sm">Auto-resize textarea:</p>
        <Textarea
          id="textarea2"
          name="textarea2"
          className="mt-2"
          autoResize
          placeholder="This textarea will auto-resize as you type..."
        />

        <p className="mt-4 text-gray-500 text-sm">This is disabled:</p>
        <Textarea id="textarea3" name="textarea3" className="mt-2" disabled />
      </CardContent>
    </Card>
  ),
}
