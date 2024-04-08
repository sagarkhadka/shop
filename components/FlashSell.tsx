import { Flame } from 'lucide-react'

import SectionHeadline from './SectionHeadline'

const FlashSell = () => {
  return (
    <>
      <section className='section-space container'>
        <SectionHeadline
          title='Flash Sell'
          icon={<Flame color='#ff421d' size={34} />}
        />
      </section>
    </>
  )
}

export default FlashSell
