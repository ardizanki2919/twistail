'use client'

import { Text } from 'twistail-react/text'
import { Tooltip, TooltipContent, TooltipTrigger } from 'twistail-react/tooltip'

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Text>Show tooltip</Text>
      </TooltipTrigger>
      <TooltipContent content="Are you ready to build something amazing with Twistail?" />
    </Tooltip>
  )
}
