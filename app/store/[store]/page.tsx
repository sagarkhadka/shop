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
    </>
  )
}

export default page
