import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '#/components/button'
import { Card } from '#/components/card'
import { Input } from '#/components/input'
import { Label } from '#/components/label'
import { Select } from '#/components/select'
import { type Story } from './form.stories'

export const WithZodValidation: Story = {
  render: () => {
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

    type FormValues = z.infer<typeof formSchema>

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

    const onSubmit = async (data: FormValues) => {
      // Simulate an API call to simulate form submission
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>
      </div>
    )
  },
}

export const CompleteZodExample: Story = {
  render: () => {
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

    type UserFormValues = z.infer<typeof userFormSchema>

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

    const onSubmit = async (data: UserFormValues) => {
      // Simulate an API call to simulate form submission
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
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register Account'}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    )
  },
}
