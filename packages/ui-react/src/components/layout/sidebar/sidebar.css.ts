import { type VariantProps, tv } from 'tailwind-variants'

const sidebarMenuButtonStyles = tv({
  base: [
    'flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding]',
    'peer/menu-button hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 aria-disabled:pointer-events-none',
    'active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50',
    'group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8',
    'data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground',
    'data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground',
    '[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  ],
  variants: {
    variant: {
      default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      outline: [
        'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent',
        'hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      ],
    },
    size: {
      sm: 'h-7 text-xs',
      default: 'h-8 text-sm',
      lg: 'group-data-[collapsible=icon]:!p-0 h-12 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const sidebarStyles = tv({
  slots: {
    providerTooltip: [
      'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
    ],
    rootExpanded: 'flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground',
    rootMobileDrawer: [
      'w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
    ],
    rootMobileDrawerInner: 'flex h-full w-full flex-col',
    rootWrapper: 'group peer hidden text-sidebar-foreground md:block',
    rootGapDesktop: [
      'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
      'group-data-[collapsible=offcanvas]:w-0',
      'group-data-[side=right]:rotate-180',
    ],
    rootContent: [
      'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
    ],
    rootContentInner: [
      'flex h-full w-full flex-col bg-sidebar',
      'group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border',
      'group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
    ],
    trigger: 'size-7',
    rail: [
      '-translate-x-1/2 group-data-[side=left]:-right-4 absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=right]:left-0 sm:flex',
      '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
      '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
      'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:hover:bg-sidebar group-data-[collapsible=offcanvas]:after:left-full',
      '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
      '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
    ],
    inset: [
      'relative flex w-full flex-1 flex-col bg-background',
      'md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
    ],
    input: [
      'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring rounded-md',
    ],
    header: 'flex flex-col gap-2 p-2',
    footer: 'flex flex-col gap-2 p-2',
    separator: 'mx-2 w-auto bg-sidebar-border',
    content: [
      'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
    ],
    group: 'relative flex w-full min-w-0 flex-col p-2',
    groupLabel: [
      'flex h-8 shrink-0 items-center rounded-md px-2 font-medium text-sidebar-foreground/70 text-xs outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
    ],
    groupAction: [
      'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      // Increases the hit area of the button on mobile.
      'after:-inset-2 after:absolute after:md:hidden',
      'group-data-[collapsible=icon]:hidden',
    ],
    groupContent: 'w-full text-sm',
    menu: 'flex w-full min-w-0 flex-col gap-1',
    menuItem: 'group/menu-item relative',
    menuAction: [
      'absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
      // Increases the hit area of the button on mobile.
      'after:-inset-2 after:absolute after:md:hidden',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
    ],
    menuBadge: [
      'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 font-medium text-sidebar-foreground text-xs tabular-nums',
      'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
    ],
    menuSkeleton: 'flex h-8 items-center gap-2 rounded-md px-2',
    menuSkeletonIcon: 'size-4 rounded-md',
    menuSkeletonInner: 'h-4 max-w-(--skeleton-width) flex-1',
    menuSub: [
      'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-sidebar-border border-l px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
    ],
    menuSubItem: [],
    menuSubButton: [
      '-translate-x-px flex h-7 min-w-0 items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
      'group-data-[collapsible=icon]:hidden',
    ],
  },
  variants: {
    variant: {
      sidebar: {
        rootGapDesktop: 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        rootContent: [
          'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
        ],
      },
      floating: {
        rootGapDesktop: [
          'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]',
        ],
        rootContent: [
          'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]',
        ],
      },
      inset: {
        rootGapDesktop: [
          'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]',
        ],
        rootContent: [
          'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]',
        ],
      },
    },
    side: {
      left: {
        rootContent: [
          'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]',
        ],
      },
      right: {
        rootContent: [
          'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        ],
      },
    },
    showOnHover: {
      true: {
        menuAction: [
          'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
        ],
      },
    },
    size: {
      sm: {
        menuSubButton: 'text-xs',
      },
      md: {
        menuSubButton: 'text-sm',
      },
    },
  },
  defaultVariants: {
    variant: 'sidebar',
    side: 'left',
  },
})

type SidebarStyles = VariantProps<typeof sidebarStyles>

type SidebarMenuButtonStyles = VariantProps<typeof sidebarMenuButtonStyles>

export { sidebarStyles, sidebarMenuButtonStyles, type SidebarStyles, type SidebarMenuButtonStyles }
