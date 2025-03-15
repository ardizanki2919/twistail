// Tremor Dropdown Menu [v0.0.2]

import * as Lucide from 'lucide-react'
import { DropdownMenu as DropdownMenuPrimitives } from 'radix-ui'
import * as React from 'react'
import { dropdownMenuStyles } from './dropdown-menu.css'

const DropdownMenu = DropdownMenuPrimitives.Root
const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger
const DropdownMenuGroup = DropdownMenuPrimitives.Group
const DropdownMenuSubMenu = DropdownMenuPrimitives.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitives.RadioGroup
const DropdownMenuPortal = DropdownMenuPrimitives.Portal

const DropdownMenuSubMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.SubTrigger>,
  Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubTrigger>, 'asChild'>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.SubTrigger
      ref={forwardedRef}
      className={styles.subMenuTrigger({ className })}
      {...props}
    >
      {children}
      <Lucide.ChevronRight className={styles.subMenuTriggerIcon()} aria-hidden="true" />
    </DropdownMenuPrimitives.SubTrigger>
  )
})

const DropdownMenuSubMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.SubContent>
>(({ className, collisionPadding = 8, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitives.SubContent
        ref={forwardedRef}
        collisionPadding={collisionPadding}
        className={styles.content({ className })}
        {...props}
      />
    </DropdownMenuPortal>
  )
})

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Content>
>(
  (
    { className, sideOffset = 8, collisionPadding = 8, align = 'center', loop = true, ...props },
    forwardedRef
  ) => {
    const styles = dropdownMenuStyles()
    return (
      <DropdownMenuPortal>
        <DropdownMenuPrimitives.Content
          ref={forwardedRef}
          className={styles.content({ className })}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
          align={align}
          loop={loop}
          {...props}
        />
      </DropdownMenuPortal>
    )
  }
)

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Item>,
  Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Item>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.Item
      ref={forwardedRef}
      className={styles.item({ className })}
      {...props}
    >
      {children}
      {hint && <span className={styles.itemHint()}>{hint}</span>}
      {shortcut && <span className={styles.itemHint()}>{shortcut}</span>}
    </DropdownMenuPrimitives.Item>
  )
})

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.CheckboxItem>,
  Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.CheckboxItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, checked, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={styles.checkboxItemIndicator()}>
        <DropdownMenuPrimitives.ItemIndicator>
          <Lucide.Check className={styles.checkboxItemIndicatorIcon()} aria-hidden="true" />
        </DropdownMenuPrimitives.ItemIndicator>
      </span>
      {children}
      {hint && <span className={styles.checkboxItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.checkboxItemShortcut()}>{shortcut}</span>}
    </DropdownMenuPrimitives.CheckboxItem>
  )
})

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.RadioItem>,
  Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.RadioItem>, 'asChild'> & {
    shortcut?: string
    hint?: string
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.RadioItem
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
    </DropdownMenuPrimitives.RadioItem>
  )
})

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Label>
>(({ className, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.Label
      ref={forwardedRef}
      className={styles.label({ className })}
      {...props}
    />
  )
})

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitives.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitives.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = dropdownMenuStyles()
  return (
    <DropdownMenuPrimitives.Separator
      ref={forwardedRef}
      className={styles.separator({ className })}
      {...props}
    />
  )
})

const DropdownMenuIconWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const styles = dropdownMenuStyles()
  return <div className={styles.iconWrapper({ className })} {...props} />
}

DropdownMenu.displayName = 'DropdownMenu'
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'
DropdownMenuGroup.displayName = 'DropdownMenuGroup'
DropdownMenuSubMenu.displayName = 'DropdownMenuSubMenu'
DropdownMenuRadioGroup.displayName = 'DropdownMenuRadioGroup'
DropdownMenuSubMenuTrigger.displayName = 'DropdownMenuSubMenuTrigger'
DropdownMenuSubMenuContent.displayName = 'DropdownMenuSubMenuContent'
DropdownMenuContent.displayName = 'DropdownMenuContent'
DropdownMenuItem.displayName = 'DropdownMenuItem'
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem'
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem'
DropdownMenuLabel.displayName = 'DropdownMenuLabel'
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'
DropdownMenuIconWrapper.displayName = 'DropdownMenuIconWrapper'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSubMenuTrigger,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuIconWrapper,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuPortal,
}
