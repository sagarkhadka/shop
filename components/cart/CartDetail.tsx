import { currencyFormat } from '@/utils/currencyFormat'
import { Button } from '../ui/button'

interface ICartDetail {
  isSelected: boolean
  subTotal: number
  shippingCharge: number
  total: number
}

const CartDetail = ({
  isSelected,
  subTotal,
  shippingCharge,
  total
}: ICartDetail) => {
  return (
    <>
      <div className='space-y-3'>
        <div className='space-y-3 [&>*>h6]:text-right [&>*>h6]:text-base [&>*>h6]:font-semibold [&>*>h6]:text-slate-600'>
          <div className='flex items-center justify-between'>
            <h6>Sub Total</h6>
            <p>{currencyFormat(subTotal)}</p>
          </div>
          <div className='flex items-center justify-between'>
            <h6>Shipping</h6>
            <p>{currencyFormat(shippingCharge)}</p>
          </div>
          {/* <div className='flex items-center justify-between border-b border-b-deep-blue/30 pb-3'>
            <h6>Total Discount</h6>
            <p>- {currencyFormat(127)}</p>
          </div> */}
          <div className='flex items-center justify-between border-t border-b-deep-blue/30 pt-3'>
            <h6>Total</h6>
            <p>{currencyFormat(total)}</p>
          </div>
          <Button className='!mt-6 w-full' disabled={!isSelected}>
            Confirm Order
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartDetail
