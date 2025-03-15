import { type VariantProps, tv } from 'tailwind-variants'

const paginationStyles = tv({
  slots: {
    root: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center',
    item: [],
    link: [],
    previous: 'gap-1 pl-2.5',
    next: 'gap-1 pr-2.5',
    previousIcon: 'size-4 -ml-1 mr-1',
    nextIcon: 'size-4 -mr-1 ml-1',
    ellipsis: 'flex h-9 w-9 items-center justify-center',
    ellipsisIcon: 'size-4',
  },
  variants: {
    variant: {
      default: {
        content: 'gap-1',
      },
      boxed: {
        content: 'gap-1 rounded-lg border border-border p-1',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type PaginationStyles = VariantProps<typeof paginationStyles>

export { paginationStyles, type PaginationStyles }
