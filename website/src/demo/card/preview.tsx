'use client'

import { Card } from 'twistail-react/card'
import { Heading } from 'twistail-react/heading'
import { Text } from 'twistail-react/text'

export default function CardDemo() {
  return (
    <Card className="max-w-lg">
      <Heading level="h5">Perseverance Rover&apos;s Latest Mars Discovery</Heading>
      <Text className="mt-2 leading-6" size="sm">
        NASA&apos;s Perseverance Rover has made an exciting discovery on Mars, finding evidence of
        ancient microbial life in rock samples. This marks a significant step forward in our
        understanding of the Red Planet&apos;s history and the search for extraterrestrial life.
      </Text>
    </Card>
  )
}
