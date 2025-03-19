import { type VariantProps, tv } from 'tailwind-variants'

const multiSelectStyles = tv({
  slots: {
    trigger: [
      'flex h-auto min-h-10 w-full items-center justify-between rounded-md border p-0 shadow-xs',
      'border-input text-foreground bg-background hover:bg-accent outline-hidden transition sm:text-sm',
      'data-[placeholder]:text-muted-foreground data-[disabled]:bg-muted data-[disabled]:text-muted-foreground data-[disabled]:border-input',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
    ],
    triggerWrapper: 'flex w-full items-center justify-between gap-1 p-2 pr-3.5',
    badgeWrapper: 'flex flex-wrap items-center gap-1 flex-1 mr-5',
    triggerActions: 'flex items-center shrink-0',
    placeholderWrapper: 'flex w-full items-center justify-between pr-3.5',
    placeholderText: 'text-muted-foreground text-sm pl-3.5 pr-2 py-2 w-full items-start text-left',
    badge: [
      'inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold transition-colors',
      'bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-xs border-0',
    ],
    badgeRemoveIcon: 'ml-1 size-3.5 text-secondary-foreground/70 hover:text-accent-foreground',
    actionsWrapper: 'flex items-center justify-between',
    clearIcon: 'size-4 mx-1.5 cursor-pointer text-muted-foreground hover:text-foreground shrink-0',
    chevronIcon: 'size-4 cursor-pointer text-muted-foreground shrink-0 ml-2',
    verticalDivider: 'mx-1.5 h-6',
    content: [
      'relative z-50 overflow-hidden rounded-md border shadow-black/[2.5%] shadow-lg p-0',
      'min-w-[calc(var(--radix-popover-trigger-width)-2px)] max-w-[95vw] max-h-(--radix-popover-content-available-height)',
      'bg-popover text-popover-foreground border-border will-change-[transform,opacity]',
      'data-[state=closed]:animate-hide data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-down-fade',
      'data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    commandInput: 'p-1 text-sm',
    commandEmpty: 'py-6 text-center text-sm text-muted-foreground',
    commandGroup: 'overflow-hidden p-1 text-foreground',
    commandSeparator: '-mx-1 h-px bg-border',
    checkboxItem: [
      'group/MultiSelectCheckboxItem relative flex cursor-pointer select-none items-center gap-x-2',
      'rounded-sm py-1.5 pr-2 pl-9 outline-hidden transition-colors sm:text-sm focus-visible:bg-accent',
      'focus-visible:text-accent-foreground hover:bg-accent hover:text-accent-foreground text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[state=checked]:font-semibold',
    ],
    checkboxItemIndicator: 'absolute left-2 flex size-4 items-center justify-center',
    checkboxItemIndicatorIcon: 'size-full shrink-0 text-foreground',
    checkboxItemEmptyIndicator: 'size-4 rounded-sm border border-muted-foreground/50',
    icon: 'mr-1 size-4 text-muted-foreground',
    actionButtonsWrapper: 'flex items-center justify-between w-full',
    actionItem: [
      'flex-1 cursor-pointer justify-center px-3 py-1.5 text-sm rounded-sm',
      'hover:bg-accent hover:text-accent-foreground',
    ],
  },
  variants: {
    hasError: {
      true: {
        trigger: 'border-destructive ring-1 ring-destructive/20',
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
})

type MultiSelectStyles = VariantProps<typeof multiSelectStyles>

export { multiSelectStyles, type MultiSelectStyles }
