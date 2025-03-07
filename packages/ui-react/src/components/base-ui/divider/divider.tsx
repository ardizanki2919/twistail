// Tremor Divider [v0.0.2]

import { clx } from '@twistail/react/utils'
import React from 'react'

type DividerProps = React.ComponentPropsWithoutRef<'div'>

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={clx(
        // base
        'mx-auto my-6 flex w-full items-center justify-between gap-3 text-sm',
        // text color
        'text-slate-500 dark:text-slate-500',
        className
      )}
      tremor-id="tremor-raw"
      {...props}
    >
      {children ? (
        <>
          <div
            className={clx(
              // base
              'h-[1px] w-full',
              // background color
              'bg-slate-200 dark:bg-slate-800'
            )}
          />
          <div className="whitespace-nowrap text-inherit">{children}</div>
          <div
            className={clx(
              // base
              'h-[1px] w-full',
              // background color
              'bg-slate-200 dark:bg-slate-800'
            )}
          />
        </>
      ) : (
        <div
          className={clx(
            // base
            'h-[1px] w-full',
            // background color
            'bg-slate-200 dark:bg-slate-800'
          )}
        />
      )}
    </div>
  )
)

Divider.displayName = 'Divider'

export { Divider }
