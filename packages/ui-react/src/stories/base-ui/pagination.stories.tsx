import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, PaginationContent, PaginationEllipsis } from '#/components'
import { PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '#/components'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Base Components/Pagination',
  tags: ['status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

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

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>{renderPaginationItems()}</PaginationContent>
    </Pagination>
  ),
}

export const Boxed: Story = {
  render: () => (
    <Pagination>
      <PaginationContent variant="boxed">{renderPaginationItems()}</PaginationContent>
    </Pagination>
  ),
}

export const WithCounter: Story = {
  render: () => (
    <Pagination className="flex w-[600px] items-center justify-between">
      <p className="hidden font-medium text-sm md:block">Showing 2 of 25</p>
      <PaginationContent>
        {renderPaginationItems(2).props.children.slice(1, -1)}{' '}
        {/* Remove Previous and Next buttons */}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
