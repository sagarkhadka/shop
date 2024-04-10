import FilterAccordion from '@/components/FilterAccordion'

const ProductListing = () => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <FilterAccordion />
        </div>
      </div>
    </>
  )
}

export default ProductListing
