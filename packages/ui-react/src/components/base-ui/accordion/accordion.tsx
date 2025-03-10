// Tremor Accordion [v0.0.1]

import * as Lucide from 'lucide-react'
import { Accordion as AccordionPrimitives } from 'radix-ui'
import * as React from 'react'
import { cn } from 'twistail-utils'
import { accordionStyles } from './accordion.css'

const Accordion = AccordionPrimitives.Root

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = accordionStyles()
  return (
    <AccordionPrimitives.Header className={styles.accordionHeader()}>
      <AccordionPrimitives.Trigger
        className={cn(styles.accordionTriger(), className)}
        ref={forwardedRef}
        {...props}
      >
        {children}
        <Lucide.Plus
          className={styles.accordionTrigerIcon()}
          aria-hidden="true"
          focusable="false"
        />
      </AccordionPrimitives.Trigger>
    </AccordionPrimitives.Header>
  )
})

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = accordionStyles()
  return (
    <AccordionPrimitives.Content
      className={styles.accordionContent()}
      ref={forwardedRef}
      {...props}
    >
      <div className={cn(styles.accordionContentDiv, className)}>{children}</div>
    </AccordionPrimitives.Content>
  )
})

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = accordionStyles()
  return (
    <AccordionPrimitives.Item
      className={cn(styles.accordionItem(), className)}
      tremor-id="tremor-raw"
      ref={forwardedRef}
      {...props}
    />
  )
})

Accordion.displayName = 'AccordionItem'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'
AccordionItem.displayName = 'AccordionItem'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
