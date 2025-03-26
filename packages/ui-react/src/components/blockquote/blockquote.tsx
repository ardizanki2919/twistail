import { Slot } from 'radix-ui'
import * as React from 'react'
import { type BlockquoteStyles, blockquoteStyles } from './blockquote.css'

interface BlockquoteProps extends React.ComponentPropsWithoutRef<'blockquote'>, BlockquoteStyles {
  asChild?: boolean
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, asChild = false, variant, size, ...props }: BlockquoteProps, forwardedRef) => {
    const Comp = asChild ? Slot.Root : 'blockquote'
    const styles = blockquoteStyles({ variant, size })
    return <Comp ref={forwardedRef} className={styles.base({ className })} {...props} />
  }
)

interface BlockquoteAuthorProps extends React.ComponentPropsWithoutRef<'cite'>, BlockquoteStyles {
  asChild?: boolean
}

const BlockquoteAuthor = React.forwardRef<HTMLElement, BlockquoteAuthorProps>(
  (
    { className, asChild = false, variant, size, ...props }: BlockquoteAuthorProps,
    forwardedRef
  ) => {
    const Comp = asChild ? Slot.Root : 'cite'
    const styles = blockquoteStyles({ variant, size })
    return <Comp ref={forwardedRef} className={styles.author({ className })} {...props} />
  }
)

Blockquote.displayName = 'Blockquote'
BlockquoteAuthor.displayName = 'BlockquoteAuthor'

export { Blockquote, BlockquoteAuthor }
