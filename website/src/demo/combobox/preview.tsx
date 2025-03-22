'use client'

import { useState } from 'react'
import { Combobox } from 'twistail-react/combobox'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro', disabled: true },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'solid', label: 'Solid' },
]

export default function ComboboxDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="flex w-[200px] flex-col gap-3">
      <Combobox options={frameworks} onValueChange={setValue} />
      <div className="px-1 text-sm">
        Selected value: <span className="font-semibold">{value || 'none'}</span>
      </div>
    </div>
  )
}
