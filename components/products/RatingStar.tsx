'use state'

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface IRating {
  readonly?: boolean
  initialValue: number
}

const RatingStar = ({ readonly, initialValue }: IRating) => {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <>
      <Rating
        iconsCount={5}
        onClick={handleRating}
        size={25}
        SVGclassName='=inline-block'
        SVGstyle={{ display: 'inline-block' }}
        transition={true}
        allowFraction={true}
        readonly={readonly ?? true}
        initialValue={initialValue}
      />
    </>
  )
}

export default RatingStar
