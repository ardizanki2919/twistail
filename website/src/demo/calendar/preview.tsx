'use client'

import * as React from 'react'
import { Calendar } from 'twistail-react/calendar'

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border border-border shadow-xs"
      />
    </div>
  )
}
