import { type VariantProps, tv } from 'tailwind-variants'

const sliderStyles = tv({
  slots: {
    root: [
      'relative flex cursor-pointer touch-none select-none',
      "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
      'data-[disabled]:pointer-events-none',
    ],
    track: [
      'relative grow overflow-hidden rounded-full bg-muted',
      "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
    ],
    range: [
      'absolute rounded-full bg-primary',
      "data-[orientation='horizontal']:h-full",
      "data-[orientation='vertical']:w-full",
      'data-[disabled]:bg-muted-foreground',
    ],
    thumb: [
      'block size-[17px] shrink-0 rounded-full border shadow-xs transition-all border-input bg-white',
      'data-[disabled]:pointer-events-none data-[disabled]:bg-muted data-[disabled]:border-input',
      'outline-0 outline-primary outline-offset-0 focus-visible:outline-2',
    ],
    tooltip: 'text-xs',
  },
})

type SliderStyles = VariantProps<typeof sliderStyles>

export { sliderStyles, type SliderStyles }
