'use client'

import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const HeroSlider = () => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        opts={{
          loop: true
        }}
      >
        <CarouselContent>
          <CarouselItem className='relative isolate h-[calc(100vh-64px)] bg-emerald-500 bg-[url("https://images.unsplash.com/photo-1608192490166-7c6745b9f3b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover p-28'>
            <div className='absolute inset-0 z-10 bg-black/20' />

            <div className='relative z-20 flex h-full w-full max-w-[1400px] items-end'>
              <div className='max-w-[85ch] space-y-5 text-white'>
                <h3 className='text-4xl font-semibold'>Riders Rejoice</h3>
                <p className=''>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  sint aliquam, odit explicabo doloribus illum iure ad est vero,
                  ab, alias nulla voluptatum ea. Accusamus.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='relative isolate h-[calc(100vh-64px)] bg-emerald-700 bg-[url("https://images.unsplash.com/photo-1624535948032-f6f24ab1f319?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover p-28'>
            <div className='absolute inset-0 z-10 bg-black/20' />

            <div className='relative z-20 flex h-full w-full max-w-[1400px] items-end'>
              <div className='max-w-[85ch] space-y-5 text-white'>
                <h3 className='text-4xl font-semibold'>Riders Rejoice</h3>
                <p className=''>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  sint aliquam, odit explicabo doloribus illum iure ad est vero,
                  ab, alias nulla voluptatum ea. Accusamus.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='relative isolate h-[calc(100vh-64px)] bg-emerald-900 bg-[url("https://images.unsplash.com/photo-1435244837924-21c508f9db25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover p-28'>
            <div className='absolute inset-0 z-10 bg-black/20' />

            <div className='relative z-20 flex h-full w-full max-w-[1400px] items-end'>
              <div className='max-w-[85ch] space-y-5 text-white'>
                <h3 className='text-4xl font-semibold'>Riders Rejoice</h3>
                <p className=''>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  sint aliquam, odit explicabo doloribus illum iure ad est vero,
                  ab, alias nulla voluptatum ea. Accusamus.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
      <section className='max-w-[100vw]'></section>
    </>
  )
}

export default HeroSlider
