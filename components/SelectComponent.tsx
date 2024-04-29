import { Dispatch, SetStateAction } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface IOption {
  label: string
  value: string
}

interface ISelect {
  options: IOption[]
  setSelected: Dispatch<SetStateAction<IOption>>
}

const SelectComponent = () => {
  return (
    <>
      <Select>
        <SelectTrigger className=''>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectComponent
