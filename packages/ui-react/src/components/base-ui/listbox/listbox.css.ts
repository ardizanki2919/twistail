import { type VariantProps, tv } from 'tailwind-variants'

const listboxStyles = tv({
  slots: {
    group: [],
    value: [],
    trigger: [],
    scrollupbutton: [],
    scrolldownbutton: [],
    content: [],
    grouplabel: [],
    item: [],
    separator: [],
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type ListboxStyles = VariantProps<typeof listboxStyles>

export { listboxStyles, type ListboxStyles }
