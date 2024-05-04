import OrderDetails from '@/components/essentials/OrderDetails'

const page = () => {
  return (
    <>
      <section className='container'>
        <h2 className='text-2xl'>My Orders</h2>
        <OrderDetails />
      </section>
    </>
  )
}

export default page
