import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card } from '#/components/card'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
  FormValidityState,
  formStyles,
} from '#/components/form'
import { Input } from '#/components/input'
import { Label } from '#/components/label'
import { Select } from '#/components/select'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Base Components/Form',
  tags: ['status:preview'],
  argTypes: {
    size: {
      control: 'select',
      options: [...Object.keys(formStyles.variants.size)],
      description: 'The size of the form elements',
      defaultValue: 'default',
    },
  },
}

export default meta
type Story = StoryObj<typeof Form>

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

export const WithVariousInputs: Story = {
  render: (args) => (
    <Form {...args} className="w-[500px]">
      <FormField className="mb-4" name="text">
        <div className="flex items-baseline justify-between">
          <FormLabel>Text Input</FormLabel>
          <FormMessage match="valueMissing">Required field</FormMessage>
        </div>
        <FormControl asChild>
          <input type="text" placeholder="Enter text" required />
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="number">
        <div className="flex items-baseline justify-between">
          <FormLabel>Number Input</FormLabel>
          <FormMessage match="rangeUnderflow">Must be at least 1</FormMessage>
          <FormMessage match="rangeOverflow">Must be at most 100</FormMessage>
        </div>
        <FormControl asChild>
          <input type="number" placeholder="Enter number" min={1} max={100} defaultValue={50} />
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="date">
        <div className="flex items-baseline justify-between">
          <FormLabel>Date Input</FormLabel>
        </div>
        <FormControl asChild>
          <input type="date" />
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="select">
        <div className="flex items-baseline justify-between">
          <FormLabel>Select Input</FormLabel>
          <FormMessage match="valueMissing">Please select an option</FormMessage>
        </div>
        <FormControl asChild>
          <select required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </FormControl>
      </FormField>

      <FormField className="mb-4" name="file">
        <div className="flex items-baseline justify-between">
          <FormLabel>File Input</FormLabel>
        </div>
        <FormControl asChild>
          <input type="file" />
        </FormControl>
      </FormField>

      <FormSubmit>Submit Form</FormSubmit>
    </Form>
  ),
}

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

export const CustomStyling: Story = {
  render: (args) => (
    <Form {...args} className="w-[450px] rounded-lg border border-border p-6 shadow-sm">
      <h2 className="mb-6 font-semibold text-xl">Contact Us</h2>

      <FormField className="mb-4" name="name">
        <FormLabel className="text-foreground/80">Full Name</FormLabel>
        <FormControl
          asChild
          className="mt-1.5 border-input/50 bg-muted/30 focus-visible:bg-background"
        >
          <input type="text" placeholder="Your name" required />
        </FormControl>
        <FormMessage match="valueMissing">Please enter your name</FormMessage>
      </FormField>

      <FormField className="mb-4" name="email">
        <FormLabel className="text-foreground/80">Email Address</FormLabel>
        <FormControl
          asChild
          className="mt-1.5 border-input/50 bg-muted/30 focus-visible:bg-background"
        >
          <input type="email" placeholder="your.email@example.com" required />
        </FormControl>
        <FormMessage match="valueMissing">Please enter your email</FormMessage>
        <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
      </FormField>

      <FormField className="mb-4" name="subject">
        <FormLabel className="text-foreground/80">Subject</FormLabel>
        <FormControl
          asChild
          className="mt-1.5 border-input/50 bg-muted/30 focus-visible:bg-background"
        >
          <select required defaultValue="">
            <option value="" disabled>
              Select a subject
            </option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="other">Other</option>
          </select>
        </FormControl>
        <FormMessage match="valueMissing">Please select a subject</FormMessage>
      </FormField>

      <FormField className="mb-6" name="message">
        <FormLabel className="text-foreground/80">Message</FormLabel>
        <FormControl
          asChild
          className="mt-1.5 min-h-[120px] border-input/50 bg-muted/30 focus-visible:bg-background"
        >
          <textarea placeholder="Your message here..." required />
        </FormControl>
        <FormMessage match="valueMissing">Please enter your message</FormMessage>
      </FormField>

      <FormSubmit className="w-full bg-primary/90 font-medium hover:bg-primary">
        Send Message
      </FormSubmit>
    </Form>
  ),
}

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

