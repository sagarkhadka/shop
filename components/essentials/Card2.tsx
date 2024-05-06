import Image from 'next/image'

import { Card, CardContent } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { currencyFormat } from '@/utils/currencyFormat'
import { cn } from '@/lib/utils'

interface ICardProps {
  imageUrl: string
  productTitle: string
  price: number
  quantity: number
}

const Card2 = ({ imageUrl, productTitle, price, quantity }: ICardProps) => {
  return (
    <>
      <Card
        className={cn(
          'cursor-pointer duration-200 hover:shadow-lg hover:shadow-slate-200'
        )}
        // onClick={handleClick}
      >
        <CardContent className='flex flex-col gap-4 p-3 xs:flex-row xs:p-6'>
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
              // onClick={handleButtonClick}
              className='flex w-fit items-center gap-3 md:flex-col md:items-end md:justify-end'
            >
              {/* <QuantityButton setProductQuantity={setQuantity} /> */}
              {/* <Alert icon={<Trash2 size={18} />} /> */}
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

export default Card2
