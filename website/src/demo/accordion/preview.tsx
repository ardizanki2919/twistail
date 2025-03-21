import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'twistail-react/accordion'

export default function AccordionDemo() {
  return (
    <Accordion type="single" className="mx-auto w-md" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>In the app</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">Step 1:</span> Tap the
              Inbox icon and then tap Add receipts.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">Step 2:</span> Tap the
              + symbol to attach a photo or PDF of the receipt for our system to match.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Via browser extension</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">Step 1:</span>{' '}
              <span className="underline">Download</span> the browser extension for Chrome or
              Safari. (Firefox support is coming soon.)
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">Step 2:</span> Click
              the extension icon at the top of your browser. Under the Receipts tab, upload an image
              or click Screenshot current tab to automatically attach the receipt to the expense.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>Via email forwarding</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
