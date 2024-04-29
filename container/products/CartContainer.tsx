'use client'

import { useEffect, useState } from 'react'

import CartCard, { ISelected } from '@/components/cart/CartCard'
import styles from '@/styles/components/cart.module.css'
import CartDetail from '@/components/cart/CartDetail'

const CartContainer = () => {
  const [selectedItems, setSelectedItems] = useState<ISelected[]>([])
  const [subTotal, setSubTotal] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  // const [discountAmount, setDiscountAmount] = useState<number>(150)
  const [shippingCharge] = useState<number>(50)

  useEffect(() => {
    if (selectedItems.length) {
      const newSubTotal = selectedItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.totalPrice
      }, 0)

      setTotal(newSubTotal + shippingCharge)
      setSubTotal(newSubTotal)
    }
  }, [selectedItems, shippingCharge])

  return (
    <>
      <section className='container'>
        <h4 className='mb-6 text-xl font-semibold'>Checkout</h4>
        <div className={styles.cart_container}>
          <div className={styles.cart_card_wrapper}>
            <CartCard
              productTitle='Woven Overcoat'
              price={2425}
              setSelected={setSelectedItems}
              imageUrl={`https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
            <CartCard
              productTitle='Brown Bomber Jacket'
              price={3533}
              setSelected={setSelectedItems}
              imageUrl={`https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
            <CartCard
              productTitle='Denim Fur Jacket'
              price={1230}
              setSelected={setSelectedItems}
              imageUrl={`https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            />
          </div>
          <div className={styles.cart_details}>
            <h5 className='mb-4 text-xl font-semibold text-gray-600'>
              Your Order Details
            </h5>
            <CartDetail
              isSelected={selectedItems.length > 0}
              subTotal={subTotal}
              shippingCharge={shippingCharge}
              total={total}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CartContainer
