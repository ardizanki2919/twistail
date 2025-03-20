import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Command, CommandEmpty, CommandGroup, CommandItem } from '#/components/command'
import { CommandInput, CommandList, CommandSeparator } from '#/components/command'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/popover'
import { ScrollArea } from '#/components/scroll-area'
import { type ComboboxStyles, comboboxStyles } from './combobox.css'

interface ComboboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ComboboxStyles {
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
    disabled?: boolean
  }[]
  onValueChange: (value: string) => void
  defaultValue?: string
  placeholder?: string
  modalPopover?: boolean
  asChild?: boolean
  className?: string
  searchPlaceholder?: string
  emptyMessage?: string
}

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      onValueChange,
      hasError,
      defaultValue = '',
      placeholder = 'Select option',
      modalPopover = false,
      asChild = false,
      className,
      searchPlaceholder = 'Search...',
      emptyMessage = 'No results found.',
      ...props
    },
    forwardedRef
  ) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(defaultValue)
    const [inputValue, setInputValue] = React.useState('')
    const styles = comboboxStyles({ hasError })

    // Filter options based on input value
    const filteredOptions = React.useMemo(() => {
      if (!inputValue) return options

      const lowerCaseInput = inputValue.toLowerCase()
      return options.filter((option) => option.label.toLowerCase().includes(lowerCaseInput))
    }, [options, inputValue])

    // Reset input when popover closes
    React.useEffect(() => {
      if (!open) {
        setInputValue('')
      }
    }, [open])

    // Update parent component when value changes
    React.useEffect(() => {
      onValueChange(value)
    }, [value, onValueChange])

    const handleSelect = (currentValue: string) => {
      // Check if the selected option is disabled
      const selectedOption = options.find((option) => option.value === currentValue)
      if (selectedOption?.disabled) return

      setValue(currentValue === value ? '' : currentValue)
      setOpen(false)
    }

    return (
      <Popover open={open} onOpenChange={setOpen} modal={modalPopover}>
        <PopoverTrigger asChild={asChild}>
          <button
            ref={forwardedRef}
            aria-expanded={open}
            className={styles.trigger({ className })}
            {...props}
          >
            <div className={styles.triggerWrapper()}>
              {value ? (
                <span className={styles.selectedText()}>
                  {options.find((option) => option.value === value)?.label || placeholder}
                </span>
              ) : (
                <span className={styles.placeholderText()}>{placeholder}</span>
              )}
              <Lucide.ChevronsUpDown className={styles.chevronIcon()} />
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={styles.content()}
          onEscapeKeyDown={() => setOpen(false)}
          sideOffset={4}
        >
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={searchPlaceholder}
              onValueChange={setInputValue}
              className={styles.commandInput()}
              value={inputValue}
            />
            <CommandList className={styles.commandList()}>
              <CommandEmpty className={styles.commandEmpty()}>{emptyMessage}</CommandEmpty>
              <ScrollArea className={styles.scrollArea()}>
                <CommandGroup className={styles.commandGroup()}>
                  {filteredOptions.map((option) => {
                    const isSelected = value === option.value
                    const IconComponent = option.icon
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.value}
                        onSelect={handleSelect}
                        disabled={option.disabled}
                        className={`${styles.commandItem()} ${option.disabled ? styles.commandItemDisabled() : ''}`}
                        data-selected={isSelected}
                      >
                        <div className={styles.commandItemContent()}>
                          {IconComponent && <IconComponent className={styles.icon()} />}
                          <span className="truncate">{option.label}</span>
                        </div>
                        <Lucide.Check
                          className={styles.checkIcon()}
                          style={{ opacity: isSelected ? 1 : 0 }}
                        />
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </ScrollArea>
              {filteredOptions.length > 0 && (
                <div className={styles.footer()}>
                  <CommandSeparator className={styles.commandSeparator()} />
                  <CommandItem onSelect={() => setOpen(false)} className={styles.closeItem()}>
                    Close
                  </CommandItem>
                </div>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

Combobox.displayName = 'Combobox'

export { Combobox }
