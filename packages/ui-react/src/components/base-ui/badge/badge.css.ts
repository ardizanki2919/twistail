// import { focusRing } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const badgeStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type BadgeStyles = VariantProps<typeof badgeStyles>

export { badgeStyles, type BadgeStyles }
