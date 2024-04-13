import { Suspense } from 'react'

import ProductsContainer from '@/container/products/ProductsContainer'

const page = () => {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        <ProductsContainer />
      </Suspense>
    </>
  )
}

export default page
