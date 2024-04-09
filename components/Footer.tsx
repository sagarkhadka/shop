import { CircleHelp, PhoneCall, RefreshCcwDot, Ticket } from 'lucide-react'
import { Facebook, Instagram } from './ui/Icons'

const Footer = () => {
  return (
    <>
      <footer className='mt-24 border-t-2 border-fire-red py-16'>
        <div className='container'>
          <div className='items-center justify-between gap-4 space-y-8 border-b border-slate-300 pb-10 md:flex md:space-y-0'>
            <h4 className='text-2xl font-semibold'>
              We&apos;re Always Here To Help
            </h4>
            <div className='flex flex-wrap items-center gap-16 gap-y-6'>
              <div className='group flex flex-1 cursor-pointer items-center gap-3'>
                <div className='rounded-full bg-slate-200 p-2.5'>
                  <CircleHelp size={22} />
                </div>
                <span className='whitespace-nowrap group-hover:text-fire-red'>
                  Help Center
                </span>
              </div>
              <div className='group flex flex-1 cursor-pointer items-center gap-3'>
                <div className='rounded-full bg-slate-200 p-2.5'>
                  <RefreshCcwDot size={22} />
                </div>
                <span className='whitespace-nowrap group-hover:text-fire-red'>
                  Return & Refund
                </span>
              </div>
              <div className='group flex flex-1 cursor-pointer items-center gap-3'>
                <div className='rounded-full bg-slate-200 p-2.5'>
                  <PhoneCall size={22} />
                </div>
                <span className='whitespace-nowrap group-hover:text-fire-red'>
                  Contact Us
                </span>
              </div>
              <div className='group flex flex-1 cursor-pointer items-center gap-3'>
                <div className='rounded-full bg-slate-200 p-2.5'>
                  <Ticket size={22} />
                </div>
                <span className='whitespace-nowrap group-hover:text-fire-red'>
                  Coupon Code
                </span>
              </div>
            </div>
          </div>
          <div className='pt-10'>
            <div className='space-y-4'>
              <h6 className='font-semi-bold text-lg'>Follow Us</h6>
              <div className='flex items-center gap-4'>
                <div className='group cursor-pointer rounded-full bg-slate-200 p-3 duration-200 hover:bg-slate-900'>
                  <Facebook className='fill-slate-900 duration-200 group-hover:fill-slate-200' />
                </div>
                <div className='group cursor-pointer rounded-full bg-slate-200 p-3 duration-200 hover:bg-slate-900'>
                  <Instagram className='fill-slate-900 duration-200 group-hover:fill-slate-200' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
