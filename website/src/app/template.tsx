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
      ['Documentation', '/docs'],
      ['Installation', '/docs/installation'],
      ['Styling', '/docs/styling'],
      ['Changelog', '/docs/changelog'],
      ['Twistail CLI', '/docs/cli'],
      // Components
      ['Accordion', '/docs/components/base/accordion'],
      ['Avatar', '/docs/components/base/avatar'],
      ['Badge', '/docs/components/base/badge'],
      ['Button', '/docs/components/base/button'],
      ['Calendar', '/docs/components/base/calendar'],
      ['Callout', '/docs/components/base/callout'],
      ['Card', '/docs/components/base/card'],
      ['Checkbox', '/docs/components/base/checkbox'],
      ['Date Picker', '/docs/components/base/date-picker'],
      ['Date Range Picker', '/docs/components/base/date-range-picker'],
      ['Dialog', '/docs/components/base/dialog'],
      ['Divider', '/docs/components/base/divider'],
      ['Drawer', '/docs/components/base/drawer'],
      ['Dropdown Menu', '/docs/components/base/dropdown-menu'],
      ['Heading', '/docs/components/base/heading'],
      ['Hover Card', '/docs/components/base/hover-card'],
      ['Input', '/docs/components/base/input'],
      ['Label', '/docs/components/base/label'],
      ['Listbox', '/docs/components/base/listbox'],
      ['Pagination', '/docs/components/base/pagination'],
      ['Popover', '/docs/components/base/popover'],
      ['Radio Card Group', '/docs/components/base/radio-card-group'],
      ['Radio Group', '/docs/components/base/radio-group'],
      ['Scroll Area', '/docs/components/base/scroll-area'],
      ['Select', '/docs/components/base/select'],
      ['Skeleton', '/docs/components/base/skeleton'],
      ['Slider', '/docs/components/base/slider'],
      ['Switch', '/docs/components/base/switch'],
      ['Tab Navigation', '/docs/components/base/tab-navigation'],
      ['Table', '/docs/components/base/table'],
      ['Tabs', '/docs/components/base/tabs'],
      ['Textarea', '/docs/components/base/textarea'],
      ['Toast', '/docs/components/base/toast'],
      ['Toggle', '/docs/components/base/toggle'],
      ['Tooltip', '/docs/components/base/tooltip'],
      // Contributing
      ['Contributing Guidelines', '/docs/contributing-guidelines'],
      ['Code of Conduct', '/docs/code-of-conduct'],
      ['Contributors', '/docs/contributors'],
    ],
  }

  const umamiScriptUrl = 'https://cloud.umami.is/script.js'
  const umamiSiteId = 'f80ebe9c-33ea-4162-8169-fa11ef9c5ca6'

  return (
    <>
      {isDevelopment ? null : (
        <Script strategy="lazyOnload" src={umamiScriptUrl} data-website-id={umamiSiteId} defer />
      )}
      <RootProvider
        search={searchOpts}
        theme={{ enabled: true, attribute: ['data-theme', 'class'] }}
      >
        {children}
      </RootProvider>
    </>
  )
}
