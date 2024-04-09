import Category from '@/components/Category'
import FlashSale from '@/components/FlashSale'
import HeroSlider from '@/components/HeroSlider'
import ProductCard from '@/components/ProductCard'
import SectionHeadline from '@/components/SectionHeadline'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FlashSale />
      <Category />
      <section className='section-space'>
        <div className='container'>
          <SectionHeadline title='Just For You' />
          <div className='grid grid-cols-4 gap-4'>
            {Array.from({ length: 8 }).map((_, index) => (
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
