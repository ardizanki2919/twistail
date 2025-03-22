'use client'

import { Checkbox } from 'twistail-react/checkbox'
import { Label } from 'twistail-react/label'

export default function CheckboxDemo() {
  return (
    <form className="flex items-center gap-2">
      <Checkbox />
      <Label disabled>I agree with the terms</Label>
    </form>
  )
}
