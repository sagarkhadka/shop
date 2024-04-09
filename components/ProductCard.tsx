import Image from 'next/image'
import { Star } from 'lucide-react'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'
import { Button } from './ui/button'
import { currencyFormat } from '@/utils/currencyFormat'

interface ICardProps {
  productTitle: string
  imageUrl: string
}

const ProductCard = ({ productTitle, imageUrl }: ICardProps) => {
  return (
    <>
      <Card className='overflow-hidden border-0 shadow-none'>
        <div className='relative h-56 w-full'>
          <Image
            src={imageUrl}
            alt={productTitle}
            fill
            className='object-cover'
          />
        </div>
        <CardHeader className='p-4'>
          <CardTitle className='text-lg font-semibold'>
            {productTitle}
          </CardTitle>
          <CardDescription className='flex items-center justify-between'>
            <span className='flex items-center gap-2'>
              <Star color='#e99b4f' fill='#e99b4f' size={16} />
              <span>4.2 (10 review)</span>
            </span>
            <span className='font-semibold text-slate-700'>
              {currencyFormat(1400.25)}
            </span>
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex items-center gap-2 p-4 pt-0'>
          <Button variant={'outline'} className='flex-1'>
            Add to Cart
          </Button>
          <Button className='flex-1'>Buy Now</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProductCard
