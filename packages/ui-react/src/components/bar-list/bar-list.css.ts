import { type VariantProps, tv } from 'tailwind-variants'

const barListStyles = tv({
  base: 'flex flex-col gap-3 w-full',
  slots: {
    item: 'flex items-center justify-between gap-2',
    label: 'flex flex-col gap-1 items-baseline',
    title: 'text-sm font-medium text-foreground',
    titleLink: [
      'text-sm font-medium text-foreground',
      'hover:underline hover:underline-offset-2',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    ],
    subtitle: 'text-xs text-muted-foreground',
    barContainer: 'flex-1 h-2 bg-muted rounded-full overflow-hidden',
    bar: 'h-full rounded-full transition-all duration-300 ease-in-out',
    value: 'text-sm font-medium text-foreground min-w-10 text-right',
    tooltip: [
      'z-50 max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-xs',
      'bg-popover text-popover-foreground border border-border will-change-[transform,opacity]',
      'data-[side=top]:animate-slide-up-fade data-[side=bottom]:animate-slide-down-fade',
      'data-[side=left]:animate-slide-down-fade data-[side=right]:animate-slide-right-fade',
      'data-[state=closed]:animate-hide',
      // Styling for arrow indicator
      'after:content-[""] after:absolute after:size-3 after:rotate-45 after:bg-popover after:border-r after:border-b after:border-border',
      'data-[side=top]:after:bottom-[-6px] data-[side=top]:after:left-[50%] data-[side=top]:after:translate-x-[-50%]',
      'data-[side=bottom]:after:top-[-6px] data-[side=bottom]:after:left-[50%] data-[side=bottom]:after:translate-x-[-50%] data-[side=bottom]:after:border-t data-[side=bottom]:after:border-l data-[side=bottom]:after:border-r-0 data-[side=bottom]:after:border-b-0',
      'data-[side=left]:after:right-[-6px] data-[side=left]:after:top-[50%] data-[side=left]:after:translate-y-[-50%] data-[side=left]:after:border-t data-[side=left]:after:border-r data-[side=left]:after:border-l-0 data-[side=left]:after:border-b-0',
      'data-[side=right]:after:left-[-6px] data-[side=right]:after:top-[50%] data-[side=right]:after:translate-y-[-50%] data-[side=right]:after:border-b data-[side=right]:after:border-l data-[side=right]:after:border-r-0 data-[side=right]:after:border-t-0',
    ],
    arrow: '',
    triggerWrapper: 'w-full cursor-pointer',
  },
  variants: {
    size: {
      sm: {
        barContainer: 'h-1.5',
        title: 'text-xs',
        titleLink: 'text-xs',
        subtitle: 'text-xs',
        value: 'text-xs min-w-8',
      },
      md: {
        barContainer: 'h-2',
        title: 'text-sm',
        titleLink: 'text-sm',
        subtitle: 'text-xs',
        value: 'text-sm min-w-10',
      },
      lg: {
        barContainer: 'h-3',
        title: 'text-base',
        titleLink: 'text-base',
        subtitle: 'text-sm',
        value: 'text-base min-w-12',
      },
    },
    hideValue: {
      true: {
        value: 'hidden',
      },
      false: {
        value: 'block',
      },
    },
    hideTooltip: {
      true: {
        tooltip: 'hidden',
      },
      false: {
        tooltip: '',
      },
    },
    hideArrow: {
      true: {
        tooltip: 'after:hidden',
      },
      false: {
        tooltip: '',
      },
    },
    variant: {
      default: {
        bar: 'bg-primary',
      },
      success: {
        bar: 'bg-success',
      },
      warning: {
        bar: 'bg-warning',
      },
      destructive: {
        bar: 'bg-destructive',
      },
      info: {
        bar: 'bg-info',
      },
    },
    interactive: {
      true: {
        triggerWrapper: 'hover:opacity-90 transition-opacity',
      },
      false: {
        triggerWrapper: '',
      },
    },
    showAnimation: {
      true: {
        bar: 'animate-grow-x origin-left',
      },
      false: {
        bar: '',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    hideValue: false,
    hideTooltip: false,
    hideArrow: false,
    variant: 'default',
    interactive: false,
    showAnimation: false,
  },
})

type BarListStyles = VariantProps<typeof barListStyles>

export { barListStyles, type BarListStyles }
