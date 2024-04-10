'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { Thumb } from './Thumb'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const ProductCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className='m-x-auto max-w-72'>
      <div className='overflow-hidden' ref={emblaMainRef}>
        <div className='ml-[calc(1rem*-1)] flex touch-pan-y'>
          {slides.map((index) => (
            <div className='flex pl-4' key={index}>
              <div className='flex h-72 items-center justify-center rounded-lg text-lg shadow'>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-4'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='embla-thumbs__container'>
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
// https://codesandbox.io/p/sandbox/embla-carousel-thumbs-react-sjmctg?file=%2Fsrc%2Fjs%2Findex.tsx%3A4%2C50
