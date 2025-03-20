import { type VariantProps, tv } from 'tailwind-variants'

const dividerStyles = tv({
  base: 'flex items-center justify-between gap-3 text-sm text-muted-foreground',
  slots: {
    line: 'bg-border',
    content: 'whitespace-nowrap text-inherit',
  },
  variants: {
    orientation: {
      horizontal: {
        base: 'mx-auto my-6 w-full shrink-0',
        line: 'h-[1px] w-full',
      },
      vertical: {
        base: 'h-full mx-1',
        line: 'h-full w-[1px]',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type DividerStyles = VariantProps<typeof dividerStyles>

export { dividerStyles, type DividerStyles }
