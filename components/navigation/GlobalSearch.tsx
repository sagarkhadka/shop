import { Search } from 'lucide-react'

import { Input } from '../ui/input'

const GlobalSearch = () => {
  return (
    <>
      <div className='relative w-full'>
        <Input
          placeholder='Search'
          className='m-0 rounded-full border-primary-orange pr-11 shadow-none'
        />
        <Search
          color='#ff5600'
          size={22}
          className='absolute right-3 top-1.5'
        />
      </div>
    </>
  )
}

export default GlobalSearch
