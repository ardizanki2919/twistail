import { focusInput, hasErrorInput } from '@twistail/react/utils'
import { type VariantProps, tv } from 'tailwind-variants'

const selectNativeStyles = tv({
  base: [
    // base
    'peer w-full cursor-pointer appearance-none truncate rounded-md border py-2 pl-3 pr-7 shadow-sm outline-none transition-all sm:text-sm',
    // background color
    'bg-white dark:bg-slate-950',
    // border color
    'border-slate-300 dark:border-slate-800',
    // text color
    'text-slate-900 dark:text-slate-50',
    // placeholder color
    'placeholder-slate-400 dark:placeholder-slate-500',
    // hover
    'hover:bg-slate-50 hover:dark:bg-slate-950/50',
    // disabled
    'disabled:pointer-events-none',
    'disabled:bg-slate-100 disabled:text-slate-400',
    'disabled:dark:border-slate-700 disabled:dark:bg-slate-800 disabled:dark:text-slate-500',
    // focus
    focusInput,
    // invalid (optional)
    // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
  },
})

type SelectNativeStyles = VariantProps<typeof selectNativeStyles>

export { selectNativeStyles, type SelectNativeStyles }
