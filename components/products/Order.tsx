import React from 'react'
import QuantityButton from './QuantityButton'
import { currencyFormat } from '@/utils/currencyFormat'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

const Order = () => {
  return (
    <>
      <div className='sticky top-12 rounded-lg bg-white shadow-lg shadow-slate-200'>
        <h3 className='border-b border-deep-blue/30 p-4 text-xl font-semibold'>
          Order Details
        </h3>
        <div className='space-y-5 border-b border-deep-blue/30 p-4'>
          <div className='flex items-center justify-between font-semibold'>
            <h5 className='text-lg'>Quantity</h5>
            <QuantityButton />
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
              <p>{currencyFormat(1798)}</p>
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
            <p className=''>{currencyFormat(50)}</p>
          </div>
        </div>

        <div className='space-y-2 p-4'>
          <Button className='w-full rounded-md'>Buy Now</Button>
          <Button variant={'outline'} className='w-full rounded-md'>
            <ShoppingCart size={20} /> Add to cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default Order
