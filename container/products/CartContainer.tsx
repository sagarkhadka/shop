'use client'

import { useState } from 'react'

import CartCard, { ISelected } from '@/components/cart/CartCard'

const CartContainer = () => {
  const [selectedItems, setSelectedItems] = useState<ISelected[]>([])

  return (
    <>
      <section className='container'>
        <h4 className='mb-6 text-xl font-semibold'>Checkout</h4>
        <div className='space-y-4 rounded-lg border border-deep-blue/60 p-6'>
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
      </section>
    </>
  )
}

export default CartContainer
