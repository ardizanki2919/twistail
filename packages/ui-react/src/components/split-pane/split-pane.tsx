import { Allotment } from 'allotment'
import * as React from 'react'
import { type SplitPaneStyles, splitPaneStyles } from './split-pane.css'

interface SplitPaneProps
  extends React.ComponentPropsWithoutRef<typeof Allotment>,
    SplitPaneStyles {}

const Split = React.forwardRef<React.ComponentRef<typeof Allotment>, SplitPaneProps>(
  ({ className, ...props }, forwardedRef) => {
    const styles = splitPaneStyles()
    return <Allotment ref={forwardedRef} className={styles.base({ className })} {...props} />
  }
)

const SplitPane = React.forwardRef<React.ComponentRef<typeof Allotment.Pane>, SplitPaneProps>(
  ({ className, ...props }, forwardedRef) => {
    const styles = splitPaneStyles()
    return <Allotment.Pane ref={forwardedRef} className={styles.pane({ className })} {...props} />
  }
)

Split.displayName = 'Split'

export { Split, SplitPane }
