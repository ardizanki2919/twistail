// import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const tabsStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type TabsStyles = VariantProps<typeof tabsStyles>

export { tabsStyles, type TabsStyles }
