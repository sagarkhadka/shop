import { currencyFormat } from '@/utils/currencyFormat'
import React from 'react'

const ProductDetails = () => {
  return (
    <>
      <div className='space-y-3'>
        <h1 className='text-lg font-semibold sm:text-2xl md:text-4xl'>
          Product title goes here
        </h1>
        <div className='my-3 flex items-center gap-2'>
          <span className='text-sm font-semibold'>(4.5)</span>
          <span className='text-sm font-semibold text-green-500'>
            623 reviews
          </span>
          <span className='ml-2 text-sm font-semibold text-yellow-700'>
            1,919 Sold
          </span>
        </div>
        <p className='!my-4 text-2xl capitalize'>{currencyFormat(8890)}</p>
      </div>
    </>
  )
}

export default ProductDetails
