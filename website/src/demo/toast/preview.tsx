'use client'

import { Button } from 'twistail-react/button'
import { toast } from 'twistail-react/toast'

export default function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast('Event has been created', {
          description: 'March 03, 2025 at 9:00 AM',
          position: 'top-center',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
