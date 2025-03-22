'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'twistail-react/pagination'

// Helper function to render pagination items
const renderPaginationItems = (activeIndex = 2) => {
  const pages = [1, 2, 3, null, 8, 9, 10] // null represents ellipsis

  return (
    <>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page}>
          {page === null ? (
            <PaginationEllipsis />
          ) : (
            <PaginationLink href="#" isActive={page === activeIndex}>
              {page}
            </PaginationLink>
          )}
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </>
  )
}

export default function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>{renderPaginationItems()}</PaginationContent>
    </Pagination>
  )
}
