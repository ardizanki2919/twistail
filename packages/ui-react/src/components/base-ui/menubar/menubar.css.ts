import { type VariantProps, tv } from 'tailwind-variants'

const menubarStyles = tv({
  slots: {
    root: 'flex h-10 items-center space-x-1 rounded-md border border-border bg-background p-1 shadow-sm',
    trigger: [
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none',
      'text-foreground hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
    ],
    subTrigger: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-1 pl-2 text-sm outline-none',
      'text-foreground hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
    ],
    subTriggerIndicator: 'ml-auto size-4 shrink-0',
    subContent: [
      'z-50 min-w-[8rem] origin-[--radix-menubar-content-transform-origin] overflow-hidden',
      'rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-xs',
      'will-change-[transform,opacity] data-[state=closed]:animate-hide',
      'data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-left-fade',
      'data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    content: [
      'origin-[--radix-menubar-content-transform-origin] border-border shadow-md',
      'relative z-50 overflow-hidden rounded-md border p-1 shadow-black/[2.5%]',
      'min-w-48 max-h-[var(--radix-popper-available-height)] bg-popover text-popover-foreground',
      'data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-left-fade',
      'data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    item: [
      'group/MenubarItem relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-1 pl-2',
      'outline-none transition-colors sm:text-sm text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'hover:bg-accent hover:text-accent-foreground',
    ],
    checkboxItem: [
      'relative flex cursor-default select-none items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8',
      'outline-none transition-colors sm:text-sm text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
      'data-[state=checked]:font-semibold',
    ],
    checkboxItemInner: 'absolute left-2 flex size-4 items-center justify-center',
    checkboxItemIndicator: 'size-full shrink-0 text-foreground',
    radioItem: [
      'group/MenubarRadioItem relative flex cursor-default select-none items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8',
      'outline-none transition-colors sm:text-sm text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground',
      'data-[state=checked]:font-semibold',
    ],
    radioItemInner: 'absolute left-2 flex size-4 items-center justify-center',
    radioItemIndicator: 'size-4 fill-current',
    label: 'px-2 py-2 font-medium text-xs tracking-wide text-muted-foreground',
    separator: '-mx-1 my-1 h-px border-border border-t',
    shortcut: 'ml-auto font-normal text-muted-foreground text-xs tracking-widest',
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
