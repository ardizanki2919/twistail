import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

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
