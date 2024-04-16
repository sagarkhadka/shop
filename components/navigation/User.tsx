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
            <Link href='/auth/login'>
              <span className='flex items-center gap-2'>
                <UserRound color='#ff5600' size={18} />
                <span>Login</span>
              </span>
            </Link>
          </Button>
          <Separator orientation='vertical' className='h-4 bg-deep-blue' />
          <Button variant={'ghost'} asChild>
            <Link href='/auth/sign-up'>
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>

        <Button variant={'ghost'} className='relative' asChild>
          <Link href='cart' className='flex items-center gap-1'>
            <ShoppingCart size={18} />
            <div className='scale-90 rounded-full bg-fire-red px-2.5 py-1 text-xs text-white'>
              1
            </div>
          </Link>
        </Button>
      </div>
    </>
  )
}

export default User
