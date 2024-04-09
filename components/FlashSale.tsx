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

const FlashSale = () => {
  return (
    <>
      <section className='section-space container'>
        <SectionHeadline
          title='Flash Sale'
          icon={<Flame color='#ff421d' size={34} />}
        />
        <Carousel
          opts={{
            align: 'start'
          }}
          className='w-full'
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/4'>
                <div className='p-1'>
                  <ProductCard
                    productTitle={`Product ${index + 1} title`}
                    imageUrl='/images/phone.jpg'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='-top-10 left-[calc(100%-5rem)]' />
          <CarouselNext className='-top-10 right-0' />
        </Carousel>
      </section>
    </>
  )
}

export default FlashSale
