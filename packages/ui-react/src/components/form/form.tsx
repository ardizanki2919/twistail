import { Form as FormPrimitive } from 'radix-ui'
import * as React from 'react'
import { type FormStyles, formStyles } from './form.css'

const Form = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Root> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })
  return <FormPrimitive.Root ref={forwardedRef} className={styles.root({ className })} {...props} />
})

const FormField = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Field>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Field> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })
  return (
    <FormPrimitive.Field ref={forwardedRef} className={styles.field({ className })} {...props} />
  )
})

const FormLabel = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Label> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })
  return (
    <FormPrimitive.Label ref={forwardedRef} className={styles.label({ className })} {...props} />
  )
})

const FormControl = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Control> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })

  return (
    <FormPrimitive.Control
      ref={forwardedRef}
      className={styles.control({ className })}
      {...props}
    />
  )
})

const FormMessage = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Message>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Message> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })
  return (
    <FormPrimitive.Message
      ref={forwardedRef}
      className={styles.message({ className })}
      {...props}
    />
  )
})

const FormValidityState = (
  props: React.ComponentPropsWithoutRef<typeof FormPrimitive.ValidityState>
) => {
  return <FormPrimitive.ValidityState {...props} />
}

const FormSubmit = React.forwardRef<
  React.ComponentRef<typeof FormPrimitive.Submit>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Submit> & FormStyles
>(({ className, size, ...props }, forwardedRef) => {
  const styles = formStyles({ size })
  return (
    <FormPrimitive.Submit ref={forwardedRef} className={styles.submit({ className })} {...props} />
  )
})

Form.displayName = FormPrimitive.Root.displayName
FormField.displayName = FormPrimitive.Field.displayName
FormLabel.displayName = FormPrimitive.Label.displayName
FormControl.displayName = FormPrimitive.Control.displayName
FormMessage.displayName = FormPrimitive.Message.displayName
FormValidityState.displayName = FormPrimitive.ValidityState.displayName
FormSubmit.displayName = FormPrimitive.Submit.displayName

export { Form, FormField, FormLabel, FormControl, FormMessage, FormValidityState, FormSubmit }
