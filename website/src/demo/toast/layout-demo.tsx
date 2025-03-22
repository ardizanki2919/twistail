import { Toaster } from 'twistail-react/toast'

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
