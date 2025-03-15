import { type VariantProps, tv } from 'tailwind-variants'

const avatarStyles = tv({
  slots: {
    root: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full',
    fallback: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {},
})

type AvatarStyles = VariantProps<typeof avatarStyles>

export { avatarStyles, type AvatarStyles }
