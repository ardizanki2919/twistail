import { OTPInput, OTPInputContext, OTPInputProps } from 'input-otp'
import * as React from 'react'
import { type InputPinStyles, inputPinStyles } from './input-pin.css'

type InputPinProps = OTPInputProps & InputPinStyles
type InputPinContextValue = Pick<InputPinProps, 'inputSize' | 'hasError'>

const InputPinContext = React.createContext<InputPinContextValue>({
  inputSize: 'md',
  hasError: false,
})

const InputPin = React.forwardRef<React.ComponentRef<typeof OTPInput>, InputPinProps>(
  (
    { className, inputSize = 'md', hasError = false, containerClassName, ...props },
    forwardedRef
  ) => {
    const styles = inputPinStyles({ inputSize, hasError })
    return (
      <InputPinContext.Provider value={{ inputSize, hasError }}>
        <OTPInput
          ref={forwardedRef}
          containerClassName={styles.container({ className: containerClassName })}
          className={styles.input({ className })}
          {...props}
        />
      </InputPinContext.Provider>
    )
  }
)

const InputPinGroup = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, forwardedRef) => {
  const styles = inputPinStyles()
  return <div ref={forwardedRef} className={styles.group({ className })} {...props} />
})

const InputPinSlot = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, forwardedRef) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { inputSize, hasError } = React.useContext(InputPinContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
  const styles = inputPinStyles({ isActive, inputSize, hasError })
  return (
    <div ref={forwardedRef} className={styles.slot({ className })} {...props}>
      {char}
      {hasFakeCaret && (
        <div className={styles.slotCaretContainer()}>
          <div className={styles.slotCaret()} />
        </div>
      )}
    </div>
  )
})

interface InputPinSeparatorProps extends React.ComponentPropsWithoutRef<'div'> {
  innerClassName?: string
  orientation?: 'horizontal' | 'vertical'
}

const InputPinSeparator = React.forwardRef<React.ComponentRef<'div'>, InputPinSeparatorProps>(
  ({ className, innerClassName, orientation = 'horizontal', ...props }, forwardedRef) => {
    const { inputSize } = React.useContext(InputPinContext)
    const styles = inputPinStyles({ inputSize, orientation })
    return (
      <div ref={forwardedRef} className={styles.separator({ className })} {...props}>
        <div className={styles.separatorInner({ className: innerClassName })} />
      </div>
    )
  }
)

InputPin.displayName = 'InputPin'
InputPinGroup.displayName = 'InputPinGroup'
InputPinSlot.displayName = 'InputPinSlot'
InputPinSeparator.displayName = 'InputPinSeparator'

export { InputPin, InputPinGroup, InputPinSlot, InputPinSeparator }
