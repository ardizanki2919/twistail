import { type VariantProps, tv } from 'tailwind-variants'

const dividerStyles = tv({
  base: 'mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm text-muted-foreground',
  slots: {
    line: 'h-[1px] w-full bg-border',
    content: 'whitespace-nowrap text-inherit',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DividerStyles = VariantProps<typeof dividerStyles>

export { dividerStyles, type DividerStyles }
