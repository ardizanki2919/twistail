'use client'

import { Slider } from 'twistail-react/slider'

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center">
      <Slider defaultValue={[55]} />
    </div>
  )
}
