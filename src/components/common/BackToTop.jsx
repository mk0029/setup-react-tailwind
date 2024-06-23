import React, { useEffect, useState } from 'react'
import Icons from './Icons'

const BackToTop = () => {
  const [isBackTopVisible, setIsBackTopVisible] = useState(false)
  useEffect(() => {
    const handleOffset = () => {
      if (window.pageYOffset > 100) {
        setIsBackTopVisible(true)
      } else setIsBackTopVisible(false)
    }
    window.addEventListener('scroll', handleOffset)
  }, [])

  const handleScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div
      onClick={handleScroll}
      className={`group fixed bottom-5 right-5 z-40 size-8 cursor-pointer rounded-full border border-solid border-black bg-black p-2 common-transition hover:scale-110 hover:shadow-hover-white ${
        isBackTopVisible ? 'translate-y-0' : 'translate-y-20'
      }`}
    >
      <Icons
        icon="chevron-double-up"
        className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default BackToTop
