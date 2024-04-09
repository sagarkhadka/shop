import { Bath, DoorClosed, Watch } from 'lucide-react'

import SectionHeadline from './SectionHeadline'
import Image from 'next/image'

const Category = () => {
  const data = [
    {
      title: 'Disposable Diapers',
      imageUrl: '/images/art.jpg'
    },

    {
      title: 'Smartwatches',
      imageUrl: '/images/smartwatch.jpg'
    },

    {
      title: 'Bath & Body Accessories',
      imageUrl: '/images/bath.jpg'
    },

    {
      title: 'Decorative Door Stops',
      imageUrl: '/images/door.jpg'
    },

    {
      title: 'Base Layers',
      imageUrl: '/images/base.jpg'
    },

    {
      title: 'Serum & Essence',
      imageUrl: '/images/serum.jpg'
    },

    {
      title: 'Sneakers',
      imageUrl: '/images/sneaker.jpg'
    },

    {
      title: 'Bras',
      imageUrl: '/images/bras.jpg'
    },

    {
      title: 'Art Pads, Diaries 7 Folios',
      imageUrl: '/images/art.jpg'
    },

    {
      title: 'Graters, Peelers & Slicers',
      imageUrl: '/images/grater.jpg'
    },

    {
      title: 'Pots, Planters & Urns',
      imageUrl: '/images/pots.jpg'
    },

    {
      title: 'Laptop Backpack',
      imageUrl: '/images/bag.jpg'
    }
  ]

  return (
    <>
      <section className='section-space'>
        <div className='container'>
          <SectionHeadline title='Category' />
          <div className='grid grid-cols-2 rounded-lg bg-slate-50 sm:grid-cols-4 md:grid-cols-6'>
            {data.map(({ title, imageUrl }) => (
              <div
                key={title}
                className='group flex cursor-pointer flex-col items-center justify-center gap-2 p-4 duration-200 hover:shadow-md'
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  height={70}
                  width={70}
                  className='object-cover duration-200 group-hover:-translate-y-px'
                />
                <p className='text-center text-sm'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
