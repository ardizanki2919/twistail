'use client'

import * as Lucide from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from 'twistail-react/avatar'
import { Button } from 'twistail-react/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'twistail-react/hover-card'
import { getInitials } from 'twistail-utils'

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@riipandi</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex items-center justify-between space-x-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/riipandi.png" />
            <AvatarFallback>{getInitials('Aris Ripandi')}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Aris Ripandi</h4>
            <p className="text-sm">Web artisan and tech enthusiast.</p>
            <div className="flex items-center pt-2">
              <Lucide.CalendarDays className="mr-2 h-4 w-4 opacity-70" strokeWidth={1.5} />
              <span className="text-muted-foreground text-xs">Joined 13 years ago</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
