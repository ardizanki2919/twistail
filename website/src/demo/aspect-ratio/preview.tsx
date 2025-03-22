'use client'

import Image from 'next/image'
import { AspectRatio } from 'twistail-react/aspect-ratio'

export default function AspectRatioDemo() {
  return (
    <div className="w-[480px]">
      <AspectRatio ratio={16 / 9} className="border border-white bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          className="size-full rounded-md object-cover"
          alt="Pict by Alvaro Pinot"
        />
      </AspectRatio>
    </div>
  )
}
