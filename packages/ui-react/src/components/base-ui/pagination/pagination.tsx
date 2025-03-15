import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Slot } from 'radix-ui'
import * as React from 'react'
import { ButtonProps, buttonStyles } from '../button'
import { type PaginationStyles, paginationStyles } from './pagination.css'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  const styles = paginationStyles()
  return <nav aria-label="pagination" className={styles.root({ className })} {...props} />
}

interface PaginationContentProps extends React.ComponentPropsWithoutRef<'ul'>, PaginationStyles {}

const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, variant = 'default', ...props }: PaginationContentProps, forwardedRef) => {
    const styles = paginationStyles({ variant })
    return <ul ref={forwardedRef} className={styles.content({ className })} {...props} />
  }
)

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = paginationStyles()
    return <li ref={forwardedRef} className={styles.item({ className })} {...props} />
  }
)

type PaginationLinkProps = {
  asChild?: boolean
  isActive?: boolean
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>

const PaginationLink = ({
  className,
  asChild,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => {
  const Comp = asChild ? Slot.Root : 'a'
  const styles = buttonStyles({ variant: isActive ? 'outline' : 'ghost' })
  return (
    <Comp
      aria-current={isActive ? 'page' : undefined}
      className={styles.base({ className })}
      {...props}
    />
  )
}

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const styles = paginationStyles()
  return (
    <PaginationLink
      className={styles.previous({ className })}
      aria-label="Go to previous page"
      {...props}
    >
      <ChevronLeft className={styles.previousIcon()} />
      <span>Previous</span>
    </PaginationLink>
  )
}

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => {
  const styles = paginationStyles()
  return (
    <PaginationLink className={styles.next({ className })} aria-label="Go to next page" {...props}>
      <span>Next</span>
      <ChevronRight className={styles.nextIcon()} />
    </PaginationLink>
  )
}

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => {
  const styles = paginationStyles()
  return (
    <span aria-hidden className={styles.ellipsis({ className })} {...props}>
      <MoreHorizontal className={styles.ellipsisIcon()} />
      <span className="sr-only">More pages</span>
    </span>
  )
}

Pagination.displayName = 'Pagination'
PaginationContent.displayName = 'PaginationContent'
PaginationItem.displayName = 'PaginationItem'
PaginationLink.displayName = 'PaginationLink'
PaginationPrevious.displayName = 'PaginationPrevious'
PaginationNext.displayName = 'PaginationNext'
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
