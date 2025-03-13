// Tremor Callout [v0.0.1]

import * as React from 'react'
import { type CalloutStyles, calloutStyles } from './callout.css'

interface CalloutProps extends React.ComponentPropsWithoutRef<'div'>, CalloutStyles {
  title: string
  icon?: React.ElementType | React.ReactElement
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ title, icon: Icon, className, variant, children, ...props }: CalloutProps, forwardedRef) => {
    const styles = calloutStyles({ variant })

    return (
      <div ref={forwardedRef} className={styles.base({ className })} {...props}>
        <div className={styles.header()}>
          {Icon && typeof Icon === 'function' ? (
            <Icon className={styles.icon()} aria-hidden="true" />
          ) : (
            Icon
          )}
          <span className={styles.title()}>{title}</span>
        </div>
        <div
          className={styles.content({ className: children ? styles.contentWithChildren() : '' })}
        >
          {children}
        </div>
      </div>
    )
  }
)

Callout.displayName = 'Callout'

export { Callout, type CalloutProps }
