'use client'

import { RootProvider, type RootProviderProps } from 'fumadocs-ui/provider'
import { useTheme } from 'next-themes'
import Script from 'next/script'
import { isDevelopment } from 'std-env'
import { Toaster } from 'twistail-react/toast'
import type { ToasterProps } from 'twistail-react/toast'

export default function RootTemplate({ children }: Readonly<React.PropsWithChildren>) {
  const { theme } = useTheme()

  const searchOpts: RootProviderProps['search'] = {
    enabled: true,
    options: {
      type: 'static',
    },
    links: [
      // Getting Started
      ['Documentation', '/docs'],
      ['Installation', '/docs/installation'],
      ['Theming', '/docs/theming'],
      ['Changelog', '/docs/changelog'],
      ['Twistail CLI', '/docs/cli'],
      // Components
      ['Accordion', '/docs/components/accordion'],
      ['Avatar', '/docs/components/avatar'],
      ['Badge', '/docs/components/badge'],
      ['Button', '/docs/components/button'],
      ['Calendar', '/docs/components/calendar'],
      ['Callout', '/docs/components/callout'],
      ['Card', '/docs/components/card'],
      ['Checkbox', '/docs/components/checkbox'],
      ['Datetime Picker', '/docs/components/datetime-picker'],
      ['Dialog', '/docs/components/dialog'],
      ['Divider', '/docs/components/divider'],
      ['Drawer', '/docs/components/drawer'],
      ['Dropdown Menu', '/docs/components/dropdown-menu'],
      ['Heading', '/docs/components/heading'],
      ['Hover Card', '/docs/components/hover-card'],
      ['Input', '/docs/components/input'],
      ['Label', '/docs/components/label'],
      ['Listbox', '/docs/components/listbox'],
      ['Pagination', '/docs/components/pagination'],
      ['Popover', '/docs/components/popover'],
      ['Radio Card Group', '/docs/components/radio-card-group'],
      ['Radio Group', '/docs/components/radio-group'],
      ['Scroll Area', '/docs/components/scroll-area'],
      ['Select', '/docs/components/select'],
      ['Skeleton', '/docs/components/skeleton'],
      ['Slider', '/docs/components/slider'],
      ['Switch', '/docs/components/switch'],
      ['Tab Navigation', '/docs/components/tab-navigation'],
      ['Table', '/docs/components/table'],
      ['Tabs', '/docs/components/tabs'],
      ['Textarea', '/docs/components/textarea'],
      ['Toast', '/docs/components/toast'],
      ['Toggle', '/docs/components/toggle'],
      ['Tooltip', '/docs/components/tooltip'],
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
      <RootProvider search={searchOpts} theme={{ enabled: false }}>
        {children}
      </RootProvider>
      <Toaster theme={theme as ToasterProps['theme']} />
    </>
  )
}
