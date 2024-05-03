import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chahana Store',
  description: `Nepal's best top rated online shopping platform`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <section className='container grid grid-cols-12 gap-10'>
        <aside className='col-span-2 space-y-3'>
          <h5 className='text-lg font-semibold'>Account</h5>
          <Separator />
          <ul className='space-y-1'>
            <li>Manage Profile</li>
            <li>Address</li>
          </ul>
        </aside>
        <div className='col-span-10'>
          <main>{children}</main>
        </div>
      </section>
    </>
  )
}
