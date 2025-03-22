'use client'

import { Input } from 'twistail-react/input'

export default function InputDemo() {
  return (
    <div className="flex w-xs flex-col gap-2">
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </div>
  )
}
