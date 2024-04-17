'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Image from 'next/image'

const ProductCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const data = [
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#ff5600',
            '--swiper-pagination-color': '#ff5600',
            '--swiper-navigation-size': 28
          } as any
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mb-3'
      >
        {data.map((item) => (
          <>
            <SwiperSlide className='relative aspect-[2/1.8] overflow-hidden rounded-xl border bg-white shadow-lg'>
              <Image src={item} alt='' fill className='object-cover' />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='thumb !p-2'
      >
        {data.map((item) => (
          <>
            <SwiperSlide className='relative aspect-[2/1.5] overflow-hidden rounded-xl border bg-white p-2 shadow-lg'>
              <Image src={item} alt='' fill className='object-cover' />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  )
}

export default ProductCarousel
