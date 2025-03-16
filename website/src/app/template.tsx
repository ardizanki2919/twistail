'use client'

import { RootProvider, type RootProviderProps } from 'fumadocs-ui/provider'
import Script from 'next/script'
import { isDevelopment } from 'std-env'

export default function RootTemplate({ children }: Readonly<React.PropsWithChildren>) {
  const searchOpts: RootProviderProps['search'] = {
    enabled: true,
    options: {
      type: 'static',
    },
    links: [
      // Getting Started
      ['Documentation', '/docs/ui'],
      ['Installation', '/docs/ui/installation'],
      ['Theming', '/docs/ui/theming'],
      ['Changelog', '/docs/ui/changelog'],
      ['Twistail CLI', '/docs/cli'],
      ['FAQs', '/docs/ui/faqs'],
      // Components
      ['Accordion', '/docs/ui/components/base/accordion'],
      ['Avatar', '/docs/ui/components/base/avatar'],
      ['Badge', '/docs/ui/components/base/badge'],
      ['Button', '/docs/ui/components/base/button'],
      ['Calendar', '/docs/ui/components/base/calendar'],
      ['Callout', '/docs/ui/components/base/callout'],
      ['Card', '/docs/ui/components/base/card'],
      ['Checkbox', '/docs/ui/components/base/checkbox'],
      ['Date Picker', '/docs/ui/components/base/date-picker'],
      ['Date Range Picker', '/docs/ui/components/base/date-range-picker'],
      ['Dialog', '/docs/ui/components/base/dialog'],
      ['Divider', '/docs/ui/components/base/divider'],
      ['Drawer', '/docs/ui/components/base/drawer'],
      ['Dropdown Menu', '/docs/ui/components/base/dropdown-menu'],
      ['Heading', '/docs/ui/components/base/heading'],
      ['Hover Card', '/docs/ui/components/base/hover-card'],
      ['Input', '/docs/ui/components/base/input'],
      ['Label', '/docs/ui/components/base/label'],
      ['Listbox', '/docs/ui/components/base/listbox'],
      ['Pagination', '/docs/ui/components/base/pagination'],
      ['Popover', '/docs/ui/components/base/popover'],
      ['Radio Card Group', '/docs/ui/components/base/radio-card-group'],
      ['Radio Group', '/docs/ui/components/base/radio-group'],
      ['Scroll Area', '/docs/ui/components/base/scroll-area'],
      ['Select', '/docs/ui/components/base/select'],
      ['Skeleton', '/docs/ui/components/base/skeleton'],
      ['Slider', '/docs/ui/components/base/slider'],
      ['Switch', '/docs/ui/components/base/switch'],
      ['Tab Navigation', '/docs/ui/components/base/tab-navigation'],
      ['Table', '/docs/ui/components/base/table'],
      ['Tabs', '/docs/ui/components/base/tabs'],
      ['Textarea', '/docs/ui/components/base/textarea'],
      ['Toast', '/docs/ui/components/base/toast'],
      ['Toggle', '/docs/ui/components/base/toggle'],
      ['Tooltip', '/docs/ui/components/base/tooltip'],
      // Contributing
      ['Contributing Guidelines', '/docs/ui/contributing-guidelines'],
      ['Code of Conduct', '/docs/ui/code-of-conduct'],
      ['Contributors', '/docs/ui/contributors'],
    ],
  }

  const umamiScriptUrl = 'https://cloud.umami.is/script.js'
  const umamiSiteId = 'f80ebe9c-33ea-4162-8169-fa11ef9c5ca6'

  return (
    <>
      {isDevelopment ? null : (
        <Script strategy="lazyOnload" src={umamiScriptUrl} data-website-id={umamiSiteId} defer />
      )}
      <RootProvider search={searchOpts}>{children}</RootProvider>
    </>
  )
}
