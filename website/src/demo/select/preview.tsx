'use client'

import { Select } from 'twistail-react/select'

export default function SelectDemo() {
  return (
    <Select className="w-56">
      <option value="0-18">18 and under</option>
      <option value="19-39">19 to 39</option>
      <option value="40-64">40 to 64</option>
      <option value="65-infinity">65 and over</option>
    </Select>
  )
}
