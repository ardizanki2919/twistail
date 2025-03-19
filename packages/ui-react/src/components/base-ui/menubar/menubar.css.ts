import { type VariantProps, tv } from 'tailwind-variants'

const menubarStyles = tv({
  slots: {
    root: 'flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm',
    trigger: [
      'flex cursor-default select-none items-center rounded-sm px-3 py-1 font-medium text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    ],
    subTrigger: [
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    ],
    subTriggerIndicator: 'ml-auto h-4 w-4',
    subContent: [
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in',
    ],
    content: [
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in',
    ],
    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItemInner: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    checkboxItemIndicator: 'size-4',
    radioItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    radioItemInner: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    radioItemIndicator: 'size-4 fill-current',
    label: 'px-2 py-1.5 font-semibold text-sm',
    separator: '-mx-1 my-1 h-px bg-muted',
    shortcut: 'ml-auto text-muted-foreground text-xs tracking-widest',
  },
  variants: {
    inset: {
      true: {
        subTrigger: 'pl-8',
        item: 'pl-8',
        label: 'pl-8',
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
})

type MenubarStyles = VariantProps<typeof menubarStyles>

export { menubarStyles, type MenubarStyles }
