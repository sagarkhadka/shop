import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'flex-[0,0,22%] sm:flex-[0,0,15%]'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button onClick={onClick} type='button' className=''>
        {index + 1}
      </button>
    </div>
  )
}
