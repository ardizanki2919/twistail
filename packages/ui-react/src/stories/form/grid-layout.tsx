import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

export const GridLayout: Story = {
  render: (args) => (
    <Form {...args} className="w-[600px]">
      <div className="grid grid-cols-2 gap-4">
        <FormField name="firstName">
          <FormLabel>First Name</FormLabel>
          <FormControl asChild>
            <input type="text" placeholder="First name" required />
          </FormControl>
          <FormMessage match="valueMissing">Required field</FormMessage>
        </FormField>

        <FormField name="lastName">
          <FormLabel>Last Name</FormLabel>
          <FormControl asChild>
            <input type="text" placeholder="Last name" required />
          </FormControl>
          <FormMessage match="valueMissing">Required field</FormMessage>
        </FormField>
      </div>

      <div>
        <FormField name="email">
          <FormLabel>Email</FormLabel>
          <FormControl asChild>
            <input type="email" placeholder="Email address" required />
          </FormControl>
          <FormMessage match="valueMissing">Please enter your email</FormMessage>
          <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
        </FormField>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <FormField name="password">
          <FormLabel>Password</FormLabel>
          <FormControl asChild>
            <input type="password" placeholder="Password" required minLength={8} />
          </FormControl>
          <FormMessage match="valueMissing">Password is required</FormMessage>
          <FormMessage match="tooShort">Must be at least 8 characters</FormMessage>
        </FormField>

        <FormField name="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl asChild>
            <input type="password" placeholder="Confirm password" required />
          </FormControl>
          <FormMessage match="valueMissing">Please confirm your password</FormMessage>
        </FormField>
      </div>

      <div className="mt-6">
        <FormSubmit>Register</FormSubmit>
      </div>
    </Form>
  ),
}
