import { type VariantProps, tv } from 'tailwind-variants'
import { focusInput, hasErrorInput } from 'twistail-react/utils'

const inputStyles = tv({
  base: [
    // base
    'relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-sm outline-none transition sm:text-sm',
    // border color
    'border-slate-300 dark:border-slate-800',
    // text color
    'text-slate-900 dark:text-slate-50',
    // placeholder color
    'placeholder-slate-400 dark:placeholder-slate-500',
    // background color
    'bg-white dark:bg-slate-950',
    // disabled
    'disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400',
    'disabled:dark:border-slate-700 disabled:dark:bg-slate-800 disabled:dark:text-slate-500',
    // file
    [
      'file:-my-2 file:-ml-2.5 file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:px-3 file:py-2 file:outline-none focus:outline-none disabled:pointer-events-none file:disabled:pointer-events-none',
      'file:border-solid file:border-slate-300 file:bg-slate-50 file:text-slate-500 file:hover:bg-slate-100 file:dark:border-slate-800 file:dark:bg-slate-950 file:hover:dark:bg-slate-900/20 file:disabled:dark:border-slate-700',
      'file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]',
      'file:disabled:bg-slate-100 file:disabled:text-slate-500 file:disabled:dark:bg-slate-800',
    ],
    // focus
    focusInput,
    // invalid (optional)
    // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
    // remove search cancel button (optional)
    '[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden',
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
    // number input
    enableStepper: {
      false:
        '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
    },
  },
})

type InputStyles = VariantProps<typeof inputStyles>

export { inputStyles, type InputStyles }
