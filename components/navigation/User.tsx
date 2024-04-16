import Link from 'next/link'
import { ShoppingCart, UserRound, Heart } from 'lucide-react'

import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const User = () => {
  const isLoggedIn = true

  return (
    <>
      <div className='flex items-center'>
        {!isLoggedIn ? (
          <div className='flex items-center gap-2'>
            <Button variant={'ghost'} asChild>
              <Link href='/login'>
                <span className='flex items-center gap-2'>
                  <UserRound color='#ff5600' size={18} />
                  <span>Login</span>
                </span>
              </Link>
            </Button>
            <Separator orientation='vertical' className='h-4 bg-deep-blue' />
            <Button variant={'ghost'} asChild>
              <Link href='/sign-up'>
                <span>Sign Up</span>
              </Link>
            </Button>
          </div>
        ) : (
          <div className='flex items-center'>
            <Button variant={'ghost'} asChild>
              <Link href='/favorite'>
                <Heart color='#ff5600' size={20} />
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className='outline-none'>
                <Avatar className='mx-2'>
                  <AvatarFallback>CH</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

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
