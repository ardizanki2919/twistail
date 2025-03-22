'use client'

import { Text } from 'twistail-react/text'

export default function TextDemo() {
  return (
    <div className="flex w-full flex-col justify-center gap-4">
      <Text align="center" size="xs">
        Extra Small Text
      </Text>
      <Text align="center" size="sm">
        Small Text
      </Text>
      <Text align="center" size="md">
        Medium Text
      </Text>
      <Text align="center" size="lg">
        Large Text
      </Text>
      <Text align="center" size="xl">
        Extra Large Text
      </Text>
      <Text align="center" size="2xl">
        2XL Text
      </Text>
    </div>
  )
}
