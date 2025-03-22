'use client'

import { Divider } from 'twistail-react/divider'

export default function DividerDemo() {
  return (
    <div className="w-[320px]">
      <div className="space-y-1">
        <h4 className="font-medium text-sm leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Divider orientation="vertical" className="mr-4" />
        <div>Docs</div>
        <Divider orientation="vertical" className="mr-4" />
        <div>Source</div>
      </div>
    </div>
  )
}
