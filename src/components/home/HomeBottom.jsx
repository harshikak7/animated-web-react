import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-2 text-white'>
      <div className='border-3 leading-[4vw] border-white rounded-full px-10 pt-4 uppercase hover:border-amber-700 hover:text-amber-600'>
        <Link to='/projects' className='text-[4vw]'>Projects</Link>
      </div>
      <div className='border-3 leading-[4vw] border-white rounded-full px-10 pt-4 uppercase hover:border-amber-700 hover:text-amber-600'>
        <Link to='/agents' className='text-[4vw]'>Agents</Link>
      </div>
    </div>
  )
}

export default HomeBottom