import * as Lucide from 'lucide-react'
import { ContextMenu as ContextMenuPrimitives } from 'radix-ui'
import * as React from 'react'
import { type ContextMenuStyles, contextMenuStyles } from './context-menu.css'

const ContextMenu = ContextMenuPrimitives.Root
const ContextMenuTrigger = ContextMenuPrimitives.Trigger
const ContextMenuGroup = ContextMenuPrimitives.Group
const ContextMenuSubMenu = ContextMenuPrimitives.Sub
const ContextMenuRadioGroup = ContextMenuPrimitives.RadioGroup
const ContextMenuPortal = ContextMenuPrimitives.Portal

interface ContextMenuSubMenuTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.SubTrigger>, 'asChild'>,
    ContextMenuStyles {}

const ContextMenuSubMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.SubTrigger>,
  ContextMenuSubMenuTriggerProps
>(({ className, inset, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitives.SubTrigger
      ref={forwardedRef}
      className={styles.subMenuTrigger({ className })}
      {...props}
    >
      {children}
      <Lucide.ChevronRight className={styles.subMenuTriggerIcon()} aria-hidden="true" />
    </ContextMenuPrimitives.SubTrigger>
  )
})

const ContextMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.SubContent>
>(({ className, collisionPadding = 8, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitives.SubContent
        ref={forwardedRef}
        collisionPadding={collisionPadding}
        className={styles.subMenuContent({ className })}
        {...props}
      />
    </ContextMenuPortal>
  )
})

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.Content>
>(({ className, collisionPadding = 8, loop = true, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitives.Content
        ref={forwardedRef}
        className={styles.content({ className })}
        collisionPadding={collisionPadding}
        loop={loop}
        {...props}
      />
    </ContextMenuPortal>
  )
})

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.Item>, 'asChild'> & {
    shortcut?: string
    hint?: string
    inset?: boolean
  }
>(({ className, inset, shortcut, hint, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitives.Item
      ref={forwardedRef}
      className={styles.item({ className })}
      {...props}
    >
      {children}
      {hint && <span className={styles.itemHint()}>{hint}</span>}
      {shortcut && <span className={styles.itemHint()}>{shortcut}</span>}
    </ContextMenuPrimitives.Item>
  )
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.CheckboxItem>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.CheckboxItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, checked, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitives.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={styles.checkboxItemIndicator()}>
        <ContextMenuPrimitives.ItemIndicator>
          <Lucide.Check className={styles.checkboxItemIndicatorIcon()} aria-hidden="true" />
        </ContextMenuPrimitives.ItemIndicator>
      </span>
      {children}
      {hint && <span className={styles.checkboxItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.checkboxItemShortcut()}>{shortcut}</span>}
    </ContextMenuPrimitives.CheckboxItem>
  )
})

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.RadioItem>,
  Omit<React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.RadioItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitives.RadioItem
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
    </ContextMenuPrimitives.RadioItem>
  )
})

interface ContextMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.Label>,
    ContextMenuStyles {}

const ContextMenuLabel = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.Label>,
  ContextMenuLabelProps
>(({ className, inset, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitives.Label
      ref={forwardedRef}
      className={styles.label({ className })}
      {...props}
    />
  )
})

const ContextMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitives.Separator
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

ContextMenuSubMenuTrigger.displayName = ContextMenuPrimitives.SubTrigger.displayName
ContextMenuSubMenuContent.displayName = ContextMenuPrimitives.SubContent.displayName
ContextMenuContent.displayName = ContextMenuPrimitives.Content.displayName
ContextMenuItem.displayName = ContextMenuPrimitives.Item.displayName
ContextMenuCheckboxItem.displayName = ContextMenuPrimitives.CheckboxItem.displayName
ContextMenuRadioItem.displayName = ContextMenuPrimitives.RadioItem.displayName
ContextMenuLabel.displayName = ContextMenuPrimitives.Label.displayName
ContextMenuSeparator.displayName = ContextMenuPrimitives.Separator.displayName
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
