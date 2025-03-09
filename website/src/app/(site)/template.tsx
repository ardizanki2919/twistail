'use client'

import Footer from './footer'
import { NavBar } from './navbar'

export default function Template({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="size-full min-h-screen">
      <NavBar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}
