'use client'

import { Divider } from 'twistail-react/divider'
import { ScrollArea } from 'twistail-react/scroll-area'
import { clx } from 'twistail-utils'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default function ScrollareaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 font-semibold text-sm leading-none">Tags</h4>
        {tags.map((tag, index) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Divider className={clx(index < tags.length - 1 ? 'block' : 'hidden', 'my-2')} />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
