// Tremor Button [v0.2.0]

import * as Lucide from 'lucide-react'
import { Slot } from 'radix-ui'
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
    const Comp = asChild ? Slot.Root : 'button'
    const styles = buttonStyles({ variant, isLoading })

    // TODO: move styles to `button.css.ts`
    const withLoading = (
      <span className={styles.span()}>
        <Lucide.LoaderCircle className={styles.icon()} aria-hidden="true" />
        <span className="sr-only">{loadingText ? loadingText : 'Loading'}</span>
        {loadingText ? loadingText : children}
      </span>
    )

    return (
      <Comp
        ref={forwardedRef}
        className={styles.base({ className })}
        disabled={disabled || isLoading}
        tremor-id="tremor-raw"
        {...props}
      >
        {isLoading ? withLoading : children}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }
