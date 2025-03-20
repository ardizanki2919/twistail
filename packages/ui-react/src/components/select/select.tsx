import * as Lucide from 'lucide-react'
import * as React from 'react'
import { type SelectStyles, selectStyles } from './select.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, SelectStyles {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, ...props }: SelectProps, forwardedRef) => {
    const styles = selectStyles({ hasError })
    return (
      <div className={styles.wrapper()}>
        <select ref={forwardedRef} className={styles.select({ className })} {...props} />
        <Lucide.ChevronDown className={styles.icon()} aria-hidden="true" strokeWidth={1.5} />
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select, type SelectProps }
