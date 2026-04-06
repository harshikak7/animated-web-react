import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col'>
        <HomeHeroText />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home