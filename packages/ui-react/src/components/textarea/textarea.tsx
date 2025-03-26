import * as React from 'react'
import { textareaStyles } from './textarea.css'

interface UseTextAreaProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement | null>
  minHeight?: number
  maxHeight?: number
  triggerAutoSize: string
  autoResize: boolean
}

const useTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
  autoResize = false,
}: UseTextAreaProps) => {
  const [init, setInit] = React.useState(true)

  // biome-ignore lint/correctness/useExhaustiveDependencies: required for creating custom textarea
  React.useEffect(() => {
    // Skip auto-resizing if autoResize is false
    if (!autoResize) return

    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 6
    const textAreaElement = textAreaRef.current
    if (!textAreaElement) return

    if (init) {
      textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`
      if (maxHeight > minHeight) {
        textAreaElement.style.maxHeight = `${maxHeight}px`
      }
      setInit(false)
    }

    textAreaElement.style.height = `${minHeight + offsetBorder}px`
    const scrollHeight = textAreaElement.scrollHeight

    // We then set the height directly, outside of the render loop
    // Trying to set this with state or a ref will product an incorrect value.
    if (scrollHeight > maxHeight) {
      textAreaElement.style.height = `${maxHeight}px`
    } else {
      textAreaElement.style.height = `${scrollHeight + offsetBorder}px`
    }
  }, [init, maxHeight, minHeight, triggerAutoSize, textAreaRef, autoResize])
}

type TextAreaRef = {
  textArea: HTMLTextAreaElement
  focus: () => void
  maxHeight: number
  minHeight: number
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
  maxHeight?: number
  minHeight?: number
  autoResize?: boolean
}

const Textarea = React.forwardRef<TextAreaRef, TextareaProps>(
  (
    {
      className,
      maxHeight = Number.MAX_SAFE_INTEGER,
      minHeight = 52,
      onChange,
      hasError,
      value,
      autoResize = false,
      style,
      ...props
    }: TextareaProps,
    forwardedRef: React.Ref<TextAreaRef>
  ) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const [triggerAutoSize, setTriggerAutoSize] = React.useState('')

    useTextArea({ textAreaRef, triggerAutoSize, maxHeight, minHeight, autoResize })

    React.useImperativeHandle(forwardedRef, () => ({
      textArea: textAreaRef.current as HTMLTextAreaElement,
      focus: () => textAreaRef?.current?.focus(),
      maxHeight,
      minHeight,
    }))

    React.useEffect(() => {
      if (autoResize) {
        setTriggerAutoSize((value as string) || '')
      }
    }, [value, autoResize])

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (autoResize) {
          setTriggerAutoSize(e.target.value)
        }
        onChange?.(e)
      },
      [onChange, autoResize]
    )

    // Combine custom styles with min/max height constraints
    const combinedStyles = {
      ...style,
      minHeight: `${minHeight}px`,
      ...(maxHeight > minHeight ? { maxHeight: `${maxHeight}px` } : {}),
    }

    return (
      <textarea
        ref={textAreaRef}
        className={textareaStyles({ hasError, autoResize, className })}
        onChange={handleChange}
        style={combinedStyles}
        value={value}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, useTextArea }
export type { TextareaProps, TextAreaRef }
