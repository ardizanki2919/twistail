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
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>,
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
      <Lucide.ChevronRight className={styles.subMenuTriggerIcon()} />
    </ContextMenuPrimitive.SubTrigger>
  )
})

const ContextMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.SubContent
      ref={forwardedRef}
      className={styles.subMenuContent({ className })}
      {...props}
    />
  )
})

const ContextMenuContent = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={forwardedRef}
        className={styles.content({ className })}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
})

interface ContextMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>,
    ContextMenuStyles {}

const ContextMenuItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ className, inset, ...props }, forwardedRef) => {
  const styles = contextMenuStyles({ inset })
  return (
    <ContextMenuPrimitive.Item
      ref={forwardedRef}
      className={styles.item({ className })}
      {...props}
    />
  )
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Lucide.Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

const ContextMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = contextMenuStyles()
  return (
    <ContextMenuPrimitive.RadioItem
      ref={forwardedRef}
      className={styles.radioItem({ className })}
      {...props}
    >
      <ContextMenuPrimitive.ItemIndicator className={styles.radioItemIndicator()}>
        <Lucide.Circle className={styles.radioItemIndicatorCircle()} />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
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

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const styles = contextMenuStyles()
  return <span className={styles.shortcut({ className })} {...props} />
}

ContextMenuSubMenuTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName
ContextMenuSubMenuContent.displayName = ContextMenuPrimitive.SubContent.displayName
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubMenuTrigger,
  ContextMenuRadioGroup,
}
