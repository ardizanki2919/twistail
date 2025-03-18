import * as React from 'react'
import { kbdStyles } from './kbd.css'

const Kbd = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, forwardedRef) => {
    return <div ref={forwardedRef} className={kbdStyles({ className })} {...props} />
  }
)

Kbd.displayName = 'Kbd'

export { Kbd }
