import * as Lucide from 'lucide-react'
import { ContextMenu as ContextMenuPrimitive } from 'radix-ui'
import * as React from 'react'
import { type ContextMenuStyles, contextMenuStyles } from './context-menu.css'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuSubMenu = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup
const ContextMenuPortal = ContextMenuPrimitive.Portal

interface ContextMenuSubMenuTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>, 'asChild'>,
    ContextMenuStyles {}

const ContextMenuSubMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubMenuTriggerProps
>(({ className, inset, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={forwardedRef}
      className={styles.subMenuTrigger({ className })}
      {...props}
    >
      {children}
      <Lucide.ChevronRight className={styles.subMenuTriggerIcon()} aria-hidden="true" />
    </ContextMenuPrimitive.SubTrigger>
  )
})

const ContextMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, collisionPadding = 8, alignOffset = 4, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.SubContent
        ref={forwardedRef}
        collisionPadding={collisionPadding}
        className={styles.subMenuContent({ className })}
        alignOffset={alignOffset}
        avoidCollisions={true}
        {...props}
      />
    </ContextMenuPortal>
  )
})

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, collisionPadding = 8, loop = true, alignOffset = 4, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Content
        ref={forwardedRef}
        className={styles.content({ className })}
        collisionPadding={collisionPadding}
        alignOffset={alignOffset}
        avoidCollisions={true}
        loop={loop}
        {...props}
      />
    </ContextMenuPortal>
  )
})

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>, 'asChild'> & {
    shortcut?: string
    hint?: string
    inset?: boolean
  }
>(({ className, inset, shortcut, hint, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitive.Item ref={forwardedRef} className={styles.item({ className })} {...props}>
      {children}
      {hint && <span className={styles.itemHint()}>{hint}</span>}
      {shortcut && <span className={styles.itemHint()}>{shortcut}</span>}
    </ContextMenuPrimitive.Item>
  )
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, checked, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={styles.checkboxItemIndicator()}>
        <ContextMenuPrimitive.ItemIndicator>
          <Lucide.Check className={styles.checkboxItemIndicatorIcon()} aria-hidden="true" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
      {hint && <span className={styles.checkboxItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.checkboxItemShortcut()}>{shortcut}</span>}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.RadioItem
      ref={forwardedRef}
      className={styles.radioItem({ className })}
      {...props}
    >
      <span className={styles.radioItemIndicator()}>
        <Lucide.Check className={styles.radioItemIndicatorIconCheck()} aria-hidden="true" />
        <Lucide.Circle className={styles.radioItemIndicatorIconCircle()} aria-hidden="true" />
      </span>
      {children}
      {hint && <span className={styles.radioItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.radioItemShortcut()}>{shortcut}</span>}
    </ContextMenuPrimitive.RadioItem>
  )
})

interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>,
    ContextMenuStyles {}

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitive.Label
      ref={forwardedRef}
      className={styles.label({ className })}
      {...props}
    />
  )
})

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.Separator
      ref={forwardedRef}
      className={styles.separator({ className })}
      {...props}
    />
  )
})

const ContextMenuIconWrapper = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const styles = contextMenuStyles()
  return <div className={styles.iconWrapper({ className })} {...props} />
}

ContextMenuSubMenuTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
ContextMenuSubMenuContent.displayName = ContextMenuPrimitive.SubContent.displayName
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
ContextMenuIconWrapper.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuIconWrapper,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubMenuTrigger,
  ContextMenuRadioGroup,
}
