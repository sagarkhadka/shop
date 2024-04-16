import { Search } from 'lucide-react'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

const GlobalSearch = () => {
  return (
    <>
      <div className='relative w-full'>
        <Input
          placeholder='Search'
          className='m-0 h-11 rounded-full border-primary-orange py-4 pl-4 pr-11 shadow-none'
        />
        <Button
          variant={'ghost'}
          size='sm'
          className='absolute right-1.5 top-1.5 m-0 rounded-full bg-primary-orange/20'
        >
          <Search color='#ff5600' size={18} />
        </Button>
      </div>
    </>
  )
}

export default GlobalSearch
