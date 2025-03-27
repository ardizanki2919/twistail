'use client'

import { RootProvider, type RootProviderProps } from 'fumadocs-ui/provider'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { isDevelopment } from 'std-env'
import { Toaster } from 'twistail-react/toast'
import type { ToasterProps } from 'twistail-react/toast'

const SearchDialog = dynamic(() => import('#/components/search-dialog'))

export default function RootTemplate({ children }: Readonly<React.PropsWithChildren>) {
  const { theme } = useTheme()

  const searchOpts: RootProviderProps['search'] = {
    enabled: true,
    options: { type: 'static' },
    SearchDialog,
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
