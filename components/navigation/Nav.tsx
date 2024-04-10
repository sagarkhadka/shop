import User from './User'
import Search from './Search'
import Menu from './Menu'

const Nav = () => {
  return (
    <>
      <div className='mb-8 flex items-center bg-white py-3 shadow-xl shadow-slate-100'>
        <div className='container'>
          <div className='grid grid-cols-12 justify-between pb-5 pt-3'>
            <h4 className='col-span-3 flex items-center text-lg font-semibold'>
              Logo
            </h4>

            <div className='col-span-6 flex justify-center'>
              <Search />
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
