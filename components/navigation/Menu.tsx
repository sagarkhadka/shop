'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { navData } from './nav-data'
import Link from 'next/link'
import { Fragment } from 'react'

const Menu = () => {
  return (
    <>
      <Menubar>
        {navData.map(({ title, children }) => (
          <MenubarMenu key={title}>
            <MenubarTrigger>{title}</MenubarTrigger>
            {children.length && (
              <MenubarContent>
                {children.map(({ title, url }) => (
                  <Fragment key={title}>
                    <Link href={`/${url}`}>
                      <MenubarItem>{title}</MenubarItem>
                    </Link>
                  </Fragment>
                ))}
              </MenubarContent>
            )}
          </MenubarMenu>
        ))}
      </Menubar>
    </>
  )
}

export default Menu
