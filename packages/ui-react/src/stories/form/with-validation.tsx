import * as React from 'react'
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

export const WithValidation: Story = {
  render: (args) => {
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      alert('Form submitted successfully!')
    }
    return (
      <Form {...args} className="w-[400px]" onSubmit={handleSubmit}>
        <FormField className="mb-4" name="email">
          <div className="flex items-baseline justify-between">
            <FormLabel>Email</FormLabel>
            <FormMessage match="valueMissing">Please enter your email</FormMessage>
            <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
          </div>
          <FormControl asChild>
            <input type="email" placeholder="example@email.com" required />
          </FormControl>
        </FormField>

        <FormField className="mb-4" name="password">
          <div className="flex items-baseline justify-between">
            <FormLabel>Password</FormLabel>
            <FormMessage match="valueMissing">Please enter a password</FormMessage>
            <FormMessage match="tooShort">Password must be at least 8 characters</FormMessage>
          </div>
          <FormControl asChild>
            <input type="password" placeholder="Enter password" required minLength={8} />
          </FormControl>
        </FormField>

        <FormField className="mb-4" name="message">
          <div className="flex items-baseline justify-between">
            <FormLabel>Message</FormLabel>
            <FormMessage match="valueMissing">Please enter a message</FormMessage>
          </div>
          <FormControl asChild>
            <textarea
              className="resize-vertical min-h-[100px]"
              placeholder="Your message here"
              required
            />
          </FormControl>
        </FormField>

        <FormSubmit>Submit Form</FormSubmit>
      </Form>
    )
  },
}
