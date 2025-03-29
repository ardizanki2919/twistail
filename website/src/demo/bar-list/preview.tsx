'use client'

import { BarList } from 'twistail-react/bar-list'

export default function Demo() {
  const basicData = [
    { title: '/home', value: 843, maxValue: 1000 },
    { title: '/imprint', value: 46, maxValue: 1000 },
    { title: '/cancellation', value: 3, maxValue: 1000 },
    { title: '/blocks', value: 108, maxValue: 1000 },
    { title: '/documentation', value: 384, maxValue: 1000 },
  ]

  const dataWithSubtitles = basicData.map((item) => ({
    ...item,
    subtitle: `${Math.round((item.value / item.maxValue) * 100)}% of total traffic`,
  }))

  return (
    <div className="mx-auto w-full max-w-lg">
      <BarList data={dataWithSubtitles} />
    </div>
  )
}
