import { ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const User = () => {
  return (
    <>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Button variant={'ghost'} asChild>
            <Link href='/'>
              <span className='flex items-center gap-2'>
                <UserRound size={18} />
                <span>Login</span>
              </span>
            </Link>
          </Button>
          <Separator orientation='vertical' className='h-4' />
          <Button variant={'ghost'} asChild>
            <Link href='/'>
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>

        <Button variant={'ghost'} className='relative' asChild>
          <Link href='cart' className='flex items-center gap-1'>
            <ShoppingCart size={18} />
            <div className='bg-fire-red rounded-full px-2.5 py-1 text-xs text-white'>
              1
            </div>
          </Link>
        </Button>
      </div>
    </>
  )
}

export default User