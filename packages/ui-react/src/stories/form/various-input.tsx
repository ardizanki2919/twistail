import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from '#/components/form'
import { type Story } from './form.stories'

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
