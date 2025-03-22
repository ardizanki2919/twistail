'use client'

import { Checkbox } from 'twistail-react/checkbox'
import { Label } from 'twistail-react/label'

export default function LabelDemo() {
  return (
    <form className="flex items-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">Accept terms and conditions</Label>
    </form>
  )
}
