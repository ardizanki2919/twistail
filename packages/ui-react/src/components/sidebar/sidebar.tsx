import * as Lucide from 'lucide-react'
import { Separator as SeparatorPrimitive, Slot } from 'radix-ui'
import * as React from 'react'
import { Button } from '#/components/button'
import { Drawer, DrawerBody, DrawerHeader, DrawerTitle } from '#/components/drawer'
import { DrawerContent, DrawerDescription } from '#/components/drawer'
import { Input } from '#/components/input'
import { Skeleton } from '#/components/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/tooltip'
import type { SidebarMenuButtonStyles, SidebarStyles } from './sidebar.css'
import { sidebarMenuButtonStyles, sidebarStyles } from './sidebar.css'

//#region useIsMobile
// ============================================================================

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < breakpoint)
    return () => mql.removeEventListener('change', onChange)
  }, [breakpoint])

  return !!isMobile
}

//#region SidebarProvider
// ============================================================================

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }
  return context
}

type SidebarProviderProps = React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)
    const styles = sidebarStyles()

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === 'function' ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
    }, [isMobile, setOpen])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed'

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <Tooltip delayDuration={0}>
          {/* <TooltipTrigger>
            <Text className="text-muted-foreground">Show tooltip</Text>
          </TooltipTrigger>
          <TooltipContent content="Which KPIs are the most visited in your project" /> */}
          <div
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH,
                '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={styles.providerTooltip({ className })}
            ref={forwardedRef}
            {...props}
          >
            {children}
          </div>
        </Tooltip>
      </SidebarContext.Provider>
    )
  }
)

//#region Sidebar
// ============================================================================

type SidebarProps = React.ComponentProps<'div'> & {
  collapsible?: 'offcanvas' | 'icon' | 'none'
} & SidebarStyles

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      side = 'left',
      variant = 'sidebar',
      collapsible = 'offcanvas',
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
    const styles = sidebarStyles({ variant, side })

    if (collapsible === 'none') {
      return (
        <div className={styles.rootExpanded({ className })} ref={forwardedRef} {...props}>
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <DrawerContent
            data-mobile="true"
            data-sidebar="sidebar"
            className={styles.rootMobileDrawer()}
            style={{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
            side={side}
          >
            <DrawerHeader className="sr-only">
              <DrawerTitle>Sidebar</DrawerTitle>
              <DrawerDescription>Displays the mobile sidebar.</DrawerDescription>
            </DrawerHeader>
            <DrawerBody className={styles.rootMobileDrawerInner()}>{children}</DrawerBody>
          </DrawerContent>
        </Drawer>
      )
    }

    return (
      <div
        ref={forwardedRef}
        className={styles.rootWrapper()}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-state={state}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div className={styles.rootGapDesktop()} />
        <div className={styles.rootContent({ className })} {...props}>
          <div data-sidebar="sidebar" className={styles.rootContentInner()}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)

const SidebarTrigger = React.forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, forwardedRef) => {
  const { toggleSidebar } = useSidebar()
  const styles = sidebarStyles()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    toggleSidebar()
  }

  return (
    <Button
      ref={forwardedRef}
      variant="ghost"
      size="icon"
      className={styles.trigger({ className })}
      onClick={handleClick}
      data-sidebar="trigger"
      {...props}
    >
      <Lucide.PanelLeft strokeWidth={2} />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className, ...props }, forwardedRef) => {
    const { toggleSidebar } = useSidebar()
    const styles = sidebarStyles()
    return (
      <button
        ref={forwardedRef}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        className={styles.rail({ className })}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        tabIndex={-1}
        {...props}
      />
    )
  }
)

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<'main'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return <main ref={forwardedRef} className={styles.inset({ className })} {...props} />
  }
)

const SidebarInput = React.forwardRef<
  React.ComponentRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, forwardedRef) => {
  const styles = sidebarStyles()
  return (
    <Input
      ref={forwardedRef}
      className={styles.input({ className })}
      data-sidebar="input"
      {...props}
    />
  )
})

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        data-sidebar="header"
        className={styles.header({ className })}
        {...props}
      />
    )
  }
)

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        data-sidebar="footer"
        className={styles.footer({ className })}
        {...props}
      />
    )
  }
)

