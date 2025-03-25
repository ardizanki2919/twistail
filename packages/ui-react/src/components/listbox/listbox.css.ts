import { type VariantProps, tv } from 'tailwind-variants'

const listboxStyles = tv({
  slots: {
    group: [],
    value: [],
    trigger: [
      'group/trigger flex w-full select-none items-center justify-between gap-2 truncate rounded-md border px-3 py-2 shadow-xs',
      'border-input text-foreground bg-background hover:bg-accent outline-hidden transition sm:text-sm',
      'data-[placeholder]:text-muted-foreground data-[disabled]:bg-muted data-[disabled]:text-muted-foreground data-[disabled]:border-input',
      'focus:border-primary focus:ring-2 focus:ring-primary/20',
    ],
    triggerInner: 'truncate',
    triggerChevrons: [
      'size-4 shrink-0 text-muted-foreground group-data-[disabled]/trigger:text-muted',
    ],
    scrollUpButton: 'flex cursor-default items-center justify-center py-1',
    scrollUpButtonIcon: 'size-3 shrink-0',
    scrollDownButton: 'flex cursor-default items-center justify-center py-1',
    scrollDownButtonIcon: 'size-3 shrink-0',
    content: [
      'relative z-50 overflow-hidden rounded-md border shadow-black/[2.5%] shadow-lg bg-popover text-popover-foreground border-border',
      'min-w-[calc(var(--radix-select-trigger-width)-2px)] max-w-[95vw] max-h-(--radix-select-content-available-height) will-change-[transform,opacity]',
      'data-[state=closed]:animate-hide data-[side=bottom]:animate-slide-down-fade data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade data-[side=top]:animate-slide-up-fade',
    ],
    contentViewport: 'p-1',
    grouplabel: 'px-3 py-2 font-medium text-xs tracking-wide text-muted-foreground',
    item: [
      'grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 rounded-sm px-3 py-2 outline-hidden transition-colors sm:text-sm',
      'text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:text-muted-foreground data-[state=checked]:font-semibold',
    ],
    itemText: 'flex-1 truncate',
    itemIndicatorIcon: 'size-5 shrink-0 text-foreground',
    separator: '-mx-1 my-1 h-px bg-border',
  },
  variants: {
    position: {
      'item-aligned': {
        contentViewport: [
          'h-[var(--radix-select-trigger-height)] w-full min-w-[calc(var(--radix-select-trigger-width))]',
        ],
      },
      popper: {},
    },
    hasError: {
      true: {
        trigger: ['border-destructive ring-1 ring-destructive/20'],
      },
    },
    hideChevrons: {
      true: {
        trigger: 'px-2 py-1 border-none hover:bg-transparent shadow-none',
        triggerChevrons: 'hidden',
      },
    },
  },
  defaultVariants: {
    position: 'popper',
    hasError: false,
    hideChevrons: false,
  },
})

type ListboxStyles = VariantProps<typeof listboxStyles>

export { listboxStyles, type ListboxStyles }
