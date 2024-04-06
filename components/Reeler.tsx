'use client'

import Reeller from 'reeller'
import gsap from 'gsap'
import { useEffect } from 'react'

Reeller.registerGSAP(gsap)

const Reeler = () => {
  useEffect(() => {
    const reeller = new Reeller({
      container: '.my-reel',
      wrapper: '.my-reel-wrap',
      itemSelector: '.my-reel-item',
      speed: 10
    })
  }, [])

  return (
    <>
      <div className='my-reel py-14'>
        <div className='my-reel-wrap flex gap-8'>
          <div className='my-reel-item text-semibold rounded-full bg-slate-200 px-8 py-3 text-xl'>
            Hello
          </div>
          <div className='my-reel-item text-semibold rounded-full bg-slate-200 px-8 py-3 text-xl'>
            Hello
          </div>
          <div className='my-reel-item text-semibold rounded-full bg-slate-200 px-8 py-3 text-xl'>
            Hello
          </div>
          <div className='my-reel-item text-semibold rounded-full bg-slate-200 px-8 py-3 text-xl'>
            Hello
          </div>
          <div className='my-reel-item text-semibold rounded-full bg-slate-200 px-8 py-3 text-xl'>
            Hello
          </div>
        </div>
      </div>
    </>
  )
}

export default Reeler
