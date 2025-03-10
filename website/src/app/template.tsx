'use client'

import { RootProvider, type RootProviderProps } from 'fumadocs-ui/provider'
import Script from 'next/script'
import { isDevelopment } from 'std-env'

export default function RootTemplate({ children }: Readonly<React.PropsWithChildren>) {
  const searchOpts: RootProviderProps['search'] = {
    enabled: true,
    options: { type: 'static' },
    links: [
      ['Homepage', '/'],
      ['Documentation', '/docs/ui'],
      ['Changelog', '/docs/ui/changelog'],
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