// FIXME: combined with other components has breaking the styles
export const CompleteExample: Story = {
  render: (args) => {
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      setLoading(true)

      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        alert('Order submitted successfully!')
      }, 1500)
    }

    return (
      <Card className="w-[600px]">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="font-semibold text-xl">Place Your Order</h2>
            <p className="text-muted-foreground text-sm">
              Fill out the form below to complete your purchase.
            </p>
          </div>

          <Form {...args} onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-foreground/80 text-sm">Personal Information</h3>

                <div className="grid grid-cols-2 gap-4">
                  <FormField name="firstName">
                    <FormLabel>First Name</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="First name" required />
                    </FormControl>
                    <FormMessage match="valueMissing">Required field</FormMessage>
                  </FormField>

                  <FormField name="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="Last name" required />
                    </FormControl>
                    <FormMessage match="valueMissing">Required field</FormMessage>
                  </FormField>
                </div>

                <FormField name="email">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl asChild>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </FormControl>
                  <FormMessage match="valueMissing">Email is required</FormMessage>
                  <FormMessage match="typeMismatch">Please provide a valid email</FormMessage>
                </FormField>

                <FormField name="phone">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl asChild>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </FormControl>
                </FormField>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-foreground/80 text-sm">Shipping Information</h3>

                <FormField name="address">
                  <FormLabel>Street Address</FormLabel>
                  <FormControl asChild>
                    <Input placeholder="123 Main St" required />
                  </FormControl>
                  <FormMessage match="valueMissing">Address is required</FormMessage>
                </FormField>

                <div className="grid grid-cols-2 gap-4">
                  <FormField name="city">
                    <FormLabel>City</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="City" required />
                    </FormControl>
                    <FormMessage match="valueMissing">City is required</FormMessage>
                  </FormField>

                  <FormField name="postalCode">
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="Postal code" required />
                    </FormControl>
                    <FormMessage match="valueMissing">Postal code is required</FormMessage>
                  </FormField>
                </div>

                <FormField name="country">
                  <FormLabel>Country</FormLabel>
                  <FormControl asChild>
                    <Select required defaultValue="">
                      <option value="" disabled>
                        Select country
                      </option>
                      <option value="us">United States</option>
                      <option value="ca">Canada</option>
                      <option value="uk">United Kingdom</option>
                      <option value="au">Australia</option>
                      <option value="id">Indonesia</option>
                    </Select>
                  </FormControl>
                  <FormMessage match="valueMissing">Country is required</FormMessage>
                </FormField>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-foreground/80 text-sm">Payment Information</h3>

                <FormField name="cardName">
                  <FormLabel>Name on Card</FormLabel>
                  <FormControl asChild>
                    <Input placeholder="Full name as displayed on card" required />
                  </FormControl>
                  <FormMessage match="valueMissing">Card name is required</FormMessage>
                </FormField>

                <FormField name="cardNumber">
                  <FormLabel>Card Number</FormLabel>
                  <FormControl asChild>
                    <Input placeholder="XXXX XXXX XXXX XXXX" required />
                  </FormControl>
                  <FormMessage match="valueMissing">Card number is required</FormMessage>
                </FormField>

                <div className="grid grid-cols-2 gap-4">
                  <FormField name="expiryDate">
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="MM/YY" required />
                    </FormControl>
                    <FormMessage match="valueMissing">Expiry date is required</FormMessage>
                  </FormField>

                  <FormField name="cvc">
                    <FormLabel>CVC</FormLabel>
                    <FormControl asChild>
                      <Input placeholder="CVC" required />
                    </FormControl>
                    <FormMessage match="valueMissing">CVC is required</FormMessage>
                  </FormField>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between border-border border-t pt-4">
              <button type="button" className="text-muted-foreground text-sm hover:text-foreground">
                Cancel Order
              </button>
              <FormSubmit disabled={loading}>
                {loading ? 'Processing...' : 'Complete Order'}
              </FormSubmit>
            </div>
          </Form>
        </div>
      </Card>
    )
  },
}

