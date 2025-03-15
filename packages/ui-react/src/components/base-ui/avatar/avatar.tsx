import { Avatar as AvatarPrimitives } from 'radix-ui'
import * as React from 'react'
import { avatarStyles } from './avatar.css'

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Root>
>(({ className, ...props }, ref) => {
  const styles = avatarStyles()
  return <AvatarPrimitives.Root ref={ref} className={styles.root({ className })} {...props} />
})

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitives.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Image>
>(({ className, ...props }, ref) => {
  const styles = avatarStyles()
  return <AvatarPrimitives.Image ref={ref} className={styles.image({ className })} {...props} />
})

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitives.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitives.Fallback>
>(({ className, ...props }, ref) => {
  const styles = avatarStyles()
  return (
    <AvatarPrimitives.Fallback ref={ref} className={styles.fallback({ className })} {...props} />
  )
})

Avatar.displayName = AvatarPrimitives.Root.displayName
AvatarImage.displayName = AvatarPrimitives.Image.displayName
AvatarFallback.displayName = AvatarPrimitives.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
