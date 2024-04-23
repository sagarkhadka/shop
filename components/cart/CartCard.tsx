'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Trash2 } from 'lucide-react'

import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { cn } from '@/lib/utils'
import { currencyFormat } from '@/utils/currencyFormat'
import QuantityButton from '../products/QuantityButton'
import Alert from '../Alert'

export interface ISelected {
  id: string
  price: number
  totalPrice: number
}

interface ICart {
  setSelected: Dispatch<SetStateAction<ISelected[]>>
  price: number
  imageUrl: string
  productTitle: string
}

const CartCard = ({ setSelected, price, imageUrl, productTitle }: ICart) => {
  const [isChecked, setIsChecked] = useState<CheckedState>(false)
  const [quantity, setQuantity] = useState<number>(1)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsChecked((prevState) => !prevState)
  }

  const handleButtonClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.stopPropagation()
  }

  useEffect(() => {
    if (isChecked) {
      const newItem: ISelected = {
        id: `${productTitle}-${price}`,
        price: price,
        totalPrice: price * quantity
      }

      setSelected((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.id === newItem.id
        )

        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems]
          updatedItems[existingItemIndex] = newItem
          return updatedItems
        } else {
          return [...prevItems, newItem]
        }
      })
    } else {
      setSelected((prevItems) =>
        prevItems.filter((item) => item.id !== `${productTitle}-${price}`)
      )
    }
  }, [isChecked, quantity, price, productTitle])

  return (
    <>
      <Card
        className={cn(
          'cursor-pointer duration-200 hover:shadow-lg hover:shadow-slate-200',
          {
            'border-primary-orange': isChecked
          }
        )}
        onClick={handleClick}
      >
        <CardContent className='xs:flex-row xs:p-6 flex flex-col gap-4 p-3'>
          <div className='flex items-center gap-4'>
            <Checkbox
              // onCheckedChange={setIsChecked}
              checked={true}
              className='hidden'
            />
            <div className='relative aspect-[4.5/4] w-full min-w-36'>
              <Image
                src={imageUrl}
                alt=''
                fill
                className='rounded-xl object-cover'
                quality={75}
              />
            </div>
          </div>
          <div className='flex flex-grow flex-col justify-between gap-3 py-2 md:flex-row'>
            <div className='flex flex-col justify-between'>
              <h4 className='text-xl font-semibold text-gray-600'>
                {productTitle}
              </h4>
              <p className='font-semibold text-gray-600'>
                {currencyFormat(price * quantity)}
              </p>
            </div>
            <div
              onClick={handleButtonClick}
              className='flex w-fit items-center gap-3 md:flex-col md:items-end md:justify-end'
            >
              <QuantityButton setProductQuantity={setQuantity} />
              <Alert icon={<Trash2 size={18} />} />
              {/* <Button variant={'ghost'} size={'sm'}>
                <Trash2 size={18} />
              </Button> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default CartCard
