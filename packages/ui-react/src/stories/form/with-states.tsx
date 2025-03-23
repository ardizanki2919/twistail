import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
  FormValidityState,
} from '#/components/form'
import { type Story } from './form.stories'

export const WithErrorState: Story = {
  args: { hasError: true },
  render: (args) => (
    <Form {...args} className="w-[400px]">
      <FormField className="mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
          <FormMessage>Invalid email format</FormMessage>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" defaultValue="invalid-email" />
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="password">
        <div className="flex items-baseline justify-between">
          <FormLabel>Password</FormLabel>
          <FormMessage>Password is too short</FormMessage>
        </div>
        <FormControl asChild hasError>
          <input type="password" placeholder="Enter password" defaultValue="1234" />
        </FormControl>
      </FormField>

      <FormSubmit>Submit Form</FormSubmit>
    </Form>
  ),
}

export const WithValidityState: Story = {
  render: (args) => (
    <Form {...args} className="w-[400px]">
      <FormField className="mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <FormLabel>Email</FormLabel>
        </div>
        <FormControl asChild>
          <input type="email" placeholder="Enter your email" required />
        </FormControl>

        <FormValidityState name="email">
          {(validity) => (
            <div className="mt-1 text-sm">
              {validity?.typeMismatch && (
                <p className="text-destructive">Please enter a valid email address</p>
              )}
              {validity?.valueMissing && <p className="text-destructive">Email is required</p>}
              {validity?.valid && <p className="text-success">Email format is valid</p>}
            </div>
          )}
        </FormValidityState>
      </FormField>

      <FormField className="mb-4" name="password">
        <div className="flex items-baseline justify-between">
          <FormLabel>Password</FormLabel>
        </div>
        <FormControl asChild>
          <input
            type="password"
            placeholder="Enter password"
            required
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
          />
        </FormControl>

        <FormValidityState name="password">
          {(validity) => (
            <div className="mt-1 text-sm">
              {validity?.valueMissing && <p className="text-destructive">Password is required</p>}
              {validity?.tooShort && (
                <p className="text-destructive">Password must be at least 8 characters</p>
              )}
              {validity?.patternMismatch && (
                <p className="text-destructive">
                  Password must contain at least one uppercase letter, one lowercase letter, and one
                  number
                </p>
              )}
              {validity?.valid && <p className="text-success">Password meets requirements</p>}
            </div>
          )}
        </FormValidityState>
      </FormField>

      <FormSubmit>Submit Form</FormSubmit>
    </Form>
  ),
}
