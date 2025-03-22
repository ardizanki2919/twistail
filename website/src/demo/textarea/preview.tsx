'use client'

import { Textarea } from 'twistail-react/textarea'

export default function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center">
      <Textarea placeholder="Write something..." />
    </div>
  )
}
