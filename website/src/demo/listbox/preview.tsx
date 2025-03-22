'use client'

import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from 'twistail-react/listbox'

const data = [
  {
    value: 'dress-shirt-striped',
    label: 'Striped Dress Shirt',
  },
  {
    value: 'relaxed-button-down',
    label: 'Relaxed Fit Button Down',
  },
  {
    value: 'slim-button-down',
    label: 'Slim Fit Button Down',
  },
  {
    value: 'dress-shirt-solid',
    label: 'Solid Dress Shirt',
    disabled: true,
  },
  {
    value: 'dress-shirt-check',
    label: 'Check Dress Shirt',
  },
]

export default function ListboxDemo() {
  return (
    <Listbox>
      <ListboxTrigger className="w-64">
        <ListboxValue placeholder="Listbox" />
      </ListboxTrigger>
      <ListboxContent>
        {data.map((item) => (
          <ListboxItem key={item.value} value={item.value}>
            {item.label}
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  )
}
