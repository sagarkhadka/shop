import { Flame } from 'lucide-react'

import SectionHeadline from './SectionHeadline'
import ProductCard from './ProductCard'

const FlashSell = () => {
  return (
    <>
      <section className='section-space container'>
        <SectionHeadline
          title='Flash Sell'
          icon={<Flame color='#ff421d' size={34} />}
        />
        <div className='mt-10'>
          <ProductCard />
        </div>
      </section>
    </>
  )
}

export default FlashSell
