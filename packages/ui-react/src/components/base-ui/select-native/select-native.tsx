// Tremor SelectNative [v0.0.1]

import * as React from 'react'
import { cn } from 'twistail-react/utils'
import { type SelectNativeStyles, selectNativeStyles } from './select-native.css'

interface SelectNativeProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    SelectNativeStyles {}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, hasError, ...props }: SelectNativeProps, forwardedRef) => {
    return (
      <select
        ref={forwardedRef}
        className={cn(selectNativeStyles({ hasError }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

SelectNative.displayName = 'SelectNative'

export { SelectNative, type SelectNativeProps }
