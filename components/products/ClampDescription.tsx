'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const ClampDescription = () => {
  const [toggled, setToggled] = useState<boolean>(false)

  return (
    <>
      <div className='space-y-1'>
        <p
          className={cn('text-stone-500', {
            'line-clamp-3': !toggled,
            'line-clamp-[none]': toggled
          })}
        >
          Top in sweatshirt fabric made from a cotton blend with a soft brushed
          inside. Relaxed fit with dropped shoulders. Long sleeves and ribbing
          around the neckline, cuffs and hem. Small metal text applique. Top in
          sweatshirt fabric made from a cotton blend with a soft brushed inside.
          Relaxed fit with dropped shoulders. Long sleeves and ribbing around
          the neckline, cuffs and hem. Small metal text applique.
        </p>
        <Button
          variant={'link'}
          className='p-0 text-sm'
          onClick={() => setToggled((prev) => !prev)}
        >
          {toggled ? 'Read Less' : 'Read More'}
        </Button>
      </div>
    </>
  )
}

export default ClampDescription
