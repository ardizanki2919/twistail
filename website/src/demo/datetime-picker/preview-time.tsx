'use client'

import * as React from 'react'
import { TimePicker } from 'twistail-react/datetime-picker'

export default function TimePickerDemo() {
  const [date, setDate] = React.useState<Date>(new Date())

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate)
    }
  }

  return (
    <div className="rounded-md border p-2">
      <TimePicker date={date} onChange={handleDateChange} />
    </div>
  )
}
