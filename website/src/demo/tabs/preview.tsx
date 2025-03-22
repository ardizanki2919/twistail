'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from 'twistail-react/tabs'
import { Text } from 'twistail-react/text'

export default function TabsDemo() {
  return (
    <div className="flex w-full max-w-md flex-col items-center justify-center">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Returns</TabsTrigger>
          <TabsTrigger value="tab2">Shipping</TabsTrigger>
        </TabsList>
        <div className="mt-4 ml-2">
          <TabsContent value="tab1">
            <Text size="sm" className="leading-7">
              You have 60 days from the time we&apos;ve shipped your order to return any part of it
              to us for a refund, provided it is still in its original, unused condition: we do not
              accept returns of used items.
            </Text>
          </TabsContent>
          <TabsContent value="tab2">
            <Text size="sm" className="leading-7">
              No return authorization (RMA) is required. If you are within the United States, a
              pre-paid shipping label will be generated. For direct returns, a flat fee of $10 is
              deducted from your return for shipping and processing costs.
            </Text>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
