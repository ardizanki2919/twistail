'use client'

import Footer from './footer'
import { NavBar } from './navbar'

export default function Template({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="dark:bg-gray-900">
      <NavBar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}
