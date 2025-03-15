import { Avatar as AvatarPrimitives } from 'radix-ui'
import * as React from 'react'
import { type AvatarStyles, avatarStyles } from './avatar.css'

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

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement>, AvatarStyles {
  max?: number
  showCount?: boolean
  overlap?: boolean
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max, showCount = true, overlap = true, ...props }, ref) => {
    const styles = avatarStyles()
    const childrenArray = React.Children.toArray(children)
    const totalAvatars = childrenArray.length
    const displayAvatars = max ? childrenArray.slice(0, max) : childrenArray
    const remainingCount = max && totalAvatars > max ? totalAvatars - max : 0

    return (
      <div ref={ref} className={styles.group({ className, overlap })} {...props}>
        {displayAvatars}
        {showCount && remainingCount > 0 && (
          <Avatar className={styles.groupItem()}>
            <AvatarFallback>+{remainingCount}</AvatarFallback>
          </Avatar>
        )}
      </div>
    )
  }
)

Avatar.displayName = AvatarPrimitives.Root.displayName
AvatarImage.displayName = AvatarPrimitives.Image.displayName
AvatarFallback.displayName = AvatarPrimitives.Fallback.displayName
AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup }
