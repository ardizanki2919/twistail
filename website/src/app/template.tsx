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

      // Base UI Components
      ['Accordion', '/docs/components/accordion'],
      ['Alert Dialog', '/docs/components/alert-dialog'],
      ['Aspect Ratio', '/docs/components/aspect-ratio'],
      ['Avatar', '/docs/components/avatar'],
      ['Badge', '/docs/components/badge'],
      ['Blockquote', '/docs/components/blockquote'],
      ['Breadcrumb', '/docs/components/breadcrumb'],
      ['Button', '/docs/components/button'],
      ['Calendar', '/docs/components/calendar'],
      ['Callout', '/docs/components/callout'],
      ['Card', '/docs/components/card'],
      ['Checkbox', '/docs/components/checkbox'],
      ['Collapsible', '/docs/components/collapsible'],
      ['Combobox', '/docs/components/combobox'],
      ['Command', '/docs/components/command'],
      ['Datetime Picker', '/docs/components/datetime-picker'],
      ['Description List', '/docs/components/description-list'],
      ['Dialog', '/docs/components/dialog'],
      ['Divider', '/docs/components/divider'],
      ['Drawer', '/docs/components/drawer'],
      ['Dropdown Menu', '/docs/components/dropdown-menu'],
      ['Form', '/docs/components/form'],
      ['Heading', '/docs/components/heading'],
      ['Hover Card', '/docs/components/hover-card'],
      ['Input', '/docs/components/input'],
      ['Input Pin', '/docs/components/input-pin'],
      ['Kbd', '/docs/components/kbd'],
      ['Label', '/docs/components/label'],
      ['Listbox', '/docs/components/listbox'],
      ['Multi Select', '/docs/components/multi-select'],
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
      ['Text', '/docs/components/text'],
      ['Textarea', '/docs/components/textarea'],
      ['Toast', '/docs/components/toast'],
      ['Toggle', '/docs/components/toggle'],
      ['Tooltip', '/docs/components/tooltip'],

      // Layout Components
      ['Context Menu', '/docs/components/context-menu'],
      ['Menubar', '/docs/components/menubar'],
      ['Navigation Menu', '/docs/components/navigation-menu'],
      ['Sidebar', '/docs/components/sidebar'],
      ['Split Pane', '/docs/components/split-pane'],

      // Visualization Components
      // ['Area Chart', '/docs/components/area-chart'],
      // ['Bar Chart', '/docs/components/bar-chart'],
      // ['Bar List', '/docs/components/bar-list'],
      // ['Category Bar', '/docs/components/category-bar'],
      // ['Combo Chart', '/docs/components/combo-chart'],
      // ['Donut Chart', '/docs/components/donut-chart'],
      // ['Line Chart', '/docs/components/line-chart'],
      // ['Progress Bar', '/docs/components/progress-bar'],
      // ['Progress Circle', '/docs/components/progress-circle'],
      // ['Spark Chart', '/docs/components/spark-chart'],
      ['Tracker', '/docs/components/tracker'],

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
