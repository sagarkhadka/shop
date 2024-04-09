import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import '@/styles/globals.css'
import Provider from './Provider'
import Nav from '@/components/navigation/Nav'
import Footer from '@/components/Footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'Multi vendor shopping app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} bg-body-gray`}>
        <Provider>
          <nav>
            <Nav />
          </nav>
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
