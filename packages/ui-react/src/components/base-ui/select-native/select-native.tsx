// Tremor SelectNative [v0.0.1]

import React from 'react'
import { clx } from 'twistail-react/utils'
import { type SelectNativeStyles, selectNativeStyles } from './select-native.css'

interface SelectNativeProps
  extends React.InputHTMLAttributes<HTMLSelectElement>,
    SelectNativeStyles {}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectNativeProps>(
  ({ className, hasError, ...props }: SelectNativeProps, forwardedRef) => {
    return (
      <select
        ref={forwardedRef}
        className={clx(selectNativeStyles({ hasError }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

SelectNative.displayName = 'SelectNative'

export { SelectNative, type SelectNativeProps }
