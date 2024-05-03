import Link from 'next/link'
import { Pencil } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <>
      {/* <div className='space-y-3'>
        <h2 className='text-2xl font-semibold'>Manage My Account</h2>
        <p>Hello, Chahana Store</p>
      </div> */}
      <div className='flex gap-6'>
        <Avatar className='h-20 w-20'>
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
        <div className='space-y-1'>
          <div className='flex items-center gap-6'>
            <h2 className='text-xl font-semibold text-gray-700'>
              Chahana Store
            </h2>
            <Button variant='link' className='gap-1' asChild>
              <Link href='#'>
                <Pencil size={16} /> Edit
              </Link>
            </Button>
          </div>
          <div className='flex gap-4'>
            <span className='font-medium text-gray-700'>
              Default Delivery Address:
            </span>
            <div className='space-y-3'>
              <p className='text-base text-gray-600'>Koteshor, Kathmandu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
