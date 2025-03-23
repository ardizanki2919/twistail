import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

export const ExtraSmallSize: Story = {
  args: { size: 'xs' },
  render: (args) => (
    <Form {...args} className="w-[350px]">
      <FormField className="mb-2" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">Required</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>
      </FormField>

      <FormField className="mb-2" name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel>Question</FormLabel>
          <FormMessage match="valueMissing">Required</FormMessage>
        </div>
        <FormControl asChild>
          <textarea
            className="resize-vertical min-h-[60px]"
            placeholder="What would you like to ask?"
            required
          />
        </FormControl>
      </FormField>

      <FormSubmit>Submit</FormSubmit>
    </Form>
  ),
}

export const SmallSize: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Form {...args} className="w-[400px]">
      <FormField className="mb-3" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">Required</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>
      </FormField>

      <FormField className="mb-3" name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel>Question</FormLabel>
          <FormMessage match="valueMissing">Required</FormMessage>
        </div>
        <FormControl asChild>
          <textarea
            className="resize-vertical min-h-[80px]"
            placeholder="What would you like to ask?"
            required
          />
        </FormControl>
      </FormField>

      <FormSubmit>Submit</FormSubmit>
    </Form>
  ),
}

export const MediumSize: Story = {
  args: { size: 'md' },
  render: (args) => (
    <Form {...args} className="w-[450px]">
      <FormField className="mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel>Question</FormLabel>
          <FormMessage match="valueMissing">Please enter a question</FormMessage>
        </div>
        <FormControl asChild>
          <textarea
            className="resize-vertical min-h-[100px]"
            placeholder="What would you like to ask?"
            required
          />
        </FormControl>
      </FormField>

      <FormSubmit>Submit Question</FormSubmit>
    </Form>
  ),
}

export const LargeSize: Story = {
  args: { size: 'lg' },
  render: (args) => (
    <Form {...args} className="w-[500px]">
      <FormField className="mb-5" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel className="text-base">Email</FormLabel>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>
      </FormField>

      <FormField className="mb-5" name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel className="text-base">Question</FormLabel>
          <FormMessage match="valueMissing">Please enter a question</FormMessage>
        </div>
        <FormControl asChild>
          <textarea
            className="resize-vertical min-h-[120px]"
            placeholder="What would you like to ask?"
            required
          />
        </FormControl>
      </FormField>

      <FormSubmit>Submit Question</FormSubmit>
    </Form>
  ),
}

export const ExtraLargeSize: Story = {
  args: { size: 'xl' },
  render: (args) => (
    <Form {...args} className="w-[550px]">
      <FormField className="mb-6" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel className="text-base">Email</FormLabel>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>
      </FormField>

      <FormField className="mb-6" name="question">
        <div className="flex items-baseline justify-between">
          <FormLabel className="text-base">Question</FormLabel>
          <FormMessage match="valueMissing">Please enter a question</FormMessage>
        </div>
        <FormControl asChild>
          <textarea
            className="resize-vertical min-h-[150px]"
            placeholder="What would you like to ask?"
            required
          />
        </FormControl>
      </FormField>

      <FormSubmit>Submit Question</FormSubmit>
    </Form>
  ),
}
