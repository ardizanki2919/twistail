'use client'

import { ProgressCircle } from 'twistail-react/progress-circle'

export default function ProgressCircleDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="default">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="neutral">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Neutral</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="warning">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="error">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Error</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={65} variant="success">
          <span className="font-medium text-sm">65%</span>
        </ProgressCircle>
        <span className="text-sm">Success</span>
      </div>
    </div>
  )
}
