import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center text-white'>
      <div className='text-[9vw] justify-center flex items-center uppercase leading-[8vw]'>
        L'étincelle
      </div>
      <div className='text-[9vw] justify-center flex items-center uppercase leading-[8vfw]'>
        qui
        <div className='h-[8vw] w-[14vw] rounded-full mt-4 overflow-hidden '>
          <Video/>
        </div>
        génère
      </div>
      <div className='text-[9vw] justify-center flex items-center uppercase leading-[10vw]'>
        la créativité
      </div>
    </div>
  )
}

export default HomeHeroText