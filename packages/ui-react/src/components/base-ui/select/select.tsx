import * as React from 'react'
import { type SelectStyles, selectStyles } from './select.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, SelectStyles {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, ...props }: SelectProps, forwardedRef) => (
    <select ref={forwardedRef} className={selectStyles({ hasError, className })} {...props} />
  )
)

Select.displayName = 'Select'

export { Select, type SelectProps }
