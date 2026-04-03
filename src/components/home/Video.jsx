import React from 'react'
import heroVideo from '../../assets/hero-video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='w-full h-full object-cover' autoPlay loop muted src={heroVideo}></video>
    </div>
  )
}

export default Video