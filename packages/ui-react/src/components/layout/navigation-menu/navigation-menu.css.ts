import { type VariantProps, tv } from 'tailwind-variants'

const navigationMenuStyles = tv({
  slots: {
    root: 'relative z-10 flex max-w-max flex-1 items-center justify-center',
    list: 'group flex flex-1 list-none items-center justify-center space-x-1',
    trigger: [
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:hover:bg-accent',
    ],
    triggerIndicator: [
      'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
    ],
    content: [
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out md:absolute md:w-auto ',
    ],
    viewportWrapper: 'absolute top-full left-0 flex justify-center',
    viewport: [
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in md:w-[var(--radix-navigation-menu-viewport-width)]',
    ],
    indicator: [
      'data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in',
    ],
    indicatorInner: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
  },
  variants: {},
  defaultVariants: {},
})

type NavigationMenuStyles = VariantProps<typeof navigationMenuStyles>

export { navigationMenuStyles, type NavigationMenuStyles }
