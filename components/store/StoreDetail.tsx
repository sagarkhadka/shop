import React from 'react'
import Image from 'next/image'
import { Verified } from 'lucide-react'

import { Badge, badgeVariants } from '../ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

interface IStoreDetail {
  logo: string
  name: string
  review: string
  duration: number
}

const StoreDetail = ({ logo, name, review, duration }: IStoreDetail) => {
  return (
    <>
      <div className='flex items-center gap-8'>
        <div className='col-span-1'>
          <Image
            src={logo}
            alt='k'
            height={120}
            width={120}
            className='rounded-lg object-contain shadow-lg shadow-slate-200'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='text-2xl font-semibold'>{name}</h5>
          <TooltipProvider>
            <div className='flex items-center gap-3'>
              <Tooltip>
                <TooltipTrigger
                  className={badgeVariants({ variant: 'destructive' })}
                >
                  {duration} YRS
                </TooltipTrigger>
                <TooltipContent>
                  <p>Time on our store</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  className={`bg-emerald-500 hover:bg-emerald-400 ${badgeVariants({ variant: 'default' })} flex gap-1`}
                >
                  <Verified size={16} /> Verified
                </TooltipTrigger>
                <TooltipContent>
                  <p>Verified Store</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </>
  )
}

export default StoreDetail
