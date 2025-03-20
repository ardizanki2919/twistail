import { type VariantProps, tv } from 'tailwind-variants'

const comboboxStyles = tv({
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-md border p-0 shadow-xs',
      'border-input text-foreground bg-background hover:bg-accent outline-hidden transition sm:text-sm',
      'data-[placeholder]:text-muted-foreground data-[disabled]:bg-muted data-[disabled]:text-muted-foreground data-[disabled]:border-input',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
    ],
    triggerWrapper: 'flex w-full items-center justify-between px-3 py-2',
    placeholderText: 'text-muted-foreground text-sm truncate',
    selectedText: 'text-sm truncate',
    chevronIcon: 'size-4 ml-2 shrink-0 text-muted-foreground opacity-50',
    content: [
      'relative z-50 overflow-hidden rounded-md border shadow-black/[2.5%] shadow-lg p-0',
      'min-w-[calc(var(--radix-popover-trigger-width)-2px)] max-w-[95vw]',
      'bg-popover text-popover-foreground border-border will-change-[transform,opacity]',
      'data-[state=closed]:animate-hide data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-down-fade',
      'data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    commandInput: 'p-1 text-sm',
    commandEmpty: 'py-6 text-center text-sm text-muted-foreground',
    commandList: 'max-h-[300px] overflow-hidden p-0',
    commandGroup: 'overflow-hidden p-1 text-foreground',
    commandItem: [
      'relative flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none text-foreground justify-between',
      'hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground',
    ],
    commandItemContent: 'justify-start inline-flex w-full items-center gap-1',
    commandItemDisabled: 'pointer-events-none opacity-50',
    icon: 'mr-2 size-4 shrink-0 text-muted-foreground',
    checkIcon: 'size-4 shrink-0 text-foreground',
    commandSeparator: '-mx-1 h-px bg-border -mt-1',
    scrollArea: 'h-auto overflow-y-auto',
    closeItem: 'justify-center text-center text-sm hover:bg-accent hover:text-accent-foreground',
    footer: 'p-1 rounded-b-md',
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

type ComboboxStyles = VariantProps<typeof comboboxStyles>

export { comboboxStyles, type ComboboxStyles }
