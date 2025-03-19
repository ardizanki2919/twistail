import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Button, Text } from '#/components'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components'
import {
  Listbox,
  ListboxContent,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxTrigger,
  ListboxValue,
} from '#/components'

const meta: Meta<typeof Listbox> = {
  component: Listbox,
  title: 'Base Components/Listbox',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Listbox>

const data1 = [
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

const data2 = [
  {
    value: 'striped-dress-shirt',
    label: 'Striped Dress Shirt',
    icon: Lucide.Shirt,
  },
  {
    value: 'relaxed-fit-shirt',
    label: 'Relaxed Fit Shirt Classic',
    icon: Lucide.Shirt,
  },
  {
    value: 'relaxed-fit-shirt-vneck',
    label: 'Relaxed Fit Shirt V-Neck',
    icon: Lucide.Shirt,
  },
  {
    value: 'sport-active-solid',
    label: 'Sport Active Shirt',
    icon: Lucide.Shirt,
  },
]

const data3 = [
  {
    label: 'Shirts',
    items: [
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
      },
      {
        value: 'dress-shirt-check',
        label: 'Check Dress Shirt',
      },
    ],
  },
  {
    label: 'T-Shirts',
    items: [
      {
        value: 'v-neck',
        label: 'V-Neck',
      },
      {
        value: 'crew-neck',
        label: 'Crew Neck',
      },
      {
        value: 'henley',
        label: 'Henley',
      },
      {
        value: 'polo',
        label: 'Polo',
      },
      {
        value: 'mock-neck',
        label: 'Mock Neck',
      },
      {
        value: 'turtleneck',
        label: 'Turtleneck',
      },
      {
        value: 'scoop-neck',
        label: 'Scoop Neck',
      },
    ],
  },
]

export const Default: Story = {
  render: () => {
    return (
      <Listbox>
        <ListboxTrigger className="w-64">
          <ListboxValue placeholder="Listbox" />
        </ListboxTrigger>
        <ListboxContent>
          {data1.map((item) => (
            <ListboxItem key={item.value} value={item.value}>
              {item.label}
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
    )
  },
}

export const Positions: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        <Listbox>
          <ListboxTrigger className="w-64">
            <ListboxValue placeholder="Position Item Aligned" />
          </ListboxTrigger>
          <ListboxContent position="item-aligned">
            {data1.map((item) => (
              <ListboxItem key={item.value} value={item.value}>
                {item.label}
              </ListboxItem>
            ))}
          </ListboxContent>
        </Listbox>
        <Listbox>
          <ListboxTrigger className="w-64">
            <ListboxValue placeholder="Position Popper (default)" />
          </ListboxTrigger>
          <ListboxContent position="popper">
            {data1.map((item) => (
              <ListboxItem key={item.value} value={item.value}>
                {item.label}
              </ListboxItem>
            ))}
          </ListboxContent>
        </Listbox>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Listbox>
          <ListboxTrigger>
            <ListboxValue placeholder="Listbox" />
          </ListboxTrigger>
          <ListboxContent>
            {data2.map((item) => (
              <ListboxItem key={item.value} value={item.value}>
                <span className="flex items-center gap-2">
                  <item.icon className="size-4 shrink-0" aria-hidden="true" /> {item.label}
                </span>
              </ListboxItem>
            ))}
          </ListboxContent>
        </Listbox>
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Listbox>
          <ListboxTrigger>
            <ListboxValue placeholder="Listbox" />
          </ListboxTrigger>
          <ListboxContent>
            {data3.map((group) => (
              <ListboxGroup key={group.label}>
                <ListboxGroupLabel>{group.label}</ListboxGroupLabel>
                {group.items.map((item) => (
                  <ListboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ListboxItem>
                ))}
              </ListboxGroup>
            ))}
          </ListboxContent>
        </Listbox>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Listbox>
          <ListboxTrigger disabled={true}>
            <ListboxValue placeholder="Listbox" />
          </ListboxTrigger>
          <ListboxContent>
            {data3.map((group) => (
              <ListboxGroup key={group.label}>
                <ListboxGroupLabel>{group.label}</ListboxGroupLabel>
                {group.items.map((item) => (
                  <ListboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ListboxItem>
                ))}
              </ListboxGroup>
            ))}
          </ListboxContent>
        </Listbox>
      </div>
    )
  },
}

export const DisabledItem: Story = {
  render: () => {
    return (
      <Listbox>
        <ListboxTrigger className="w-64">
          <ListboxValue placeholder="Listbox" />
        </ListboxTrigger>
        <ListboxContent>
          {data1.map((item) => (
            <ListboxItem key={item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
    )
  },
}

export const HasError: Story = {
  render: () => {
    return (
      <div className="w-[250px]">
        <Listbox>
          <ListboxTrigger hasError>
            <ListboxValue placeholder="Listbox" />
          </ListboxTrigger>
          <ListboxContent>
            {data3.map((group) => (
              <ListboxGroup key={group.label}>
                <ListboxGroupLabel>{group.label}</ListboxGroupLabel>
                {group.items.map((item) => (
                  <ListboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ListboxItem>
                ))}
              </ListboxGroup>
            ))}
          </ListboxContent>
        </Listbox>
      </div>
    )
  },
}

export const Scrollable: Story = {
  render: () => {
    return (
      <Listbox>
        <ListboxTrigger className="w-[280px]">
          <ListboxValue placeholder="Listbox a timezone" />
        </ListboxTrigger>
        <ListboxContent>
          <ListboxGroup>
            <ListboxGroupLabel>North America</ListboxGroupLabel>
            <ListboxItem value="est">Eastern Standard Time (EST)</ListboxItem>
            <ListboxItem value="cst">Central Standard Time (CST)</ListboxItem>
            <ListboxItem value="mst">Mountain Standard Time (MST)</ListboxItem>
            <ListboxItem value="pst">Pacific Standard Time (PST)</ListboxItem>
            <ListboxItem value="akst">Alaska Standard Time (AKST)</ListboxItem>
            <ListboxItem value="hst">Hawaii Standard Time (HST)</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Europe & Africa</ListboxGroupLabel>
            <ListboxItem value="gmt">Greenwich Mean Time (GMT)</ListboxItem>
            <ListboxItem value="cet">Central European Time (CET)</ListboxItem>
            <ListboxItem value="eet">Eastern European Time (EET)</ListboxItem>
            <ListboxItem value="west">Western European Summer Time (WEST)</ListboxItem>
            <ListboxItem value="cat">Central Africa Time (CAT)</ListboxItem>
            <ListboxItem value="eat">East Africa Time (EAT)</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Asia</ListboxGroupLabel>
            <ListboxItem value="msk">Moscow Time (MSK)</ListboxItem>
            <ListboxItem value="ist">India Standard Time (IST)</ListboxItem>
            <ListboxItem value="cst_china">China Standard Time (CST)</ListboxItem>
            <ListboxItem value="jst">Japan Standard Time (JST)</ListboxItem>
            <ListboxItem value="kst">Korea Standard Time (KST)</ListboxItem>
            <ListboxItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Australia & Pacific</ListboxGroupLabel>
            <ListboxItem value="awst">Australian Western Standard Time (AWST)</ListboxItem>
            <ListboxItem value="acst">Australian Central Standard Time (ACST)</ListboxItem>
            <ListboxItem value="aest">Australian Eastern Standard Time (AEST)</ListboxItem>
            <ListboxItem value="nzst">New Zealand Standard Time (NZST)</ListboxItem>
            <ListboxItem value="fjt">Fiji Time (FJT)</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>South America</ListboxGroupLabel>
            <ListboxItem value="art">Argentina Time (ART)</ListboxItem>
            <ListboxItem value="bot">Bolivia Time (BOT)</ListboxItem>
            <ListboxItem value="brt">Brasilia Time (BRT)</ListboxItem>
            <ListboxItem value="clt">Chile Standard Time (CLT)</ListboxItem>
          </ListboxGroup>
        </ListboxContent>
      </Listbox>
    )
  },
}

export const ListboxInDialog: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Listbox shirt size</DialogTitle>
              <DialogDescription className="text-sm leading-7">Shirt type</DialogDescription>
              <Listbox>
                <ListboxTrigger>
                  <ListboxValue placeholder="Listbox" />
                </ListboxTrigger>
                <ListboxContent>
                  {data3.map((group) => (
                    <ListboxGroup key={group.label}>
                      <ListboxGroupLabel>{group.label}</ListboxGroupLabel>
                      {group.items.map((item) => (
                        <ListboxItem key={item.value} value={item.value}>
                          {item.label}
                        </ListboxItem>
                      ))}
                    </ListboxGroup>
                  ))}
                </ListboxContent>
              </Listbox>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    const data = [
      {
        value: 'chocolate',
        label: '🍫 Schoggi',
      },
      {
        value: 'cheese',
        label: '🧀 Chäs',
      },
      {
        value: 'fondue',
        label: '🫕 Fondü',
      },
      {
        value: 'Milk',
        label: '🥛 Melch',
      },
    ]

    return (
      <>
        <div className="flex w-sm gap-2">
          <Listbox value={value} onValueChange={setValue}>
            <ListboxTrigger className="mx-auto min-w-44">
              <ListboxValue placeholder="Listbox" aria-label={value} />
            </ListboxTrigger>
            <ListboxContent>
              {data.map((item) => (
                <ListboxItem key={item.value} value={item.value}>
                  <span className="flex items-center gap-x-2">{item.label}</span>
                </ListboxItem>
              ))}
            </ListboxContent>
          </Listbox>
          <Button className="whitespace-nowrap" variant="secondary" onClick={() => setValue('')}>
            Reset selection
          </Button>
        </div>
        <Text size="sm" className="mt-2 px-1">
          Selected key: {value}
        </Text>
      </>
    )
  },
}
