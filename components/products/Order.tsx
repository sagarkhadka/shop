'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

import QuantityButton from './QuantityButton'
import { currencyFormat } from '@/utils/currencyFormat'
import { Button } from '../ui/button'

const Order = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const [discountPrice, setDiscountPrice] = useState<number | null>(null)
  const [delivery, setDelivery] = useState<number>(50)
  const [price] = useState<number>(1798)

  const subTotal = useMemo(() => {
    if (quantity) {
      const totalAmount = price * quantity + delivery
      return totalAmount
    } else {
      return price
    }
  }, [quantity, price])

  return (
    <>
      <div className='sticky top-12 rounded-lg bg-white shadow-lg shadow-slate-200'>
        <h3 className='border-b border-deep-blue/30 p-4 text-xl font-semibold'>
          Order Details
        </h3>
        <div className='space-y-5 border-b border-deep-blue/30 p-4'>
          <div className='flex items-center justify-between font-semibold'>
            <h5 className='text-lg'>Quantity</h5>
            <QuantityButton setProductQuantity={setQuantity} />
          </div>

          <div className='space-y-3 [&>*>h6]:text-base [&>*>h6]:font-semibold [&>*>h6]:text-slate-600'>
            <div className='flex items-center justify-between'>
              <h6>Color</h6>
              <p>Brown</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6>Size</h6>
              <p>S</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6>Price</h6>
              <p>{currencyFormat(price)}</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6>Discount Size</h6>
              <p>10%({currencyFormat(179)})</p>
            </div>
            <div className='flex items-center justify-between'>
              <h6>Delivery</h6>
              <p>{currencyFormat(50)}</p>
            </div>
          </div>
        </div>

        <div className='border-b border-deep-blue/30 p-4'>
          <div className='flex items-center justify-between *:text-lg *:font-semibold *:text-slate-800'>
            <h5 className=''>Sub Total</h5>
            <p className=''>{currencyFormat(subTotal)}</p>
          </div>
        </div>

        <div className='space-y-3 p-4 pb-6'>
          <Button className='w-full' asChild>
            <Link href='/cart'>Buy Now</Link>
          </Button>
          <Button variant={'outline'} className='w-full'>
            <ShoppingCart size={20} /> Add to cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default Order
