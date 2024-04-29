'use client'

import { useSearchParams } from 'next/navigation'
import { Filter } from 'lucide-react'

import ProductCard from '@/components/ProductCard'
import FilterAccordion from '@/components/FilterAccordion'
import styles from '@/styles/components/product_list.module.css'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const ProductsContainer = () => {
  const params = useSearchParams()
  const category = params.get('category')
  const subCategory = params.get('sub-category')

  return (
    <>
      <section className='container'>
        <div className={`${styles.product_layout}`}>
          <div className={styles.filter_container}>
            <div className={styles.mobile_filter}>
              <Sheet>
                <SheetTrigger>
                  <Button variant={'link'}>
                    <Filter />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                  </SheetHeader>
                  <FilterAccordion />
                </SheetContent>
              </Sheet>
            </div>
            <div className={styles.laptop_filter}>
              <FilterAccordion />
            </div>
          </div>
          <div className={styles.product_container}>
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
      </section>
    </>
  )
}

export default ProductsContainer
