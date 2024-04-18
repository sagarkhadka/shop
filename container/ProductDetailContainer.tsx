'use client'

import { useReducer } from 'react'

import Order from '@/components/products/Order'
import ProductCarousel from '@/components/products/ProductCarousel'
import ProductDetails from '@/components/products/ProductDetails'
import StoreCard from '@/components/products/StoreCard'
import styles from '@/styles/components/productDetail.module.css'
import { INITIAL_STATE, calculationReducer } from './ProductReducer'

const ProductDetailContainer = () => {
  const [state, dispatch] = useReducer(calculationReducer, INITIAL_STATE)

  return (
    <>
      <div className={styles.product_detail_wrapper}>
        <div className={styles.product_details}>
          <div className={styles.product_images}>
            <ProductCarousel />
            <StoreCard />
          </div>
          <div className={styles.details}>
            <ProductDetails />
          </div>
        </div>
        <div className={styles.product_order}>
          <Order />
        </div>
      </div>
    </>
  )
}

export default ProductDetailContainer
