'use client'

import * as React from 'react'
import { ProgressBar } from 'twistail-react/progress-bar'

export default function ProgressBarDemo() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
    }, 1000)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="mx-auto w-full max-w-lg space-y-4">
      <ProgressBar value={progress} label={`${progress}%`} />
      <p className="text-muted-foreground text-sm">
        Progress automatically increments every second
      </p>
    </div>
  )
}
