'use client'

import Order from '@/components/products/Order'
import ProductCarousel from '@/components/products/ProductCarousel'
import ProductDetails from '@/components/products/ProductDetails'
import StoreCard from '@/components/products/StoreCard'
import styles from '@/styles/components/productDetail.module.css'

const ProductDetail = () => {
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

export default ProductDetail
