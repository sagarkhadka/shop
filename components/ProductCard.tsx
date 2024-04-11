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
import { Badge } from './ui/badge'
import Link from 'next/link'

interface ICardProps {
  productTitle: string
  imageUrl: string
}

const ProductCard = ({ productTitle, imageUrl }: ICardProps) => {
  return (
    <>
      <Card className='overflow-hidden border-0 shadow-lg shadow-slate-200'>
        <div className='relative isolate h-56 w-full'>
          <div className='absolute left-3 top-3 z-10 flex flex-wrap gap-2'>
            <Badge>-5% 0ff</Badge>
            <Badge variant={'secondary'}>Best Deal</Badge>
          </div>
          <Image
            src={imageUrl}
            alt={productTitle}
            fill
            className='z-0 object-cover'
          />
        </div>
        <CardHeader className='p-5'>
          <Link href='/product' className='w-fit'>
            <CardTitle className='line-clamp-1 text-lg font-semibold duration-200 hover:text-primary-orange'>
              {productTitle}
            </CardTitle>
          </Link>
          <CardDescription className='flex items-center justify-between'>
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
