import { type VariantProps, tv } from 'tailwind-variants'

const navigationMenuStyles = tv({
  slots: {
    root: 'relative z-10 flex max-w-max flex-1 items-center justify-center',
    list: 'group flex flex-1 list-none items-center justify-center space-x-1',
    trigger: [
      'group flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm',
      'font-medium outline-none text-foreground hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
    ],
    triggerIndicator: [
      'ml-1 size-3 shrink-0 transition duration-200 group-data-[state=open]:rotate-180',
    ],
    content: [
      'z-50 min-w-[8rem] overflow-hidden rounded-md border-none absolute top-0 left-0',
      'bg-popover p-1 text-popover-foreground shadow-xs origin-top-left w-full md:w-auto',
      'data-[state=closed]:animate-hide',
      'data-[motion=from-start]:animate-navmenu-enter-from-left',
      'data-[motion=from-end]:animate-navmenu-enter-from-right',
      'data-[motion=to-start]:animate-navmenu-exit-to-left',
      'data-[motion=to-end]:animate-navmenu-exit-to-right',
    ],
    viewportWrapper: 'absolute top-full flex justify-start',
    viewport: [
      'relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center',
      'overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-xs',
      'data-[state=open]:animate-nav-viewport-open data-[state=closed]:animate-nav-viewport-close',
      'md:w-[var(--radix-navigation-menu-viewport-width)]',
    ],
    indicator: [
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
      'data-[state=hidden]:animate-hide data-[state=visible]:animate-slide-down-fade',
    ],
    indicatorInner: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
  },
  variants: {},
  defaultVariants: {},
})

type NavigationMenuStyles = VariantProps<typeof navigationMenuStyles>

export { navigationMenuStyles, type NavigationMenuStyles }
