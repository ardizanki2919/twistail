'use client'

import * as Lucide from 'lucide-react'
import { Button } from 'twistail-react/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'twistail-react/collapsible'

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-[350px] space-y-2" defaultOpen>
      <div className="flex w-full items-center justify-between space-x-4 pr-0 pl-4">
        <h4 className="font-semibold text-sm">@riipandi starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <Lucide.ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
