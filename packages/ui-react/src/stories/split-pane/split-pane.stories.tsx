import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Split, SplitPane } from '#/components/split-pane'

const meta: Meta<typeof SplitPane> = {
  component: SplitPane,
  title: 'Layout Components/Split Pane',
  tags: ['status:wip'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof SplitPane>

const Content = () => (
  <div className="h-full max-h-96 bg-background">
    <div className="h-full p-2">
      <svg
        className="size-full border border-border bg-muted text-muted-foreground"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vectorEffect="non-scaling-stroke" strokeWidth={2} d="M0 0l200 200M0 200L200 0" />
      </svg>
    </div>
  </div>
)

export const Default: Story = {
  render: () => {
    return (
      <div className="size-full bg-background">
        <Split vertical>
          <Content />
          <Content />
        </Split>
      </div>
    )
  },
}
// export const Default: Story = {
//   render: () => {
//     return (
//       <Split minSize={200}>
//         <SplitPane maxSize={400}>
//           <Split vertical>
//             <SplitPane minSize={100}>
//               {/* <Content /> */}
//               <div>Hahahahhah</div>
//             </SplitPane>
//             <SplitPane snap>
//               {/* <Content /> */}
//               <div>Hahahahhah</div>
//             </SplitPane>
//             <SplitPane snap>
//               {/* <Content /> */}
//               <div>Hahahahhah</div>
//             </SplitPane>
//           </Split>
//         </SplitPane>
//         <SplitPane>
//           {/* <Content /> */}
//           <div>Hahahahhah</div>
//         </SplitPane>
//       </Split>
//     )
//   },
// }
