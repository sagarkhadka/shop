import { Flame } from 'lucide-react'

import SectionHeadline from './SectionHeadline'
import ProductCard from './ProductCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const FlashSell = () => {
  return (
    <>
      <section className='section-space container'>
        <SectionHeadline
          title='Flash Sell'
          icon={<Flame color='#ff421d' size={34} />}
        />
        <Carousel
          opts={{
            align: 'start'
          }}
          className='mt-6 w-full'
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
                <div className='p-1'>
                  <ProductCard
                    productTitle='Product title'
                    imageUrl='/images/phone.jpg'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='-top-10 left-[calc(100%-5rem)]' />
          <CarouselNext className='-top-10 right-0' />
        </Carousel>
        {/* <div className='mt-10 grid grid-cols-4 gap-4'>
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
          <ProductCard
            productTitle='Product title'
            imageUrl='/images/phone.jpg'
          />
        </div> */}
      </section>
    </>
  )
}

export default FlashSell
