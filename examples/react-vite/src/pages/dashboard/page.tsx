import * as React from 'react'
import { Button } from 'twistail-react/button'
import { Card } from 'twistail-react/card'
import { Text } from 'twistail-react/text'
import PageShell from '#/layouts/page-shell'

export default function Page() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => setCount((count) => count + 1)

  return (
    <PageShell title="React Application">
      <div className="flex min-h-screen items-center bg-gradient-to-br from-teal-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Logo Section */}
          <div className="mb-12 flex justify-center space-x-8">
            <a
              href="https://vite.dev"
              className="transition-opacity hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/vite.svg" className="h-16 w-16" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              className="transition-opacity hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/react.svg" className="h-16 w-16" alt="React logo" />
            </a>
          </div>

          {/* Content Section */}
          <div className="text-center">
            <h1 className="mb-8 bg-gradient-to-r from-white to-emerald-300 bg-clip-text font-bold text-4xl text-transparent">
              React Application
            </h1>

            <Card className="mx-auto mb-8 flex max-w-xl flex-col items-center justify-center">
              <Button type="button" variant="primary" onClick={handleClick}>
                Count is {count}
              </Button>

              <Text className="mt-4">
                Edit{' '}
                <code className="rounded-sm bg-gray-700 px-2 py-1 text-sm">
                  src/pages/dashboard/page.tsx
                </code>{' '}
                and save to test HMR
              </Text>
            </Card>

            <div className="space-y-2 text-gray-400">
              <Text variant="muted" align="center" weight="medium">
                Click on the Vite and React logos to learn more
              </Text>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
