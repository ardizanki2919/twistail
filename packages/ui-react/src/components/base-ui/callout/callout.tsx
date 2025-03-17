import { LucideIcon } from 'lucide-react'
import * as React from 'react'
import { type CalloutStyles, calloutStyles } from './callout.css'

interface CalloutProps extends React.ComponentPropsWithoutRef<'div'>, CalloutStyles {
  title: string
  icon?: React.ReactElement | React.ElementType | LucideIcon
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ title, icon: Icon, className, variant, children, ...props }: CalloutProps, forwardedRef) => {
    const styles = calloutStyles({ variant })

    // Render icon based on its type
    const renderIcon = () => {
      if (!Icon) return null
      // If Icon is a React element (JSX), return it directly
      if (React.isValidElement(Icon)) {
        return Icon
      }
      // If Icon is a Lucide icon component (function|object), render it
      if (typeof Icon === 'function' || typeof Icon === 'object') {
        const IconComponent = Icon
        return <IconComponent className={styles.icon()} aria-hidden="true" strokeWidth={2} />
      }
      return null
    }

    return (
      <div ref={forwardedRef} className={styles.base({ className })} {...props}>
        <div className={styles.header()}>
          {renderIcon()}
          <span className={styles.title()}>{title}</span>
        </div>
        <div className={styles.content({ className: children ? styles.children() : '' })}>
          {children}
        </div>
      </div>
    )
  }
)

Callout.displayName = 'Callout'

export { Callout, type CalloutProps }
