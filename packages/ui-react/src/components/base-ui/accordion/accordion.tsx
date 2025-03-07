// Tremor Accordion [v0.0.1]

import * as AccordionPrimitives from '@radix-ui/react-accordion'
import { RiAddLine } from '@remixicon/react'
import React from 'react'

import { clx } from '@twistail/react/utils'

const Accordion = AccordionPrimitives.Root

Accordion.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={clx(
        // base
        'group flex flex-1 cursor-pointer items-center justify-between py-3 text-left font-medium text-sm leading-none',
        // text color
        'text-slate-900 dark:text-slate-50',
        // disabled
        'data-[disabled]:cursor-default data-[disabled]:text-slate-400 dark:data-[disabled]:text-slate-600',
        //focus
        'focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RiAddLine
        className={clx(
          // base
          'group-data-[state=open]:-rotate-45 size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)]',
          // text color
          'text-slate-400 dark:text-slate-600',
          // disabled
          'group-data-[disabled]:text-slate-300 group-data-[disabled]:dark:text-slate-700'
        )}
        aria-hidden="true"
        focusable="false"
      />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
))

AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={clx(
      'transform-gpu data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open'
    )}
    {...props}
  >
    <div
      className={clx(
        // base
        'overflow-hidden pb-4 text-sm',
        // text color
        'text-slate-700 dark:text-slate-200',
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitives.Content>
))

AccordionContent.displayName = 'AccordionContent'

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={clx(
      // base
      'overflow-hidden border-b first:mt-0',
      // border color
      'border-slate-200 dark:border-slate-800',
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  />
))

AccordionItem.displayName = 'AccordionItem'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
