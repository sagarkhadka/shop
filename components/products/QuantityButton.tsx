'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

import { Button } from '../ui/button'

interface IQuantity {
  setProductQuantity: Dispatch<SetStateAction<number>>
}

const QuantityButton = ({ setProductQuantity }: IQuantity) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setProductQuantity(quantity)
  }, [quantity])

  return (
    <>
      <div className='flex items-center gap-3 rounded-md bg-slate-100/70 p-1'>
        <Button
          variant={'ghost'}
          className='p-1 disabled:cursor-not-allowed'
          size={'sm'}
          disabled={quantity <= 1}
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <Minus size={14} />
        </Button>
        <p>{quantity}</p>
        <Button
          variant={'ghost'}
          className='p-1 disabled:cursor-not-allowed'
          size={'sm'}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Plus size={14} />
        </Button>
      </div>
    </>
  )
}

export default QuantityButton
