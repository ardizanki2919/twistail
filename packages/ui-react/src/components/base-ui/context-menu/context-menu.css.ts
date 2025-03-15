import { type VariantProps, tv } from 'tailwind-variants'

const contextMenuStyles = tv({
  slots: {
    subMenuTrigger: [
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    ],
    subMenuTriggerIcon: 'ml-auto h-4 w-4',
    subMenuContent: [
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
    ],
    content: [
      'fade-in-80 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-[--radix-context-menu-content-available-height] min-w-[8rem] animate-in overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
    ],
    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    radioItem: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    radioItemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    radioItemIndicatorCircle: 'h-2 w-2 fill-current',
    label: 'px-2 py-1.5 font-semibold text-foreground text-sm',
    separator: '-mx-1 my-1 h-px bg-border',
    shortcut: 'ml-auto text-muted-foreground text-xs tracking-widest',
  },
  variants: {
    inset: {
      true: {
        subMenuTrigger: 'pl-8',
        item: 'pl-8',
        label: 'pl-8',
      },
    },
  },
})

type ContextMenuStyles = VariantProps<typeof contextMenuStyles>

export { contextMenuStyles, type ContextMenuStyles }
