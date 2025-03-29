import { Allotment, AllotmentHandle } from 'allotment'
import { Slot } from 'radix-ui'
import * as React from 'react'
import { type SplitPaneStyles, splitPaneStyles } from './split-pane.css'
import 'allotment/dist/style.css'

interface SplitProps
  extends React.ComponentPropsWithoutRef<typeof Allotment>,
    Omit<SplitPaneStyles, keyof React.ComponentPropsWithoutRef<typeof Allotment>> {}

const Split = React.forwardRef<React.ComponentRef<typeof Allotment>, SplitProps>(
  ({ className, ...props }, forwardedRef) => {
    const styles = splitPaneStyles()
    return <Allotment ref={forwardedRef} className={styles.base({ className })} {...props} />
  }
)

interface SplitPaneProps
  extends React.ComponentPropsWithoutRef<typeof Allotment.Pane>,
    Omit<SplitPaneStyles, keyof React.ComponentPropsWithoutRef<typeof Allotment.Pane>> {}

const SplitPane = React.forwardRef<React.ComponentRef<typeof Allotment.Pane>, SplitPaneProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const styles = splitPaneStyles()
    return (
      <Allotment.Pane ref={forwardedRef} className={styles.pane({ className })} {...props}>
        {children}
      </Allotment.Pane>
    )
  }
)

interface SplitPanelProps extends React.ComponentPropsWithoutRef<'div'>, SplitPaneStyles {
  asChild?: boolean
}

const SplitPanel = React.forwardRef<HTMLDivElement, SplitPanelProps>(
  ({ className, asChild = false, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot.Root : 'div'
    const styles = splitPaneStyles()
    return <Comp ref={forwardedRef} className={styles.pane({ className })} {...props} />
  }
)

Split.displayName = 'Split'
SplitPane.displayName = 'SplitPane'
SplitPanel.displayName = 'SplitPanel'

export { Split, SplitPane, SplitPanel }
export type { AllotmentHandle as SplitHandle }
