'use client'

import { MultiSelect } from 'twistail-react/multi-select'

const languages = [
  {
    value: 'javascript',
    label: 'JavaScript',
  },
  {
    value: 'typescript',
    label: 'TypeScript',
  },
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'rust',
    label: 'Rust',
  },
  {
    value: 'go',
    label: 'Go',
  },
]

export default function MultiSelectDemo() {
  const handleChange = (value: string[]) => {
    console.info('Selected values:', value)
  }

  return (
    <div className="w-[360px]">
      <MultiSelect
        options={languages}
        placeholder="Choose programming languages"
        onValueChange={handleChange}
        maxCount={3}
      />
    </div>
  )
}
