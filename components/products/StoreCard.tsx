import { MapPin, Star, Store, Verified } from 'lucide-react'

import { Card, CardContent } from '../ui/card'
import { DeepBlue, PrimaryOrange } from '@/utils/constants'
import { Button } from '../ui/button'
import Link from 'next/link'

const StoreCard = () => {
  return (
    <>
      <Card className='shadow-xl shadow-slate-100'>
        <CardContent className='space-y-6 p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Store size={18} color={PrimaryOrange} />
              <span>Stylish</span>
              <Verified size={16} color={DeepBlue} />
            </div>
            <span className='flex items-center gap-2'>
              <Star color='#e99b4f' fill='#e99b4f' size={16} />
              <span>4.2 (10 review)</span>
            </span>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <MapPin size={18} color={PrimaryOrange} />
              <span>Koteshowr, KTM</span>
            </div>

            <Button variant={'outline'} size='sm' asChild>
              <Link href='/store/my-store'>Visit Store</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default StoreCard
