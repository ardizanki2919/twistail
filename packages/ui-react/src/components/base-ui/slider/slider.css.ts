import { type VariantProps, tv } from 'tailwind-variants'

const sliderStyles = tv({
  slots: {
    root: [
      // base
      'relative flex cursor-pointer touch-none select-none',
      // orientation
      "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
      // disabled
      'data-[disabled]:pointer-events-none',
    ],
    track: [
      // base
      'relative grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800',
      // orientation
      "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
      "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
    ],
    range: [
      // base
      'absolute rounded-full bg-blue-500 dark:bg-blue-500',
      // orientation
      "data-[orientation='horizontal']:h-full",
      "data-[orientation='vertical']:w-full",
      // disabled
      'data-[disabled]:bg-gray-300 dark:data-[disabled]:bg-gray-700',
    ],
    thumb: [
      // base
      'block size-[17px] shrink-0 rounded-full border shadow-xs transition-all',
      // boder color
      'border-gray-400 dark:border-gray-500',
      // background color
      'bg-white',
      // disabled
      'data-[disabled]:pointer-events-none data-[disabled]:bg-gray-200 dark:data-[disabled]:border-gray-800 dark:data-[disabled]:bg-gray-600',
      'outline-0 outline-blue-500 outline-offset-2 focus-visible:outline-2 dark:outline-blue-500' /* focusRing */,
      'outline-offset-0',
    ],
  },
})

type SliderStyles = VariantProps<typeof sliderStyles>

export { sliderStyles, type SliderStyles }
