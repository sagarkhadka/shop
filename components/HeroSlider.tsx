'use client'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

interface IHeroText {
  title: string
  description: string
}

const HeroText = ({ title, description }: IHeroText) => {
  return (
    <>
      <div className='relative z-20 flex h-full w-full max-w-[1400px] items-end'>
        <div className='max-w-[85ch] space-y-5 text-white'>
          <h3 className='text-4xl font-semibold'>{title}</h3>
          <p className=''>{description}</p>
        </div>
      </div>
    </>
  )
}

const HeroSlider = () => {
  return (
    <>
      <section className='container'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000
            })
          ]}
          opts={{
            loop: true
          }}
          className='overflow-hidden rounded-xl shadow-2xl'
        >
          <CarouselContent>
            <CarouselItem className='relative isolate h-full w-full bg-[url("https://images.unsplash.com/photo-1608192490166-7c6745b9f3b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center p-28 md:min-h-[30rem]'>
              {/* <div className='absolute inset-0 z-10 bg-black/20' /> */}
            </CarouselItem>
            <CarouselItem className='relative isolate h-full w-full bg-[url("https://images.unsplash.com/photo-1624535948032-f6f24ab1f319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center p-28 md:min-h-[30rem]'>
              {/* <div className='absolute inset-0 z-10 bg-black/20' /> */}
            </CarouselItem>
            <CarouselItem className='relative isolate h-full w-full bg-[url("https://images.unsplash.com/photo-1435244837924-21c508f9db25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center p-28 md:min-h-[30rem]'>
              {/* <div className='absolute inset-0 z-10 bg-black/20' /> */}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='left-6' />
          <CarouselNext className='right-6' />
        </Carousel>
      </section>
    </>
  )
}

export default HeroSlider
