import * as Lucide from 'lucide-react'
import { Separator as SeparatorPrimitive, Slot } from 'radix-ui'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { Button } from '#/components/base-ui/button'
import { Drawer, DrawerHeader, DrawerTitle } from '#/components/base-ui/drawer'
import { DrawerContent, DrawerDescription } from '#/components/base-ui/drawer'
import { Input } from '#/components/base-ui/input'
import { Skeleton } from '#/components/base-ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/base-ui/tooltip'
import { type SidebarStyles, sidebarStyles } from './sidebar.css'

//#region useIsMobile
// ============================================================================

const MOBILE_BREAKPOINT = 768

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

//#region Sidebar
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
            className={clx(
              'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
              className
            )}
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

type SidebarProps = React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

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
    const styles = sidebarStyles()

    if (collapsible === 'none') {
      return (
        <div
          className={clx(
            'flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground',
            className
          )}
          ref={forwardedRef}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Drawer open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <DrawerContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <DrawerHeader className="sr-only">
              <DrawerTitle>Sidebar</DrawerTitle>
              <DrawerDescription>Displays the mobile sidebar.</DrawerDescription>
            </DrawerHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </DrawerContent>
        </Drawer>
      )
    }

    return (
      <div
        ref={forwardedRef}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={clx(
            'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
            'group-data-[collapsible=offcanvas]:w-0',
            'group-data-[side=right]:rotate-180',
            variant === 'floating' || variant === 'inset'
              ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
              : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
          )}
        />
        <div
          className={clx(
            'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
            side === 'left'
              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
            // Adjust the padding for floating and inset variants.
            variant === 'floating' || variant === 'inset'
              ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
              : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
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

  return (
    <Button
      ref={forwardedRef}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={clx('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <Lucide.PanelLeft />
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
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={clx(
          '-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex',
          '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
          '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
          'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full',
          '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
          '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
          className
        )}
        {...props}
      />
    )
  }
)

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<'main'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = sidebarStyles()
    return (
      <main
        ref={forwardedRef}
        className={clx(
          'relative flex w-full flex-1 flex-col bg-background',
          'md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
          className
        )}
        {...props}
      />
    )
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
      data-sidebar="input"
      className={clx(
        'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
        className
      )}
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
        className={clx('flex flex-col gap-2 p-2', className)}
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
        className={clx('flex flex-col gap-2 p-2', className)}
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
      className={clx('mx-2 w-auto bg-sidebar-border', className)}
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
        className={clx(
          'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
          className
        )}
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
        data-sidebar="group"
        className={clx('relative flex w-full min-w-0 flex-col p-2', className)}
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
      data-sidebar="group-label"
      className={clx(
        'flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className
      )}
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
      data-sidebar="group-action"
      className={clx(
        'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:-inset-2 after:absolute after:md:hidden',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
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
        data-sidebar="group-content"
        className={clx('w-full text-sm', className)}
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
        data-sidebar="menu"
        className={clx('flex w-full min-w-0 flex-col gap-1', className)}
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
        data-sidebar="menu-item"
        className={clx('group/menu-item relative', className)}
        {...props}
      />
    )
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & SidebarStyles
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = 'default',
      size = 'default',
      tooltip,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot.Root : 'button'
    const { isMobile, state } = useSidebar()
    const styles = sidebarStyles({ variant, size })

    const button = (
      <Comp
        ref={forwardedRef}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={styles.menuButton({ className })}
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
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'button'
  const styles = sidebarStyles()

  return (
    <Comp
      ref={forwardedRef}
      data-sidebar="menu-action"
      className={clx(
        'absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:-inset-2 after:absolute after:md:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        className
      )}
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
        data-sidebar="menu-badge"
        className={clx(
          'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums',
          'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
          'peer-data-[size=sm]/menu-button:top-1',
          'peer-data-[size=default]/menu-button:top-1.5',
          'peer-data-[size=lg]/menu-button:top-2.5',
          'group-data-[collapsible=icon]:hidden',
          className
        )}
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
      data-sidebar="menu-skeleton"
      className={clx('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
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
        data-sidebar="menu-sub"
        className={clx(
          'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5',
          'group-data-[collapsible=icon]:hidden',
          className
        )}
        {...props}
      />
    )
  }
)

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ ...props }, forwardedRef) => <li ref={forwardedRef} {...props} />
)

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<'a'> & {
    asChild?: boolean
    size?: 'sm' | 'md'
    isActive?: boolean
  }
>(({ asChild = false, size = 'md', isActive, className, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'a'
  const styles = sidebarStyles()

  return (
    <Comp
      ref={forwardedRef}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={clx(
        '-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
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
