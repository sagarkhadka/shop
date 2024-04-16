import Image from 'next/image'
import Link from 'next/link'

import User from './User'
import Menu from './Menu'
import GlobalSearch from './GlobalSearch'

const Nav = () => {
  return (
    <>
      <div className='mb-8 flex items-center bg-white py-3 shadow-xl shadow-slate-100'>
        <div className='container'>
          <div className='grid grid-cols-12 justify-between gap-10 pb-5 pt-3'>
            <div className='col-span-3 flex items-center text-lg font-semibold'>
              <Link href='/'>
                <Image
                  src='/logo.svg'
                  alt='Chahana Store'
                  height={40}
                  width={200}
                  className='object-contain'
                />
              </Link>
            </div>

            <div className='col-span-6 flex justify-center'>
              <GlobalSearch />
            </div>

            <div className='col-span-3 flex justify-end'>
              <User />
            </div>
          </div>

          <div className='flex justify-center border-t pt-3'>
            <Menu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
