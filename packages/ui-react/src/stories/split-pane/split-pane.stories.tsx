import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { clx } from 'twistail-utils'
import { Split, type SplitHandle, SplitPane, SplitPanel } from '#/components/split-pane'

const meta: Meta<typeof Split> = {
  component: Split,
  title: 'Layout Components/Split Pane',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Split>

const Content = ({ id, colorClass }: { id: string; colorClass: string }) => {
  return (
    <SplitPanel className={clx('flex items-center justify-center', colorClass)}>
      <div className="font-semibold text-lg text-white">{id}</div>
    </SplitPanel>
  )
}

export const Default: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split snap>
        <SplitPane>
          <Content id="1" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-secondary" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split vertical>
        <SplitPane>
          <Content id="1" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-secondary" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const HideSeparator: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split separator={false}>
        <SplitPane>
          <Content id="1" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-secondary" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const ThreeSplitPanels: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split>
        <SplitPane>
          <Content id="1" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="3" colorClass="bg-destructive" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const WithDefaultSizes: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split defaultSizes={[100, 200, 300]}>
        <SplitPane>
          <Content id="1 (100px)" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Content id="2 (200px)" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="3 (300px)" colorClass="bg-destructive" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const PercentageLayout: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split proportionalLayout defaultSizes={[25, 50, 25]}>
        <SplitPane>
          <Content id="1 (25%)" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Content id="2 (50%)" colorClass="bg-accent" />
        </SplitPane>
        <SplitPane>
          <Content id="3 (25%)" colorClass="bg-destructive" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const MinSize: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split minSize={200}>
        <SplitPane>
          <Content id="1 (min 100px)" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-accent" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const Snap: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split snap>
        <SplitPane>
          <Content id="1" colorClass="bg-primary" />
        </SplitPane>
        <SplitPane>
          <Content id="2" colorClass="bg-accent" />
        </SplitPane>
      </Split>
    </div>
  ),
}

export const ResetSizes: Story = {
  render: () => {
    const splitRef = React.useRef<SplitHandle>(null)
    const [sizes, setSizes] = React.useState([25, 75])

    const handleReset = () => {
      if (splitRef.current) {
        splitRef.current.resize([25, 75])
        setSizes([25, 75])
      }
    }

    const handleChange = (newSizes: number[]) => {
      setSizes(newSizes)
    }

    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="w-24 rounded bg-primary px-3 py-1 text-primary-foreground"
            onClick={handleReset}
          >
            Reset
          </button>
          <span className="text-muted-foreground text-sm">
            Current sizes: {JSON.stringify(sizes)}
          </span>
        </div>
        <div className="h-[400px] w-full">
          <Split ref={splitRef} defaultSizes={[25, 75]} proportionalLayout onChange={handleChange}>
            <SplitPane preferredSize="25%">
              <SplitPanel className="flex items-center justify-center bg-primary">
                <div className="font-semibold text-lg text-primary-foreground">Panel 1 (25%)</div>
              </SplitPanel>
            </SplitPane>
            <SplitPane preferredSize="75%">
              <SplitPanel className="flex items-center justify-center bg-accent">
                <div className="font-semibold text-accent-foreground text-lg">Panel 2 (75%)</div>
              </SplitPanel>
            </SplitPane>
          </Split>
        </div>
        <div className="text-muted-foreground text-sm">
          Try resizing the panels and then click "Reset" to restore the original sizes.
        </div>
      </div>
    )
  },
}

export const NestedLayout: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split minSize={100}>
        <SplitPane maxSize={400}>
          <Split vertical>
            <SplitPane minSize={100}>
              <SplitPanel className="flex items-center justify-center bg-primary">
                <div className="font-semibold text-lg text-primary-foreground">Panel 1</div>
              </SplitPanel>
            </SplitPane>
            <SplitPane snap>
              <SplitPanel className="flex items-center justify-center bg-success">
                <div className="font-semibold text-lg text-success-foreground">Panel 2 (Snap)</div>
              </SplitPanel>
            </SplitPane>
            <SplitPane snap>
              <SplitPanel className="flex items-center justify-center bg-warning">
                <div className="font-semibold text-lg text-warning-foreground">Panel 3 (Snap)</div>
              </SplitPanel>
            </SplitPane>
          </Split>
        </SplitPane>
        <SplitPane>
          <SplitPanel className="flex items-center justify-center bg-accent">
            <div className="font-semibold text-accent-foreground text-lg">Panel 4</div>
          </SplitPanel>
        </SplitPane>
      </Split>
    </div>
  ),
}

export const ComplexNested: Story = {
  render: () => (
    <div className="h-[400px] w-full">
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
  ),
}

