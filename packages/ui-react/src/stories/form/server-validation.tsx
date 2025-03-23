import * as React from 'react'
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

export const ServerValidation: Story = {
  render: (args) => {
    const [serverErrors, setServerErrors] = React.useState<Record<string, string>>({
      username: 'This username is already taken',
    })

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)

      // Simulate server validation
      const errors: Record<string, string> = {}

      if (formData.get('email') === 'test@example.com') {
        errors.email = 'This email is already registered'
      }

      if (Object.keys(errors).length > 0) {
        setServerErrors(errors)
        return
      }

      // Clear errors and submit
      setServerErrors({})
      alert('Form submitted successfully!')
    }

    const handleClearServerErrors = () => {
      setServerErrors({})
    }

    return (
      <Form
        {...args}
        className="w-[450px]"
        onSubmit={handleSubmit}
        onClearServerErrors={handleClearServerErrors}
      >
        <FormField className="mb-4" name="username" serverInvalid={Boolean(serverErrors.username)}>
          <div className="flex items-baseline justify-between">
            <FormLabel>Username</FormLabel>
            {serverErrors.username && (
              <span className="font-medium text-destructive text-sm">{serverErrors.username}</span>
            )}
          </div>
          <FormControl asChild hasError={Boolean(serverErrors.username)}>
            <input type="text" placeholder="Choose a username" required />
          </FormControl>
          <FormMessage match="valueMissing">Username is required</FormMessage>
        </FormField>

        <FormField className="mb-4" name="email" serverInvalid={Boolean(serverErrors.email)}>
          <div className="flex items-baseline justify-between">
            <FormLabel>Email</FormLabel>
            {serverErrors.email && (
              <span className="font-medium text-destructive text-sm">{serverErrors.email}</span>
            )}
          </div>
          <FormControl asChild hasError={Boolean(serverErrors.email)}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              defaultValue="test@example.com"
            />
          </FormControl>
          <FormMessage match="valueMissing">Email is required</FormMessage>
          <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
        </FormField>

        <FormField className="mb-4" name="password">
          <div className="flex items-baseline justify-between">
            <FormLabel>Password</FormLabel>
          </div>
          <FormControl asChild>
            <input type="password" placeholder="Create a password" required minLength={8} />
          </FormControl>
          <FormMessage match="valueMissing">Password is required</FormMessage>
          <FormMessage match="tooShort">Password must be at least 8 characters</FormMessage>
        </FormField>

        <div className="mb-4 text-muted-foreground text-sm">
          <p>Try submitting with the pre-filled email to see server validation.</p>
        </div>

        <FormSubmit>Create Account</FormSubmit>
      </Form>
    )
  },
}
