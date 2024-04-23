import Image from 'next/image'
import Link from 'next/link'

import User from './User'
import Menu from './Menu'
import GlobalSearch from './GlobalSearch'

const Nav = () => {
  return (
    <>
      <div className='mb-8 flex items-center bg-white shadow-xl shadow-slate-100 md:py-3'>
        <div className='container'>
          <div className='grid grid-cols-8 justify-between gap-10 pb-5 pt-3 md:grid-cols-12'>
            <div className='col-span-4 flex items-center text-lg font-semibold md:col-span-3'>
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

            <div className='col-span-6 hidden justify-center md:flex'>
              <GlobalSearch />
            </div>

            <div className='col-span-4 flex justify-end md:col-span-3'>
              <User />
            </div>
          </div>

          <div className='hidden justify-center border-t pt-3 md:flex'>
            <Menu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
