import * as Lucide from 'lucide-react'
import { Select as ListboxPrimitives } from 'radix-ui'
import * as React from 'react'
import { type ListboxStyles, listboxStyles } from './listbox.css'

const Listbox = ListboxPrimitives.Root
const ListboxGroup = ListboxPrimitives.Group
const ListboxValue = ListboxPrimitives.Value

interface ListboxTriggerProps
  extends React.ComponentPropsWithoutRef<typeof ListboxPrimitives.Trigger>,
    ListboxStyles {}

const ListboxTrigger = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.Trigger>,
  ListboxTriggerProps
>(({ className, hasError, children, ...props }, forwardedRef) => {
  const styles = listboxStyles({ hasError })
  return (
    <ListboxPrimitives.Trigger
      ref={forwardedRef}
      className={styles.trigger({ className })}
      {...props}
    >
      <span className={styles.triggerSpan()}>{children}</span>
      <ListboxPrimitives.Icon asChild>
        <Lucide.ChevronsUpDown className={styles.triggerChevrons()} />
      </ListboxPrimitives.Icon>
    </ListboxPrimitives.Trigger>
  )
})

const ListboxScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitives.ScrollUpButton>
>(({ className, ...props }, forwardedRef) => {
  const styles = listboxStyles()
  return (
    <ListboxPrimitives.ScrollUpButton
      ref={forwardedRef}
      className={styles.scrollUpButton({ className })}
      {...props}
    >
      <Lucide.ChevronUp className={styles.scrollUpButtonIcon()} aria-hidden="true" />
    </ListboxPrimitives.ScrollUpButton>
  )
})

const ListboxScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitives.ScrollDownButton>
>(({ className, ...props }, forwardedRef) => {
  const styles = listboxStyles()
  return (
    <ListboxPrimitives.ScrollDownButton
      ref={forwardedRef}
      className={styles.scrollDownButton({ className })}
      {...props}
    >
      <Lucide.ChevronDown className={styles.scrollDownButtonIcon()} aria-hidden="true" />
    </ListboxPrimitives.ScrollDownButton>
  )
})

interface ListboxContentProps
  extends React.ComponentPropsWithoutRef<typeof ListboxPrimitives.Content>,
    ListboxStyles {}

const ListboxContent = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.Content>,
  ListboxContentProps
>(
  (
    { className, position = 'popper', children, sideOffset = 8, collisionPadding = 10, ...props },
    forwardedRef
  ) => {
    const styles = listboxStyles({ position })
    return (
      <ListboxPrimitives.Portal>
        <ListboxPrimitives.Content
          ref={forwardedRef}
          className={styles.content({ className })}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
          position={position}
          {...props}
        >
          <ListboxScrollUpButton />
          <ListboxPrimitives.Viewport className={styles.contentViewport()}>
            {children}
          </ListboxPrimitives.Viewport>
          <ListboxScrollDownButton />
        </ListboxPrimitives.Content>
      </ListboxPrimitives.Portal>
    )
  }
)

const ListboxGroupLabel = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitives.Label>
>(({ className, ...props }, forwardedRef) => {
  const styles = listboxStyles()
  return (
    <ListboxPrimitives.Label
      ref={forwardedRef}
      className={styles.grouplabel({ className })}
      {...props}
    />
  )
})

const ListboxItem = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitives.Item>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = listboxStyles()
  return (
    <ListboxPrimitives.Item ref={forwardedRef} className={styles.item({ className })} {...props}>
      <ListboxPrimitives.ItemText className={styles.itemText()}>
        {children}
      </ListboxPrimitives.ItemText>
      <ListboxPrimitives.ItemIndicator>
        <Lucide.Check className={styles.itemIndicatorIcon()} aria-hidden="true" />
      </ListboxPrimitives.ItemIndicator>
    </ListboxPrimitives.Item>
  )
})

const ListboxSeparator = React.forwardRef<
  React.ComponentRef<typeof ListboxPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof ListboxPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = listboxStyles()
  return (
    <ListboxPrimitives.Separator
      ref={forwardedRef}
      className={styles.separator({ className })}
      {...props}
    />
  )
})

Listbox.displayName = 'Listbox'
ListboxGroup.displayName = 'ListboxGroup'
ListboxValue.displayName = 'ListboxValue'
ListboxTrigger.displayName = 'ListboxTrigger'
ListboxScrollUpButton.displayName = ListboxPrimitives.ScrollUpButton.displayName
ListboxScrollDownButton.displayName = ListboxPrimitives.ScrollDownButton.displayName
ListboxContent.displayName = 'ListboxContent'
ListboxGroupLabel.displayName = 'ListboxGroupLabel'
ListboxItem.displayName = 'ListboxItem'
ListboxSeparator.displayName = 'ListboxSeparator'

export {
  Listbox,
  ListboxContent,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxSeparator,
  ListboxTrigger,
  ListboxValue,
}
