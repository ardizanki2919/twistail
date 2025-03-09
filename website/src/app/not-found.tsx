'use client'

import * as Lucide from 'lucide-react'
import { useRouter } from 'next/navigation'
import { errorStyles } from '#/styles/error.css'

export default function NotFound() {
  const router = useRouter()
  const styles = errorStyles()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <title>404 Not Found</title>
      <div className={styles.wrapper()}>
        <div className={styles.decorativeGradient()}>
          <div className={styles.gradientInner()}>
            <div className={styles.gradientBg()} />
          </div>
        </div>
        <div className={styles.decorativeCode()}>
          <h2 className={styles.decorativeText()}>404</h2>
        </div>
        <div className={styles.content()}>
          <div className={styles.container()}>
            <p className={styles.errorCode({ class: 'sr-only' })}>404</p>
            <h1 className={styles.title()}>Page not found</h1>
            <p className={styles.description()}>
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className={styles.actions()}>
              <button type="button" onClick={handleBack} className={styles.primaryButton()}>
                <Lucide.CornerUpLeft className="-ml-0.5 mr-1 size-4" strokeWidth={2.4} />
                <span>Go back</span>
              </button>
              <button
                type="button"
                onClick={() => router.push('/')}
                className={styles.secondaryButton()}
              >
                <Lucide.Home className="-ml-0.5 mr-1 size-4" strokeWidth={2.4} />
                <span>Take me back to home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
