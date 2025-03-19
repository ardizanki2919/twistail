import * as Lucide from 'lucide-react'
import { Menubar as MenubarPrimitive } from 'radix-ui'
import * as React from 'react'
import { type MenubarStyles, menubarStyles } from './menubar.css'

const MenubarMenu = ({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) => {
  return <MenubarPrimitive.Menu {...props} />
}

const MenubarGroup = ({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) => {
  return <MenubarPrimitive.Group {...props} />
}

const MenubarPortal = ({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) => {
  return <MenubarPrimitive.Portal {...props} />
}

const MenubarRadioGroup = ({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) => {
  return <MenubarPrimitive.RadioGroup {...props} />
}

const MenubarSub = ({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.Root ref={forwardedRef} className={styles.root({ className })} {...props} />
  )
})

const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.Trigger
      ref={forwardedRef}
      className={styles.trigger({ className })}
      {...props}
    />
  )
})

const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & MenubarStyles
>(({ className, inset, children, ...props }, forwardedRef) => {
  const styles = menubarStyles({ inset })
  return (
    <MenubarPrimitive.SubTrigger
      ref={forwardedRef}
      className={styles.subTrigger({ className })}
      {...props}
    >
      {children}
      <Lucide.ChevronRight className={styles.subTriggerIndicator()} />
    </MenubarPrimitive.SubTrigger>
  )
})

const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, sideOffset = 2, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        ref={forwardedRef}
        className={styles.subContent({ className })}
        sideOffset={sideOffset}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
})

const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={forwardedRef}
        className={styles.content({ className })}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        align={align}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
})

const MenubarItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> &
    MenubarStyles & {
      shortcut?: string
      hint?: string
    }
>(({ className, inset, shortcut, hint, children, ...props }, forwardedRef) => {
  const styles = menubarStyles({ inset })
  return (
    <MenubarPrimitive.Item ref={forwardedRef} className={styles.item({ className })} {...props}>
      {children}
      {hint && <span className={styles.itemHint()}>{hint}</span>}
      {shortcut && <span className={styles.shortcut()}>{shortcut}</span>}
    </MenubarPrimitive.Item>
  )
})

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> & {
    shortcut?: string
    hint?: string
  }
>(({ className, children, checked, shortcut, hint, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={styles.checkboxItemIndicator()}>
        <MenubarPrimitive.ItemIndicator>
          <Lucide.Check className={styles.checkboxItemIndicatorIcon()} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
      {hint && <span className={styles.checkboxItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.checkboxItemShortcut()}>{shortcut}</span>}
    </MenubarPrimitive.CheckboxItem>
  )
})

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> & {
    shortcut?: string
    hint?: string
  }
>(({ className, children, shortcut, hint, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.RadioItem
      ref={forwardedRef}
      className={styles.radioItem({ className })}
      {...props}
    >
      <span className={styles.radioItemIndicator()}>
        <MenubarPrimitive.ItemIndicator>
          <Lucide.Check className={styles.radioItemIndicatorIconCheck()} aria-hidden="true" />
          <Lucide.Circle className={styles.radioItemIndicatorIconCircle()} aria-hidden="true" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
      {hint && <span className={styles.radioItemHint()}>{hint}</span>}
      {shortcut && <span className={styles.radioItemShortcut()}>{shortcut}</span>}
    </MenubarPrimitive.RadioItem>
  )
})

const MenubarLabel = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & MenubarStyles
>(({ className, inset, ...props }, forwardedRef) => {
  const styles = menubarStyles({ inset })
  return (
    <MenubarPrimitive.Label ref={forwardedRef} className={styles.label({ className })} {...props} />
  )
})

const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.Separator
      ref={forwardedRef}
      className={styles.separator({ className })}
      {...props}
    />
  )
})

Menubar.displayName = MenubarPrimitive.Root.displayName
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName
MenubarContent.displayName = MenubarPrimitive.Content.displayName
MenubarItem.displayName = MenubarPrimitive.Item.displayName
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName
MenubarLabel.displayName = MenubarPrimitive.Label.displayName
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
}
