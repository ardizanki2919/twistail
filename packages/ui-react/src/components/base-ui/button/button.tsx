// Tremor Button [v0.2.0]

import { Slot } from '@radix-ui/react-slot'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { type ButtonStyles, buttonStyles } from './button.css'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, ButtonStyles {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      isLoading = false,
      loadingText,
      className,
      disabled,
      variant,
      children,
      ...props
    }: ButtonProps,
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'button'
    return (
      <Component
        ref={forwardedRef}
        className={buttonStyles({ variant, className })}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none flex shrink-0 items-center justify-center gap-1.5">
            <Lucide.LoaderCircle className="size-4 shrink-0 animate-spin" aria-hidden="true" />
            <span className="sr-only">{loadingText ? loadingText : 'Loading'}</span>
            {loadingText ? loadingText : children}
          </span>
        ) : (
          children
        )}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }
