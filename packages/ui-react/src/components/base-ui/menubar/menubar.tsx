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
>(({ className, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.SubContent
      ref={forwardedRef}
      className={styles.subContent({ className })}
      {...props}
    />
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
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & MenubarStyles
>(({ className, inset, ...props }, forwardedRef) => {
  const styles = menubarStyles({ inset })
  return (
    <MenubarPrimitive.Item ref={forwardedRef} className={styles.item({ className })} {...props} />
  )
})

const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.CheckboxItem
      ref={forwardedRef}
      className={styles.checkboxItem({ className })}
      checked={checked}
      {...props}
    >
      <span className={styles.checkboxItemInner()}>
        <MenubarPrimitive.ItemIndicator>
          <Lucide.Check className={styles.checkboxItemIndicator()} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
})

const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = menubarStyles()
  return (
    <MenubarPrimitive.RadioItem
      ref={forwardedRef}
      className={styles.radioItem({ className })}
      {...props}
    >
      <span className={styles.radioItemInner()}>
        <MenubarPrimitive.ItemIndicator>
          <Lucide.Circle className={styles.radioItemIndicator()} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
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

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const styles = menubarStyles()
  return <span className={styles.shortcut({ className })} {...props} />
}

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
MenubarShortcut.displayName = 'MenubarShortcut'

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
  MenubarShortcut,
}
