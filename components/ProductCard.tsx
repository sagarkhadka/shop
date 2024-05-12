'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Button } from './ui/button'
import { currencyFormat } from '@/utils/currencyFormat'
import { Badge } from './ui/badge'

interface ICardProps {
  productTitle: string
  imageUrl: string
}

const ProductCard = ({ productTitle, imageUrl }: ICardProps) => {
  const [liked, setLiked] = useState(false)

  return (
    <>
      <Card className='group overflow-hidden border-0 shadow-lg shadow-slate-200'>
        <div className='relative isolate h-56 w-full'>
          {/* <div className='absolute inset-0 z-10 bg-gradient-to-b from-primary-orange/0 to-primary-orange/60 opacity-0 duration-200 group-hover:opacity-100' /> */}
          <div className='absolute left-3 top-3 z-20 flex flex-wrap gap-2'>
            <Badge>-5% 0ff</Badge>
            <Badge variant={'secondary'}>Best Deal</Badge>
          </div>
          <div className='absolute bottom-2 right-3 z-20 flex translate-y-5 flex-wrap gap-2 opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100'>
            <Button
              variant={'link'}
              className='p-0'
              onClick={() => setLiked((prev) => !prev)}
            >
              <Heart color='#dc2626' fill={liked ? '#dc2626' : 'transparent'} />
            </Button>
          </div>
          <Image
            src={imageUrl}
            alt={productTitle}
            fill
            className='z-0 bg-white object-cover'
          />
        </div>
        <CardHeader className='p-5'>
          <Link href='/products/123' className='w-fit'>
            <CardTitle className='line-clamp-1 text-lg font-semibold duration-200 hover:text-primary-orange'>
              {productTitle}
            </CardTitle>
          </Link>
          <CardDescription className='flex flex-wrap items-center justify-between'>
            <span className='flex items-center gap-2'>
              <Star color='#e99b4f' fill='#e99b4f' size={16} />
              <span>4.2 (10 review)</span>
            </span>
            <span className='flex items-center gap-1'>
              <label className='line-through'>{currencyFormat(1400)}</label>
              <label className='text-base font-semibold text-slate-700'>
                {currencyFormat(1400 - 70)}
              </label>
            </span>
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex items-center gap-2 p-5 pt-0'>
          <Button variant={'ghost'} className=''>
            <ShoppingCart size={20} />
          </Button>
          <Button className='flex-1'>Buy Now</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProductCard
