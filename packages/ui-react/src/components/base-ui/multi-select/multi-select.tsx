import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Badge } from '#/components/base-ui/badge'
import { Command, CommandEmpty, CommandGroup, CommandSeparator } from '#/components/base-ui/command'
import { CommandInput, CommandItem, CommandList } from '#/components/base-ui/command'
import { Divider } from '#/components/base-ui/divider'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/base-ui/popover'
import { ScrollArea } from '#/components/base-ui/scroll-area'
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
    forwardedRef
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue)
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    const [highlightedIndex, setHighlightedIndex] = React.useState<number>(-1)
    const styles = multiSelectStyles({ hasError })

    // Filter options based on input value
    const filteredOptions = React.useMemo(() => {
      if (!inputValue) return options

      const lowerCaseInput = inputValue.toLowerCase()
      return options.filter((option) => option.label.toLowerCase().includes(lowerCaseInput))
    }, [options, inputValue])

    // Reset highlighted index when filtered options change
    React.useEffect(() => {
      setHighlightedIndex(filteredOptions.length > 0 ? 0 : -1)
    }, [filteredOptions])

    // Reset highlighted index when popover closes
    React.useEffect(() => {
      if (!isPopoverOpen) {
        setHighlightedIndex(-1)
      } else if (filteredOptions.length > 0) {
        setHighlightedIndex(0)
      }
    }, [isPopoverOpen, filteredOptions.length])

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          if (filteredOptions.length > 0) {
            setHighlightedIndex((prevIndex) =>
              prevIndex < filteredOptions.length - 1 + (showSelectAll ? 1 : 0) ? prevIndex + 1 : 0
            )
          }
          break

        case 'ArrowUp':
          event.preventDefault()
          if (filteredOptions.length > 0) {
            setHighlightedIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : filteredOptions.length - 1 + (showSelectAll ? 1 : 0)
            )
          }
          break

        case 'Enter':
          event.preventDefault()
          if (highlightedIndex === 0 && showSelectAll) {
            toggleAll(/* Handle "Select All" option */)
          } else if (highlightedIndex >= 0) {
            // Adjust index to account for "Select All" option
            const optionIndex = showSelectAll ? highlightedIndex - 1 : highlightedIndex
            if (optionIndex >= 0 && optionIndex < filteredOptions.length) {
              toggleOption(filteredOptions[optionIndex].value)
            }
          }
          break

        case 'Escape':
          setIsPopoverOpen(false)
          break

        case 'Backspace':
          if (!event.currentTarget.value) {
            const newSelectedValues = [...selectedValues]
            newSelectedValues.pop()
            setSelectedValues(newSelectedValues)
            onValueChange(newSelectedValues)
          }
          break
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

    // Reset input when popover closes
    React.useEffect(() => {
      if (!isPopoverOpen) {
        setInputValue('')
      }
    }, [isPopoverOpen])

    // Determine whether the "Select All" button must be displayed
    const showSelectAll = inputValue === ''
    const totalOptions = showSelectAll ? filteredOptions.length + 1 : filteredOptions.length

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
        <PopoverTrigger asChild>
          <button
            ref={forwardedRef}
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
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search..."
              onKeyDown={handleInputKeyDown}
              onValueChange={setInputValue}
              className={styles.commandInput()}
              value={inputValue}
            />
            <CommandList className={styles.commandList()}>
              <CommandEmpty className={styles.commandEmpty()}>No results found.</CommandEmpty>
              <ScrollArea className={styles.commandGroupWrapper()}>
                <CommandGroup className={styles.commandGroup()}>
                  {showSelectAll && (
                    <div
                      className={styles.checkboxItem({
                        className: highlightedIndex === 0 ? 'bg-accent' : '',
                      })}
                      onClick={toggleAll}
                      onMouseEnter={() => setHighlightedIndex(0)}
                      aria-selected={highlightedIndex === 0}
                      tabIndex={highlightedIndex === 0 ? 0 : -1}
                    >
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
                      <span>Select All ({totalOptions})</span>
                    </div>
                  )}

                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => {
                      const isSelected = selectedValues.includes(option.value)
                      const IconComponent = option.icon
                      // Adjust index for highlighting based on whether "Select All" is shown
                      const adjustedIndex = showSelectAll ? index + 1 : index
                      const isHighlighted = highlightedIndex === adjustedIndex

                      return (
                        <div
                          key={option.value}
                          className={styles.checkboxItem({
                            className: isHighlighted ? 'bg-accent' : '',
                          })}
                          onClick={() => toggleOption(option.value)}
                          onMouseEnter={() => setHighlightedIndex(adjustedIndex)}
                          aria-selected={isHighlighted}
                          tabIndex={isHighlighted ? 0 : -1}
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
                    })
                  ) : (
                    <div className={styles.commandEmpty()}>No results found.</div>
                  )}
                </CommandGroup>
              </ScrollArea>
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
