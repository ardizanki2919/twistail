// Tremor Select [v0.0.1]

import * as React from 'react'
import { clx } from 'twistail-utils'
import { type SelectStyles, selectStyles } from './select.css'

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement>, SelectStyles {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, ...props }: SelectProps, forwardedRef) => {
    return (
      <select
        ref={forwardedRef}
        className={clx(selectStyles({ hasError }), className)}
        {...props}
      />
    )
  }
)

Select.displayName = 'Select'

export { Select, type SelectProps }
