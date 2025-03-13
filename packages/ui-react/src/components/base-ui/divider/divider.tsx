// Tremor Divider [v0.0.2]

import * as React from 'react'
import { type DividerStyles, dividerStyles } from './divider.css'

interface DividerProps extends React.ComponentPropsWithoutRef<'div'>, DividerStyles {}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const styles = dividerStyles()

    return (
      <div ref={forwardedRef} className={styles.base({ className })} {...props}>
        {children ? (
          <>
            <div className={styles.line()} />
            <div className={styles.content()}>{children}</div>
            <div className={styles.line()} />
          </>
        ) : (
          <div className={styles.line()} />
        )}
      </div>
    )
  }
)

Divider.displayName = 'Divider'

export { Divider, type DividerProps }
