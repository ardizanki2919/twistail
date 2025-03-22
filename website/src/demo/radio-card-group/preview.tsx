'use client'

import { RadioCardGroup, RadioCardIndicator, RadioCardItem } from 'twistail-react/radio-card-group'

export default function RadioCardGroupDemo() {
  return (
    <RadioCardGroup className="w-full max-w-sm">
      <RadioCardItem value="1">
        <div className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Software Engineer</span>
        </div>
      </RadioCardItem>
      <RadioCardItem value="2">
        <div className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Platform Engineer</span>
        </div>
      </RadioCardItem>
      <RadioCardItem value="3">
        <div className="flex items-center gap-3">
          <RadioCardIndicator />
          <span>Hardware Engineer</span>
        </div>
      </RadioCardItem>
    </RadioCardGroup>
  )
}
