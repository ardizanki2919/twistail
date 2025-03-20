import { type VariantProps, tv } from 'tailwind-variants'

const breadcrumbStyles = tv({
  slots: {
    root: [],
    list: 'flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5',
    item: 'inline-flex items-center gap-1.5',
    link: 'transition-colors hover:text-foreground cursor-pointer',
    page: 'font-normal text-foreground',
    separator: '[&>svg]:size-3.5',
    ellipsis: 'flex h-auto w-9 items-center justify-center rounded-sm px-2 py-1',
    ellipsisIcon: 'size-4',
  },
})

type BreadcrumbStyles = VariantProps<typeof breadcrumbStyles>

export { breadcrumbStyles, type BreadcrumbStyles }
