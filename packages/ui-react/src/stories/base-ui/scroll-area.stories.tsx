import type { Meta, StoryObj } from '@storybook/react'
import { clx } from 'twistail-utils'
import { Divider, ScrollArea, ScrollBar } from '#/components'

const meta: Meta<typeof ScrollArea> = {
  title: 'Base Components/ScrollArea',
  component: ScrollArea,
  tags: ['status:preview'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export const Default: Story = {
  render: () => (
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
  ),
}

interface Gallery {
  author: string
  picture: string
}

const works: Gallery[] = [
  {
    author: 'Olav Tvedt',
    picture: `https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    author: 'George Dagerotip',
    picture: `https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
  {
    author: 'Josh Berquist',
    picture: `https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  },
]

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-[580px] whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.author} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.picture}
                className="aspect-[3/4] h-fit max-h-[400px] w-fit rounded-sm border object-cover"
                alt={artwork.author}
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-muted-foreground text-xs">
              Photo by <span className="font-semibold text-foreground">{artwork.author}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
