import * as React from 'react'
import { textareaStyles } from './textarea.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }: TextareaProps, forwardedRef) => {
    return (
      <textarea ref={forwardedRef} className={textareaStyles({ hasError, className })} {...props} />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }
