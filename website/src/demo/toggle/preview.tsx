'use client'

import * as Lucide from 'lucide-react'
import { Toggle } from 'twistail-react/toggle'

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle star">
      <Lucide.Star className="pointer-events-none size-4 shrink-0" />
    </Toggle>
  )
}
