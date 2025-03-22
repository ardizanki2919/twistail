import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Badge, type BadgeStyles } from 'twistail-react/badge'
import { clx } from 'twistail-utils'
import Link from '#/app/link'

interface BadgeLinkProps extends React.ComponentPropsWithoutRef<typeof Link>, BadgeStyles {
  external?: boolean
}

const BadgeLink = React.forwardRef<HTMLAnchorElement, BadgeLinkProps>(
  ({ className, variant, external = false, children, ...props }: BadgeLinkProps, forwardedRef) => {
    return (
      <Badge variant={variant} asChild>
        <Link
          ref={forwardedRef}
          className={clx('h-8 px-3 py-1 no-underline', className)}
          newTab={external}
          {...props}
        >
          {children}
          {external ? <Lucide.ExternalLink className="size-3" strokeWidth={2} /> : null}
        </Link>
      </Badge>
    )
  }
)

const Badges = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={clx('inline-flex w-full gap-2', className)} {...props} />
}

Badges.displayName = 'Badges'
BadgeLink.displayName = 'BadgeLink'

export { Badges, BadgeLink }
