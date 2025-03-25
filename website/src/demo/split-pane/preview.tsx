'use client'

import { Split, SplitPane, SplitPanel } from 'twistail-react/split-pane'
import { clx } from 'twistail-utils'
import 'allotment/dist/style.css'

export default function SplitPaneDemo() {
  return (
    <div className="h-[300px] w-full max-w-lg rounded-lg">
      <Split snap>
        <SplitPane>
          <Content id="1" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Split vertical>
            <SplitPane>
              <Content id="2" colorClass="bg-accent" />
            </SplitPane>
            <SplitPane>
              <Split>
                <SplitPane>
                  <Content id="3" colorClass="bg-destructive" />
                </SplitPane>
                <SplitPane>
                  <Content id="4" colorClass="bg-success" />
                </SplitPane>
              </Split>
            </SplitPane>
          </Split>
        </SplitPane>
      </Split>
    </div>
  )
}

const Content = ({ id, colorClass }: { id: string; colorClass: string }) => {
  return (
    <SplitPanel className={clx('flex items-center justify-center', colorClass)}>
      <div className="font-semibold text-lg text-white">{id}</div>
    </SplitPanel>
  )
}
