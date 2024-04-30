import ProductCard from '@/components/ProductCard'
import StoreDetail from '@/components/store/StoreDetail'

const page = () => {
  return (
    <>
      <section className='container'>
        <StoreDetail
          logo='/images/store.jpg'
          name='Your Company Name'
          review='70'
          duration={2}
        />
      </section>
      <section className='section-space'>
        <div className='container'>
          <h3 className='text-xl font-semibold md:text-3xl'>Store Best Sell</h3>
          <div className='mt-4 grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-4'>
            <ProductCard
              productTitle='Product Name'
              imageUrl='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427681.17943185.png'
            />
            <ProductCard
              productTitle='Product Name'
              imageUrl='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427681.17943185.png'
            />
            <ProductCard
              productTitle='Product Name'
              imageUrl='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427681.17943185.png'
            />
            <ProductCard
              productTitle='Product Name'
              imageUrl='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427681.17943185.png'
            />
            <ProductCard
              productTitle='Product Name'
              imageUrl='https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677427681.17943185.png'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default page
