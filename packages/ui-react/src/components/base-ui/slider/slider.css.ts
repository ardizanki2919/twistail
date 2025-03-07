// import { focusRing } from 'twistail-react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const sliderStyles = tv({
  base: [],
  slots: {},
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type SliderStyles = VariantProps<typeof sliderStyles>

export { sliderStyles, type SliderStyles }
