import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const drawerStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type DrawerStyles = VariantProps<typeof drawerStyles>

export { drawerStyles, type DrawerStyles }
