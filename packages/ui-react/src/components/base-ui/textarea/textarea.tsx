// Tremor Textarea [v0.0.2]

import { clx, focusInput, hasErrorInput } from '@twistail/react/utils'
import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }: TextareaProps, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={clx(
          // base
          'flex min-h-[4rem] w-full rounded-md border px-3 py-1.5 shadow-sm outline-none transition-colors sm:text-sm',
          // text color
          'text-slate-900 dark:text-slate-50',
          // border color
          'border-slate-300 dark:border-slate-800',
          // background color
          'bg-white dark:bg-slate-950',
          // placeholder color
          'placeholder-slate-400 dark:placeholder-slate-500',
          // disabled
          'disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-300',
          'disabled:dark:border-slate-700 disabled:dark:bg-slate-800 disabled:dark:text-slate-500',
          // focus
          focusInput,
          // error
          hasError ? hasErrorInput : '',
          // invalid (optional)
          // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
          className
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }
