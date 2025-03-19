import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Badge } from '#/components/base-ui/badge'
import { Command, CommandEmpty, CommandGroup, CommandSeparator } from '#/components/base-ui/command'
import { CommandInput, CommandItem, CommandList } from '#/components/base-ui/command'
import { Divider } from '#/components/base-ui/divider'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/base-ui/popover'
import { type MultiSelectStyles, multiSelectStyles } from './multi-select.css'

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    MultiSelectStyles {
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  onValueChange: (value: string[]) => void
  defaultValue?: string[]
  placeholder?: string
  maxCount?: number
  modalPopover?: boolean
  asChild?: boolean
  className?: string
}

const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      onValueChange,
      hasError,
      defaultValue = [],
      placeholder = 'Select options',
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const styles = multiSelectStyles({ hasError })

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setIsPopoverOpen(true)
      } else if (event.key === 'Backspace' && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues]
        newSelectedValues.pop()
        setSelectedValues(newSelectedValues)
        onValueChange(newSelectedValues)
      }
    }

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter((value) => value !== option)
        : [...selectedValues, option]
      setSelectedValues(newSelectedValues)
      onValueChange(newSelectedValues)
    }

    const handleClear = () => {
      setSelectedValues([])
      onValueChange([])
    }

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev)
    }

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount)
      setSelectedValues(newSelectedValues)
      onValueChange(newSelectedValues)
    }

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear()
      } else {
        const allValues = options.map((option) => option.value)
        setSelectedValues(allValues)
        onValueChange(allValues)
      }
    }

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            onClick={handleTogglePopover}
            className={styles.trigger({ className })}
            {...props}
          >
            {selectedValues.length > 0 ? (
              <div className={styles.triggerWrapper()}>
                <div className={styles.badgeWrapper()}>
                  {selectedValues.slice(0, maxCount).map((value) => {
                    const option = options.find((o) => o.value === value)
                    const IconComponent = option?.icon
                    return (
                      <Badge key={value} className={styles.badge()}>
                        {IconComponent && <IconComponent className="mr-1 size-4" />}
                        {option?.label}
                        <Lucide.XCircle
                          className={styles.badgeRemoveIcon()}
                          onClick={(event) => {
                            event.stopPropagation()
                            toggleOption(value)
                          }}
                        />
                      </Badge>
                    )
                  })}
                  {selectedValues.length > maxCount && (
                    <Badge className={styles.badge()}>
                      {`+ ${selectedValues.length - maxCount} more`}
                      <Lucide.XCircle
                        className={styles.badgeRemoveIcon()}
                        onClick={(event) => {
                          event.stopPropagation()
                          clearExtraOptions()
                        }}
                      />
                    </Badge>
                  )}
                </div>
                <div className={styles.triggerActions()}>
                  <Lucide.XIcon
                    className={styles.clearIcon()}
                    onClick={(event) => {
                      event.stopPropagation()
                      handleClear()
                    }}
                  />
                  <Divider orientation="vertical" className={styles.verticalDivider()} />
                  <Lucide.ChevronDown className={styles.chevronIcon()} />
                </div>
              </div>
            ) : (
              <div className={styles.placeholderWrapper()}>
                <span className={styles.placeholderText()}>{placeholder}</span>
                <Lucide.ChevronDown className={styles.chevronIcon()} />
              </div>
            )}
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={styles.content()}
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandInput
              placeholder="Search..."
              onKeyDown={handleInputKeyDown}
              className={styles.commandInput()}
            />
            <CommandList>
              <CommandEmpty className={styles.commandEmpty()}>No results found.</CommandEmpty>
              <CommandGroup className={styles.commandGroup()}>
                <div className={styles.checkboxItem()} onClick={toggleAll}>
                  <span className={styles.checkboxItemIndicator()}>
                    {selectedValues.length === options.length ? (
                      <Lucide.Check
                        className={styles.checkboxItemIndicatorIcon()}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className={styles.checkboxItemEmptyIndicator()} />
                    )}
                  </span>
                  <span>Select All</span>
                </div>

                {options.map((option) => {
                  const isSelected = selectedValues.includes(option.value)
                  const IconComponent = option.icon

                  return (
                    <div
                      key={option.value}
                      className={styles.checkboxItem()}
                      onClick={() => toggleOption(option.value)}
                    >
                      <span className={styles.checkboxItemIndicator()}>
                        {isSelected ? (
                          <Lucide.Check
                            className={styles.checkboxItemIndicatorIcon()}
                            aria-hidden="true"
                          />
                        ) : (
                          <div className={styles.checkboxItemEmptyIndicator()} />
                        )}
                      </span>
                      {IconComponent && <IconComponent className={styles.icon()} />}
                      <span className="truncate">{option.label}</span>
                    </div>
                  )
                })}
              </CommandGroup>
              <CommandSeparator className={styles.commandSeparator()} />
              <CommandGroup>
                <div className={styles.actionButtonsWrapper()}>
                  {selectedValues.length > 0 && (
                    <>
                      <CommandItem onSelect={handleClear} className={styles.actionItem()}>
                        Clear
                      </CommandItem>
                      <Divider orientation="vertical" className={styles.verticalDivider()} />
                    </>
                  )}
                  <CommandItem
                    onSelect={() => setIsPopoverOpen(false)}
                    className={styles.actionItem()}
                  >
                    Close
                  </CommandItem>
                </div>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)

MultiSelect.displayName = 'MultiSelect'

export { MultiSelect }
