import { ScrollArea as ScrollAreaPrimitives } from 'radix-ui'
import * as React from 'react'
import { type ScrollAreaStyles, scrollAreaStyles } from './scroll-area.css'

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitives.Root>
>(({ className, children, ...props }, forwardedRef) => {
  const styles = scrollAreaStyles()
  return (
    <ScrollAreaPrimitives.Root ref={forwardedRef} className={styles.root({ className })} {...props}>
      <ScrollAreaPrimitives.Viewport className={styles.viewport()}>
        {children}
      </ScrollAreaPrimitives.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitives.Corner className={styles.corner()} />
    </ScrollAreaPrimitives.Root>
  )
})

interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitives.ScrollAreaScrollbar>,
    ScrollAreaStyles {}

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitives.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = 'vertical', ...props }, forwardedRef) => {
  const styles = scrollAreaStyles({ orientation })
  return (
    <ScrollAreaPrimitives.ScrollAreaScrollbar
      ref={forwardedRef}
      orientation={orientation}
      className={styles.scrollbar({ className })}
      {...props}
    >
      <ScrollAreaPrimitives.ScrollAreaThumb className={styles.thumb()} />
    </ScrollAreaPrimitives.ScrollAreaScrollbar>
  )
})

ScrollArea.displayName = ScrollAreaPrimitives.Root.displayName
ScrollBar.displayName = ScrollAreaPrimitives.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
