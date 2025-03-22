'use client'

import { Button } from 'twistail-react/button'
import { Input } from 'twistail-react/input'
import { Label } from 'twistail-react/label'
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from 'twistail-react/popover'

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Form</Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <form>
          <div className="flex flex-col gap-2 p-2">
            <label htmlFor="number">Salary</label>
            <Input id="number" name="number" type="number" placeholder="$100K" />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" placeholder="Emma" />
          </div>
          <div className="flex items-center gap-2 border-gray-200 border-t p-2 dark:border-gray-800">
            <PopoverClose asChild>
              <Button className="w-full" variant="secondary" size="sm">
                Clear
              </Button>
            </PopoverClose>
            <Button className="mx-auto w-full" type="submit" size="sm">
              Apply
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
