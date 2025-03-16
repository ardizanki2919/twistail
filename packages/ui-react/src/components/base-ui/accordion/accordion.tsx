import * as Lucide from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'
import * as React from 'react'
import { accordionStyles } from './accordion.css'

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, orientation = 'vertical', ...props }, forwardedRef) => {
  const { root } = accordionStyles({ orientation })
  return (
    <AccordionPrimitive.Root
      ref={forwardedRef}
      className={root({ className })}
      orientation={orientation}
      {...props}
    />
  )
})

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const { header, triger, trigerIcon } = accordionStyles()
  return (
    <AccordionPrimitive.Header className={header()}>
      <AccordionPrimitive.Trigger className={triger({ className })} ref={forwardedRef} {...props}>
        {children}
        <Lucide.Plus className={trigerIcon()} aria-hidden="true" focusable="false" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, forwardedRef) => {
  const { content, contentInner } = accordionStyles()
  return (
    <AccordionPrimitive.Content className={content()} ref={forwardedRef} {...props}>
      <div className={contentInner({ className })}>{children}</div>
    </AccordionPrimitive.Content>
  )
})

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const { item } = accordionStyles()
  return <AccordionPrimitive.Item className={item({ className })} ref={forwardedRef} {...props} />
})

Accordion.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'
AccordionItem.displayName = 'AccordionItem'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
