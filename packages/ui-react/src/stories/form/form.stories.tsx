import type { Meta, StoryObj } from '@storybook/react'
import { Form, formStyles } from '#/components/form'

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

export type Story = StoryObj<typeof Form>

export { Default } from './default'
export { GridLayout } from './grid-layout'
export { CompleteExample } from './complete-example'
export { ServerValidation } from './server-validation'
export {
  ExtraSmallSize,
  SmallSize,
  MediumSize,
  LargeSize,
  ExtraLargeSize,
} from './size-variants'
export { CustomStyling } from './custom-styles'
export { WithVariousInputs } from './various-input'
export { WithErrorState, WithValidityState } from './with-states'
export { WithValidation } from './with-validation'
export { WithZodValidation, CompleteZodExample } from './with-zod-validation'
