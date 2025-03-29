import * as React from 'react'
import { type ProgressCircleStyles, progressCircleStyles } from './progress-circle.css'

interface ProgressCircleProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'value'>,
    ProgressCircleStyles {
  value?: number
  max?: number
  radius?: number
  strokeWidth?: number
  children?: React.ReactNode
}

const ProgressCircle = React.forwardRef<SVGSVGElement, ProgressCircleProps>(
  (
    {
      value = 0,
      max = 100,
      radius = 32,
      strokeWidth = 6,
      variant,
      animated,
      className,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const styles = progressCircleStyles({ variant, animated })
    const safeValue = Math.min(max, Math.max(value, 0))
    const normalizedRadius = radius - strokeWidth / 2
    const circumference = normalizedRadius * 2 * Math.PI
    const offset = circumference - (safeValue / max) * circumference

    return (
      <div
        className={styles.base({ className })}
        aria-label="Progress circle"
        aria-valuenow={safeValue}
        aria-valuemin={0}
        aria-valuemax={max}
        data-max={max}
        data-value={safeValue}
      >
        <svg
          ref={forwardedRef}
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          className={styles.svg()}
          {...props}
        >
          <circle
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            className={styles.background()}
          />
          {safeValue >= 0 ? (
            <circle
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              fill="transparent"
              strokeLinecap="round"
              className={styles.indicator()}
            />
          ) : null}
        </svg>
        <div className={styles.content()}>{children}</div>
      </div>
    )
  }
)

ProgressCircle.displayName = 'ProgressCircle'

export { ProgressCircle, type ProgressCircleProps }
