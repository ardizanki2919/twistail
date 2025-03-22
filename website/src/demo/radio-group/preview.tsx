'use client'

import { Label } from 'twistail-react/label'
import { RadioGroup, RadioGroupItem } from 'twistail-react/radio-group'

export default function RadioGroupDemo() {
  return (
    <div className="flex justify-center">
      <RadioGroup>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="1" id="radio_1" />
          <Label htmlFor="radio_1">First come first serve</Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="2" id="radio_2" />
          <Label htmlFor="radio_2">By appointment</Label>
        </div>
        <div className="flex items-center gap-x-3">
          <RadioGroupItem value="3" id="radio_3" />
          <Label htmlFor="radio_3">By time window</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
