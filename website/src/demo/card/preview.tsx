'use client'

import { Button } from 'twistail-react/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'twistail-react/card'
import { Text } from 'twistail-react/text'

export default function CardDemo() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader spacing="compact">
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>This card uses compact spacing for all sections</CardDescription>
      </CardHeader>
      <CardDivider spacing="compact" />
      <CardContent spacing="compact">
        <Text size="sm" className="leading-relaxed">
          The compact spacing variant reduces padding in all card sections, making it more suitable
          for dense UIs or when space is limited.
        </Text>
      </CardContent>
      <CardDivider spacing="compact" />
      <CardFooter spacing="compact">
        <Button variant="outline" size="sm" className="w-full">
          Close
        </Button>
        <Button size="sm" className="w-full">
          I Agree
        </Button>
      </CardFooter>
    </Card>
  )
}
