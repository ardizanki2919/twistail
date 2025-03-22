'use client'

import { InputPin, InputPinGroup, InputPinSlot } from 'twistail-react/input-pin'

export default function InputPinDemo() {
  return (
    <InputPin maxLength={4} inputSize="lg">
      <InputPinGroup>
        <InputPinSlot index={0} />
        <InputPinSlot index={1} />
        <InputPinSlot index={2} />
        <InputPinSlot index={3} />
      </InputPinGroup>
    </InputPin>
  )
}
