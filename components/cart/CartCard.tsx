'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckedState } from '@radix-ui/react-checkbox'

import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { cn } from '@/lib/utils'

const CartCard = () => {
  const [isChecked, setIsChecked] = useState<CheckedState>(false)
  console.log(isChecked)

  return (
    <>
      <Card className={cn({ 'border-primary-orange': isChecked })}>
        <CardContent className='flex gap-4 p-6'>
          <div className='flex items-center gap-4'>
            <Checkbox onCheckedChange={setIsChecked} />
            <div className='relative aspect-square h-36 w-full max-w-36'>
              <Image
                src={`https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=''
                fill
                className='rounded-xl object-cover'
              />
            </div>
          </div>
          <div className='space-y-4'>
            <h4 className='text-xl font-semibold text-gray-600'>
              Brown Work Jacket
            </h4>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default CartCard
