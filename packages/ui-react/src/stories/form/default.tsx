import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

export const Default: Story = {
  render: (args) => (
    <Form {...args} className="w-[400px]">
      <FormField className="mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
          <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
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
