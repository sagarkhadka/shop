'use client'

import { EmblaOptionsType } from 'embla-carousel'

import ProductCarousel from '@/components/products/ProductCarousel'

const ProductDetail = () => {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 10
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <h4>product descriptions</h4>
      <ProductCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
}

export default ProductDetail
