import React, { useState, ReactElement } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const items: ReactElement[] = [
  <div className='item' data-value='1' key={125}>
    1
  </div>,
  <div className='item' data-value='2' key={875}>
    2
  </div>,
  <div className='item' data-value='3' key={876}>
    3
  </div>,
  <div className='item' data-value='4' key={877}>
    4
  </div>,
  <div className='item' data-value='5' key={878}>
    5
  </div>
]

const thumbItems = (
  items: ReactElement[],
  setThumbIndex: React.Dispatch<React.SetStateAction<number>>,
  setThumbAnimation: React.Dispatch<React.SetStateAction<boolean>>
): ReactElement[] => {
  return items.map((item, i) => (
    <div
      className='thumb'
      onClick={() => {
        setThumbIndex(i)
        setThumbAnimation(true)
      }}
      key={i}
    >
      {item}
    </div>
  ))
}

const Carousel: React.FC = () => {
  const [mainIndex, setMainIndex] = useState<number>(0)
  const [mainAnimation, setMainAnimation] = useState<boolean>(false)
  const [thumbIndex, setThumbIndex] = useState<number>(0)
  const [thumbAnimation, setThumbAnimation] = useState<boolean>(false)
  const [thumbs] = useState<ReactElement[]>(
    thumbItems(items, setThumbIndex, setThumbAnimation)
  )

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncMainBeforeChange = () => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = (e: any) => {
    setMainAnimation(false)

    if (e.type === 'action') {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
    }
  }

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  return (
    <>
      <AliceCarousel
        activeIndex={mainIndex}
        animationType='fadeout'
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        items={items}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />
      <div className='thumbs'>
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
        <div className='btn-prev' onClick={slidePrev}>
          &lang;
        </div>
        <div className='btn-next' onClick={slideNext}>
          &rang;
        </div>
      </div>
    </>
  )
}

export default Carousel
