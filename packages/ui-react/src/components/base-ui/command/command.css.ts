import { type VariantProps, tv } from 'tailwind-variants'

const commandStyles = tv({
  slots: {
    root: 'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
    dialogContent: 'overflow-hidden p-0 shadow-lg',
    dialogCommand: [
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
    ],
    inputWrapper: 'flex items-center border-b px-3',
    inputIcon: 'mr-2 h-4 w-4 shrink-0 opacity-50',
    input: [
      'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    ],
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: [
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs',
    ],
    separator: '-mx-1 h-px bg-border',
    item: [
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    ],
    shortcut: 'ml-auto text-muted-foreground text-xs tracking-widest',
  },
})

type CommandStyles = VariantProps<typeof commandStyles>

export { commandStyles, type CommandStyles }
