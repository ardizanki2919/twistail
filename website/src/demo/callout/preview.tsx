'use client'

import * as Lucide from 'lucide-react'
import { Callout } from 'twistail-react/callout'

export default function CalloutDemo() {
  return (
    <Callout
      title="Sales Performance"
      icon={<Lucide.Info className="mr-1.5 size-5 shrink-0 p-0.5" />}
    >
      System Update: Enhanced Salesforce and Dynamics 365 integration now delivers key sales
      performance metrics directly to your dashboard for improved target achievement.
    </Callout>
  )
}
