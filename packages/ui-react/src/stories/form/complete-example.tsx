import * as React from 'react'
import { Button } from '#/components/button'
import { Card } from '#/components/card'
import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { Input } from '#/components/input'
import { Select } from '#/components/select'
import { type Story } from './form.stories'

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
              <Button type="button" variant="outline">
                Cancel Order
              </Button>
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
