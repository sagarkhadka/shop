import CartCard from '@/components/cart/CartCard'

const CartContainer = () => {
  return (
    <>
      <section className='container'>
        <h4 className='mb-6 text-xl font-semibold'>Checkout</h4>
        <div className='space-y-4 rounded-lg border border-deep-blue/60 p-6'>
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </section>
    </>
  )
}

export default CartContainer
