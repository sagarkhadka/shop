'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { navData } from './nav-data'

const Menu = () => {
  return (
    <>
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
    </>
  )
}

export default Menu
