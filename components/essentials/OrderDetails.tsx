import Card2 from './Card2'

const OrderDetails = () => {
  return (
    <>
      <div className='py-10'>
        <Card2
          imageUrl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fshop.switch.com.my%2Fshop%2FiPhone-13&psig=AOvVaw1pZqZQbhuA5xFG-527qiPp&ust=1714908877826000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCElsfz84UDFQAAAAAdAAAAABAe'
          productTitle='Iphone 13'
          price={120000}
          quantity={1}
        />
      </div>
    </>
  )
}

export default OrderDetails
