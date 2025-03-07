// Tremor Input [v1.0.5]

import { RiEyeFill, RiEyeOffFill, RiSearchLine } from '@remixicon/react'
import React from 'react'
import { clx, focusRing } from 'twistail-react/utils'
import { type InputStyles, inputStyles } from './input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputStyles {
  inputClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputClassName, hasError, enableStepper = true, type, ...props }: InputProps,
    forwardedRef
  ) => {
    const [typeState, setTypeState] = React.useState(type)

    const isPassword = type === 'password'
    const isSearch = type === 'search'

    return (
      <div className={clx('relative w-full', className)} tremor-id="tremor-raw">
        <input
          ref={forwardedRef}
          type={isPassword ? typeState : type}
          className={clx(
            inputStyles({ hasError, enableStepper }),
            {
              'pl-8': isSearch,
              'pr-10': isPassword,
            },
            inputClassName
          )}
          {...props}
        />
        {isSearch && (
          <div
            className={clx(
              // base
              'pointer-events-none absolute bottom-0 left-2 flex h-full items-center justify-center',
              // text color
              'text-slate-400 dark:text-slate-600'
            )}
          >
            <RiSearchLine className="size-[1.125rem] shrink-0" aria-hidden="true" />
          </div>
        )}
        {isPassword && (
          <div
            className={clx(
              'absolute right-0 bottom-0 flex h-full items-center justify-center px-3'
            )}
          >
            <button
              aria-label="Change password visibility"
              className={clx(
                // base
                'h-fit w-fit rounded-sm outline-none transition-all',
                // text
                'text-slate-400 dark:text-slate-600',
                // hover
                'hover:text-slate-500 hover:dark:text-slate-500',
                focusRing
              )}
              type="button"
              onClick={() => {
                setTypeState(typeState === 'password' ? 'text' : 'password')
              }}
            >
              <span className="sr-only">
                {typeState === 'password' ? 'Show password' : 'Hide password'}
              </span>
              {typeState === 'password' ? (
                <RiEyeFill aria-hidden="true" className="size-5 shrink-0" />
              ) : (
                <RiEyeOffFill aria-hidden="true" className="size-5 shrink-0" />
              )}
            </button>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input, type InputProps }