export const WithZodValidation: Story = {
  render: () => {
    // Definisikan schema validasi dengan Zod
    const formSchema = z
      .object({
        email: z
          .string()
          .min(1, { message: 'Email is required' })
          .email({ message: 'Invalid email format' }),
        password: z
          .string()
          .min(1, { message: 'Password is required' })
          .min(8, { message: 'Password must be at least 8 characters' })
          .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
          .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
          .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
        confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
      })

    // Definisikan tipe dari schema
    type FormValues = z.infer<typeof formSchema>

    // Setup react-hook-form dengan resolver zod
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: '',
        password: '',
        confirmPassword: '',
      },
    })

    // Handler untuk submit form
    const onSubmit = async (data: FormValues) => {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.debug('Form submitted:', data)
      alert('Form submitted successfully!')
    }

    return (
      <div className="w-[450px]">
        <h2 className="mb-6 font-semibold text-xl">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              hasError={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <p className="font-medium text-destructive text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              hasError={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <p className="font-medium text-destructive text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              hasError={!!errors.confirmPassword}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="font-medium text-destructive text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <button type="submit" disabled={isSubmitting} className={formStyles().submit()}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    )
  },
}

export const CompleteZodExample: Story = {
  render: () => {
    // Define validation schema with Zod
    const userFormSchema = z.object({
      firstName: z.string().min(1, { message: 'First name is required' }),
      lastName: z.string().min(1, { message: 'Last name is required' }),
      email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email format' }),
      phone: z.string().optional(),
      address: z.string().min(1, { message: 'Address is required' }),
      city: z.string().min(1, { message: 'City is required' }),
      postalCode: z.string().min(1, { message: 'Postal code is required' }),
      country: z.string().min(1, { message: 'Country is required' }),
      agreeToTerms: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the terms and conditions',
      }),
    })

    // Define type from schema
    type UserFormValues = z.infer<typeof userFormSchema>

    // Setup react-hook-form with zod resolver
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<UserFormValues>({
      resolver: zodResolver(userFormSchema),
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        agreeToTerms: false,
      },
    })

    // Handler for form submission
    const onSubmit = async (data: UserFormValues) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.debug('Form submitted:', data)
      alert('Registration successful!')
    }

    return (
      <Card className="w-[600px]">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="font-semibold text-xl">Register Account</h2>
            <p className="text-muted-foreground text-sm">
              Fill out the form below to create your account.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-foreground/80 text-sm">Personal Information</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    hasError={!!errors.firstName}
                    {...register('firstName')}
                  />
                  {errors.firstName && (
                    <p className="font-medium text-destructive text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    hasError={!!errors.lastName}
                    {...register('lastName')}
                  />
                  {errors.lastName && (
                    <p className="font-medium text-destructive text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  hasError={!!errors.email}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="font-medium text-destructive text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register('phone')}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-foreground/80 text-sm">Address Information</h3>

              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main St"
                  hasError={!!errors.address}
                  {...register('address')}
                />
                {errors.address && (
                  <p className="font-medium text-destructive text-sm">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    hasError={!!errors.city}
                    {...register('city')}
                  />
                  {errors.city && (
                    <p className="font-medium text-destructive text-sm">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    placeholder="Postal code"
                    hasError={!!errors.postalCode}
                    {...register('postalCode')}
                  />
                  {errors.postalCode && (
                    <p className="font-medium text-destructive text-sm">
                      {errors.postalCode.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select id="country" hasError={!!errors.country} {...register('country')}>
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="id">Indonesia</option>
                </Select>
                {errors.country && (
                  <p className="font-medium text-destructive text-sm">{errors.country.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                id="agreeToTerms"
                type="checkbox"
                className="mt-1"
                {...register('agreeToTerms')}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="agreeToTerms">Terms and Conditions</Label>
                <p className="text-muted-foreground text-sm">
                  I agree to the terms of service and privacy policy.
                </p>
                {errors.agreeToTerms && (
                  <p className="font-medium text-destructive text-sm">
                    {errors.agreeToTerms.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex justify-between border-border border-t pt-4">
              <button type="button" className="text-muted-foreground text-sm hover:text-foreground">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className={formStyles().submit()}>
                {isSubmitting ? 'Registering...' : 'Register Account'}
              </button>
            </div>
          </form>
        </div>
      </Card>
    )
  },
}
