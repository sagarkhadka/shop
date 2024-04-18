import React from 'react'

import { currencyFormat } from '@/utils/currencyFormat'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { colorVariants, sizeVariants } from '@/utils/constants'

const ProductDetails = () => {
  return (
    <>
      <div className='space-y-6'>
        <div className='space-y-3'>
          <h1 className='text-lg font-semibold sm:text-2xl md:text-4xl'>
            Product title goes here
          </h1>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-semibold'>(4.5)</span>
            <span className='text-sm font-semibold text-green-500'>
              623 reviews
            </span>
            <span className='ml-2 text-sm font-semibold text-yellow-700'>
              1,919 Sold
            </span>
          </div>
        </div>

        <p className='!my-4 text-2xl capitalize'>{currencyFormat(8890)}</p>

        <div className='my-4 space-y-2'>
          <div className='space-y-2'>
            <p className='font-semibold uppercase text-slate-600'>
              select color
            </p>
            <ToggleGroup
              type='single'
              onValueChange={(value) => console.log(value)}
              defaultValue={colorVariants[0]}
            >
              {colorVariants.map((color) => (
                <ToggleGroupItem key={color} value={color}>
                  {color}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        <div className='my-4 space-y-2'>
          <div className='space-y-2'>
            <p className='font-semibold uppercase text-slate-600'>
              select color
            </p>
            <ToggleGroup
              type='single'
              onValueChange={(value) => console.log(value)}
              defaultValue={sizeVariants[0]}
            >
              {sizeVariants.map((size) => (
                <ToggleGroupItem key={size} value={size}>
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
