'use client'

import { useSearchParams } from 'next/navigation'

import ProductCard from '@/components/ProductCard'

const ProductsContainer = () => {
  const params = useSearchParams()
  const category = params.get('category')
  const subCategory = params.get('sub-category')

  return (
    <>
      <section className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>filters</div>
          <div className='col-span-9'>
            <div className='grid grid-cols-4 gap-4'>
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className='p-1'>
                  <ProductCard
                    productTitle={`Product ${index + 1} title`}
                    imageUrl='/images/phone.jpg'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsContainer
