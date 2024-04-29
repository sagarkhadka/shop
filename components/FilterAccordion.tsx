'use state'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Star } from 'lucide-react'
import { Fragment } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const FilterAccordion = () => {
  return (
    <>
      <div className=''>
        <h6 className='mb-4 text-lg font-semibold'>Filter</h6>
        <Accordion type='multiple'>
          <AccordionItem value='color'>
            <AccordionTrigger>Color</AccordionTrigger>
            <AccordionContent>
              <Select onValueChange={(value) => console.log(value)}>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Choose Color' />
                </SelectTrigger>
                <SelectContent>
                  {['Red', 'Green', 'Yellow', 'Blue', 'Black', 'Purple'].map(
                    (color) => (
                      <Fragment key={color}>
                        <SelectItem value={color}>{color}</SelectItem>
                      </Fragment>
                    )
                  )}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='category'>
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <Select onValueChange={(value) => console.log(value)}>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Choose Category' />
                </SelectTrigger>
                <SelectContent>
                  {[
                    'Fashion',
                    'Electronic Devices',
                    'TV & Home Appliances',
                    'Home & Lifestyle'
                  ].map((category) => (
                    <Fragment key={category}>
                      <SelectItem value={category}>{category}</SelectItem>
                    </Fragment>
                  ))}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='Size'>
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent>
              <Select onValueChange={(value) => console.log(value)}>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Choose Size' />
                </SelectTrigger>
                <SelectContent>
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((color) => (
                    <Fragment key={color}>
                      <SelectItem value={color}>{color}</SelectItem>
                    </Fragment>
                  ))}
                </SelectContent>
              </Select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='Price'>
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>
              <div className='flex items-center gap-1'>
                <Input placeholder='Min.' className='focus-visible:ring-0' />
                -
                <Input placeholder='Max.' className='focus-visible:ring-0' />
                <Button className='rounded-md'>Apply</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='rating'>
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              <div className='space-y-4'>
                <div className='relative flex w-fit cursor-pointer items-center gap-3 duration-200 hover:after:absolute hover:after:-bottom-1.5 hover:after:h-px hover:after:w-full hover:after:bg-primary-orange/40'>
                  {Array(5)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Star size={18} color='#e99b4f' fill={'#e99b4f'} />
                      </Fragment>
                    ))}
                </div>
                <div className='relative flex w-fit cursor-pointer items-center gap-3 duration-200 hover:after:absolute hover:after:-bottom-1.5 hover:after:h-px hover:after:w-full hover:after:bg-primary-orange/40'>
                  {Array(4)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Star size={18} color='#e99b4f' fill={'#e99b4f'} />
                      </Fragment>
                    ))}
                </div>
                <div className='relative flex w-fit cursor-pointer items-center gap-3 duration-200 hover:after:absolute hover:after:-bottom-1.5 hover:after:h-px hover:after:w-full hover:after:bg-primary-orange/40'>
                  {Array(3)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Star size={18} color='#e99b4f' fill={'#e99b4f'} />
                      </Fragment>
                    ))}
                </div>
                <div className='relative flex w-fit cursor-pointer items-center gap-3 duration-200 hover:after:absolute hover:after:-bottom-1.5 hover:after:h-px hover:after:w-full hover:after:bg-primary-orange/40'>
                  {Array(2)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Star size={18} color='#e99b4f' fill={'#e99b4f'} />
                      </Fragment>
                    ))}
                </div>
                <div className='relative flex w-fit cursor-pointer items-center gap-3 duration-200 hover:after:absolute hover:after:-bottom-1.5 hover:after:h-px hover:after:w-full hover:after:bg-primary-orange/40'>
                  {Array(1)
                    .fill('')
                    .map((_, index) => (
                      <Fragment key={index}>
                        <Star size={18} color='#e99b4f' fill={'#e99b4f'} />
                      </Fragment>
                    ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default FilterAccordion