const SidebarSeparator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentProps<typeof SeparatorPrimitive.Root>
>(({ className, ...props }, forwardedRef) => {
  const styles = sidebarStyles()
  return (
    <SeparatorPrimitive.Root
      ref={forwardedRef}
      data-sidebar="separator"
      className={styles.separator({ className })}
      {...props}
    />
  )
})

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        data-sidebar="content"
        className={styles.content({ className })}
        {...props}
      />
    )
  }
)

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        className={styles.group({ className })}
        data-sidebar="group"
        {...props}
      />
    )
  }
)

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'div'
  const styles = sidebarStyles()
  return (
    <Comp
      ref={forwardedRef}
      className={styles.groupLabel({ className })}
      data-sidebar="group-label"
      {...props}
    />
  )
})

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'button'
  const styles = sidebarStyles()
  return (
    <Comp
      ref={forwardedRef}
      className={styles.groupAction({ className })}
      data-sidebar="group-action"
      {...props}
    />
  )
})

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        className={styles.groupContent({ className })}
        data-sidebar="group-content"
        {...props}
      />
    )
  }
)

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <ul
        ref={forwardedRef}
        className={styles.menu({ className })}
        data-sidebar="menu"
        {...props}
      />
    )
  }
)

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <li
        ref={forwardedRef}
        className={styles.menuItem({ className })}
        data-sidebar="menu-item"
        {...props}
      />
    )
  }
)

//#region SidebarMenu
// ============================================================================

type SidebarMenuButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & SidebarMenuButtonStyles

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  (
    {
      asChild = false,
      isActive = false,
      variant = 'default',
      size = 'md',
      tooltip,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot.Root : 'button'
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={forwardedRef}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={sidebarMenuButtonStyles({ variant, size, className })}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === 'string') {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== 'collapsed' || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean
  } & SidebarStyles
>(({ className, asChild = false, showOnHover = false, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'button'
  const styles = sidebarStyles({ showOnHover })
  return (
    <Comp
      ref={forwardedRef}
      className={styles.menuAction({ className })}
      data-sidebar="menu-action"
      {...props}
    />
  )
})

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <div
        ref={forwardedRef}
        className={styles.menuBadge({ className })}
        data-sidebar="menu-badge"
        {...props}
      />
    )
  }
)

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, forwardedRef) => {
  const styles = sidebarStyles()

  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={forwardedRef}
      className={styles.menuSkeleton({ className })}
      data-sidebar="menu-skeleton"
      {...props}
    >
      {showIcon && (
        <Skeleton className={styles.menuSkeletonIcon()} data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        data-sidebar="menu-skeleton-text"
        className={styles.menuSkeletonInner()}
        style={{ '--skeleton-width': width } as React.CSSProperties}
      />
    </div>
  )
})

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <ul
        ref={forwardedRef}
        className={styles.menuSub({ className })}
        data-sidebar="menu-sub"
        {...props}
      />
    )
  }
)

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return <li ref={forwardedRef} className={styles.menuSubItem({ className })} {...props} />
  }
)

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'> & {
    asChild?: boolean
    isActive?: boolean
  } & SidebarStyles
>(({ asChild = false, size = 'md', isActive, className, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'a'
  const styles = sidebarStyles({ size })
  return (
    <Comp
      ref={forwardedRef}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={styles.menuSubButton({ className })}
      {...props}
    />
  )
})

Sidebar.displayName = 'Sidebar'
SidebarProvider.displayName = 'SidebarProvider'
SidebarTrigger.displayName = 'SidebarTrigger'
SidebarRail.displayName = 'SidebarRail'
SidebarInset.displayName = 'SidebarInset'
SidebarInput.displayName = 'SidebarInput'
SidebarHeader.displayName = 'SidebarHeader'
SidebarFooter.displayName = 'SidebarFooter'
SidebarSeparator.displayName = 'SidebarSeparator'
SidebarContent.displayName = 'SidebarContent'
SidebarGroup.displayName = 'SidebarGroup'
SidebarGroupLabel.displayName = 'SidebarGroupLabel'
SidebarGroupAction.displayName = 'SidebarGroupAction'
SidebarGroupContent.displayName = 'SidebarGroupContent'
SidebarMenu.displayName = 'SidebarMenu'
SidebarMenuItem.displayName = 'SidebarMenuItem'
SidebarMenuButton.displayName = 'SidebarMenuButton'
SidebarMenuAction.displayName = 'SidebarMenuAction'
SidebarMenuBadge.displayName = 'SidebarMenuBadge'
SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton'
SidebarMenuSub.displayName = 'SidebarMenuSub'
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem'
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton'

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
