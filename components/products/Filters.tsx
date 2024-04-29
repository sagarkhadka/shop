'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const FilterHeading = ({ title }: { title: string }) => {
  return (
    <h4 className='border-b border-gray-400 pb-2 pt-1 font-semibold capitalize text-gray-500'>
      {title}
    </h4>
  )
}

const Filters = () => {
  return (
    <>
      <div className='space-y-8'>
        <div className='space-y-4'>
          <FilterHeading title='Color' />
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className=''>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='space-y-4'>
          <FilterHeading title='Color' />
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className=''>
              <SelectValue placeholder='Theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

export default Filters
