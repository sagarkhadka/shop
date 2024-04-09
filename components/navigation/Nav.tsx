'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { navData } from './nav-data'
import User from './User'

const Nav = () => {
  return (
    <>
      <div className='mb-8 flex h-[75px] items-center bg-white'>
        <div className='container'>
          <div className='grid grid-cols-12 justify-between py-3'>
            <h4 className='col-span-3 text-lg font-semibold'>Logo</h4>

            <div className='col-span-6 flex justify-center'>
              <Menubar>
                {navData.map(({ title, children }) => (
                  <MenubarMenu key={title}>
                    <MenubarTrigger>{title}</MenubarTrigger>
                    {children.length && (
                      <MenubarContent>
                        {children.map(({ title }) => (
                          <MenubarItem key={title}>{title}</MenubarItem>
                        ))}
                      </MenubarContent>
                    )}
                  </MenubarMenu>
                ))}
              </Menubar>
            </div>

            <div className='col-span-3 flex justify-end'>
              <User />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
