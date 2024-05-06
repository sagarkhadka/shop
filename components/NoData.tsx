import Image from 'next/image'
import empty from '/images/empty-cart.png'
import { Button } from './ui/button'

const NoData = ({
  image,
  title,
  redirectLink
}: {
  image: string
  title: string
  redirectLink: string
}) => {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center'>
        <Image
          src={empty}
          alt=''
          height={250}
          width={250}
          className='object-contain'
        />
        <div className='space-y-4 text-center'>
          <p className='text-center'>
            Oops!! Looks like there is no any record.
          </p>
          <Button className='' variant={'link'}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  )
}

export default NoData
