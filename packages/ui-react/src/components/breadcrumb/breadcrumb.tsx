import * as Lucide from 'lucide-react'
import { Slot } from 'radix-ui'
import * as React from 'react'
import { type BreadcrumbStyles, breadcrumbStyles } from './breadcrumb.css'

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'>, BreadcrumbStyles {
  separator?: React.ReactNode
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ separator, className, ...props }: BreadcrumbProps, forwardedRef) => {
    const styles = breadcrumbStyles()
    return (
      <nav
        ref={forwardedRef}
        aria-label="breadcrumb"
        className={styles.root({ className })}
        {...props}
      />
    )
  }
)

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = breadcrumbStyles()
    return <ol ref={forwardedRef} className={styles.list({ className })} {...props} />
  }
)

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = breadcrumbStyles()
    return <li ref={forwardedRef} className={styles.item({ className })} {...props} />
  }
)

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, forwardedRef) => {
  const Comp = asChild ? Slot.Root : 'a'
  const styles = breadcrumbStyles()
  return <Comp ref={forwardedRef} className={styles.link({ className })} {...props} />
})

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = breadcrumbStyles()
    return (
      <span
        ref={forwardedRef}
        aria-disabled="true"
        aria-current="page"
        className={styles.page({ className })}
        {...props}
      />
    )
  }
)

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => {
  const styles = breadcrumbStyles()
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={styles.separator({ className })}
      {...props}
    >
      {children ?? <Lucide.ChevronRight />}
    </li>
  )
}

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => {
  const styles = breadcrumbStyles()
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={styles.ellipsis({ className })}
      {...props}
    >
      <Lucide.MoreHorizontal className={styles.ellipsisIcon()} />
      <span className="sr-only">More</span>
    </span>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
BreadcrumbList.displayName = 'BreadcrumbList'
BreadcrumbItem.displayName = 'BreadcrumbItem'
BreadcrumbLink.displayName = 'BreadcrumbLink'
BreadcrumbPage.displayName = 'BreadcrumbPage'
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