export const WithCustomSplitPanel: Story = {
  render: () => (
    <div className="h-[400px] w-full">
      <Split snap className="rounded-lg border">
        <SplitPane>
          <SplitPanel className="flex flex-col bg-background p-4">
            <h3 className="mb-2 font-semibold text-lg">Custom SplitPanel</h3>
            <p className="text-muted-foreground">
              This is a custom panel using the SplitPanel component directly.
            </p>
            <div className="mt-4 flex flex-1 items-center justify-center rounded-md bg-muted">
              1
            </div>
          </SplitPanel>
        </SplitPane>
        <SplitPane>
          <SplitPanel asChild>
            <div className="flex flex-col bg-background p-4">
              <h3 className="mb-2 font-semibold text-lg">Using asChild</h3>
              <p className="text-muted-foreground">
                This is a custom panel using the SplitPanel component directly.
              </p>
              <div className="mt-4 flex flex-1 items-center justify-center rounded-md bg-muted">
                2
              </div>
            </div>
          </SplitPanel>
        </SplitPane>
      </Split>
    </div>
  ),
}

export const WithDynamicSizes: Story = {
  render: () => {
    const [sizes, setSizes] = React.useState([25, 50, 25])

    const handleChange = (newSizes: number[]) => {
      setSizes(newSizes)
    }

    return (
      <div className="h-[400px] w-full">
        <div className="mb-4">
          <div className="text-sm">Current sizes: {JSON.stringify(sizes)}</div>
        </div>
        <Split proportionalLayout defaultSizes={sizes} onChange={handleChange} minSize={100}>
          <SplitPane>
            <Content id="1" colorClass="bg-primary" />
          </SplitPane>
          <SplitPane>
            <Content id="2" colorClass="bg-accent" />
          </SplitPane>
          <SplitPane>
            <Content id="3" colorClass="bg-destructive" />
          </SplitPane>
        </Split>
      </div>
    )
  },
}

export const ToggleVisibility: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true)
    const handleToggle = () => {
      setVisible((prev) => !prev)
    }
    return (
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="w-fit rounded bg-primary px-3 py-1 text-primary-foreground text-sm"
          onClick={handleToggle}
        >
          {visible ? 'Hide Panel 2' : 'Show Panel 2'}
        </button>

        <div className="h-[400px] w-full">
          <Split>
            <SplitPane>
              <SplitPanel className="flex items-center justify-center bg-primary">
                <div className="font-semibold text-lg text-primary-foreground">
                  Panel 1 (Always Visible)
                </div>
              </SplitPanel>
            </SplitPane>

            {visible && (
              <SplitPane>
                <SplitPanel className="flex items-center justify-center bg-accent">
                  <div className="font-semibold text-accent-foreground text-lg">
                    Panel 2 (Toggleable)
                  </div>
                </SplitPanel>
              </SplitPane>
            )}
          </Split>
        </div>
      </div>
    )
  },
}

export const ClosablePanes: Story = {
  render: () => {
    const [panes, setPanes] = React.useState([0, 1, 2])

    const addPane = () => {
      setPanes((currentPanes) => {
        const newPaneId = Math.max(...currentPanes, 0) + 1
        return [...currentPanes, newPaneId]
      })
    }

    const removePane = (paneId: number) => {
      setPanes((currentPanes) => {
        return currentPanes.filter((id) => id !== paneId)
      })
    }

    return (
      <div className="flex flex-col gap-4">
        <div>
          <button
            className="rounded bg-primary px-3 py-1 text-primary-foreground"
            type="button"
            onClick={addPane}
          >
            Add Pane
          </button>
        </div>

        <div className="h-[400px] w-full">
          <Split vertical minSize={100}>
            <SplitPane maxSize={400}>
              <Split>
                {panes.length > 0 ? (
                  panes.map((pane) => (
                    <SplitPane key={pane}>
                      <SplitPanel className="relative">
                        <div className="flex h-full items-center justify-center bg-primary">
                          <div className="font-semibold text-lg text-primary-foreground">
                            Panel {pane}
                          </div>
                        </div>
                        <div className="absolute inset-0">
                          <div className="absolute top-2 right-2">
                            <button
                              type="button"
                              className="flex size-6 items-center justify-center rounded-full bg-muted/20 p-0 text-foreground hover:bg-muted/30"
                              onClick={() => removePane(pane)}
                            >
                              <Lucide.XIcon className="size-4" strokeWidth={2} />
                            </button>
                          </div>
                        </div>
                      </SplitPanel>
                    </SplitPane>
                  ))
                ) : (
                  <SplitPane>
                    <SplitPanel className="flex items-center justify-center bg-muted">
                      <div className="text-muted-foreground">
                        No panes. Click "Add Pane" to add one.
                      </div>
                    </SplitPanel>
                  </SplitPane>
                )}
              </Split>
            </SplitPane>
            <SplitPane>
              <SplitPanel className="flex items-center justify-center bg-accent">
                <div className="font-semibold text-accent-foreground text-lg">
                  Bottom Panel (Fixed)
                </div>
              </SplitPanel>
            </SplitPane>
          </Split>
        </div>
      </div>
    )
  },
}
