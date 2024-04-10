import ProductCard from '@/components/ProductCard'

const page = () => {
  return (
    <>
      <section className='container'>
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
      </section>
    </>
  )
}

export default page
