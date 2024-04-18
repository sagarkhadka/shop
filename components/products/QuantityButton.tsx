'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <div className='flex items-center gap-3 rounded-md bg-slate-100/70 p-2'>
        <Button
          variant={'ghost'}
          className='p-2 disabled:cursor-not-allowed'
          size={'sm'}
          disabled={quantity <= 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <Minus size={18} />
        </Button>
        <p>{quantity}</p>
        <Button
          variant={'ghost'}
          className='p-2 disabled:cursor-not-allowed'
          size={'sm'}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Plus size={18} />
        </Button>
      </div>
    </>
  )
}

export default QuantityButton
