'use client'

import { Kbd } from 'twistail-react/kbd'

export default function KbdDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Kbd keys={['ctrl', 'command', 'option']} size="md">
        J
      </Kbd>
    </div>
  )
}
