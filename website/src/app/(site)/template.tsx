'use client'

export default function Template({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-black">
      {/* Enhanced gradient background */}
      <div className="-z-10 fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-950 dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10" />
      </div>
      {children}
    </div>
  )
}
