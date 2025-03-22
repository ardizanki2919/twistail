'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from 'twistail-react/table'

const data: Array<{
  id: number
  name: string
  sales: string
  region: string
  status: string
  deltaType: string
  hours: number
}> = [
  {
    id: 1,
    name: 'Peter Doe',
    sales: '1.000.000',
    region: 'Region A',
    status: 'overperforming',
    deltaType: 'moderateIncrease',
    hours: 100,
  },
  {
    id: 2,
    name: 'Jon Doe',
    sales: '2.202.000',
    region: 'Region B',
    status: 'overperforming',
    deltaType: 'moderateIncrease',
    hours: 110,
  },
  {
    id: 3,
    name: 'Peter Doe',
    sales: '1.505.000',
    region: 'Region C',
    status: 'underperforming',
    deltaType: 'moderateDecrease',
    hours: 90,
  },
  {
    id: 4,
    name: 'Employee 4',
    sales: '500000',
    region: 'Region D',
    status: 'overperforming',
    deltaType: 'moderateDecrease',
    hours: 92,
  },
  {
    id: 5,
    name: 'Employee 5',
    sales: '600000',
    region: 'Region E',
    status: 'underperforming',
    deltaType: 'moderateDecrease',
    hours: 95,
  },
  {
    id: 6,
    name: 'Employee 6',
    sales: '700000',
    region: 'Region F',
    status: 'overperforming',
    deltaType: 'moderateIncrease',
    hours: 98,
  },
  {
    id: 7,
    name: 'Employee 7',
    sales: '800000',
    region: 'Region G',
    status: 'underperforming',
    deltaType: 'moderateDecrease',
    hours: 101,
  },
  {
    id: 8,
    name: 'Employee 8',
    sales: '900000',
    region: 'Region H',
    status: 'overperforming',
    deltaType: 'moderateDecrease',
    hours: 104,
  },
]

export default function TableDemo() {
  return (
    <TableRoot data-testid="table-root">
      <Table data-testid="table">
        <TableCaption data-testid="table-caption">A list of your recent invoices.</TableCaption>
        <TableHead data-testid="table-head">
          <TableRow data-testid="table-row">
            <TableHeaderCell data-testid="table-header-cell">Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">Working Hours (h)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="table-body">
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell data-testid="table-cell">{item.name}</TableCell>
              <TableCell className="text-right">{item.sales}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFoot data-testid="table-foot">
          <TableRow>
            <TableHeaderCell colSpan={2} scope="row" className="text-right">
              4642
            </TableHeaderCell>
            <TableHeaderCell colSpan={3} scope="row" className="text-right">
              15h
            </TableHeaderCell>
          </TableRow>
        </TableFoot>
      </Table>
    </TableRoot>
  )
}
