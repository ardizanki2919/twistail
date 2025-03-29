'use client'

import { Tracker } from 'twistail-react/tracker'

const data = [
  {
    key: 'item-1',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-2',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-3',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-4',
    color: 'bg-red-600',
    tooltip: 'Failed',
  },
  {
    key: 'item-5',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-6',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-7',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-8',
    color: 'bg-red-600',
    tooltip: 'Failed',
  },
  {
    key: 'item-9',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-10',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-11',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-12',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-13',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-14',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-15',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-16',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-17',
    color: 'bg-yellow-600',
    tooltip: 'Warning',
  },
  {
    key: 'item-18',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-19',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
  {
    key: 'item-20',
    color: 'bg-emerald-600',
    tooltip: 'Completed',
  },
]

export default function TrackerDemo() {
  return (
    <div className="w-full max-w-lg rounded-md">
      <Tracker data={data} className="mx-auto" />
    </div>
  )
}
