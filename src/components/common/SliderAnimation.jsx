import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { use, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SliderAnimation = (props) => {
    
    const pageRef = useRef(null)
    const currentPath=useLocation().pathname
    const sliderParentRef = useRef(null)
    useGSAP(function(){
    
    const tl = gsap.timeline()
    
    tl.to(sliderParentRef.current,{
      display:'block',
    })
    tl.from('.slider',{
      height:0,
      stagger:{
        amount:-0.25,
      }
    })

    tl.to('.slider',{
      y:'100%',
      stagger:{
        amount:-0.25,
      }
    })

    tl.to(sliderParentRef.current,{
      display:'none',
    })

    tl.to('.slider',{
      y:'0%',
    })

    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.3,
        scale:1.2
    })
  },[currentPath])

  return (
    <div>
        <div ref={sliderParentRef} className='h-screen w-full fixed top-0 left-0 z-50'>
            <div className='loader fixed h-screen w-full flex'>
            <div className='slider h-full w-1/5 bg-black'></div>
            <div className='slider h-full w-1/5 bg-black'></div>
            <div className='slider h-full w-1/5 bg-black'></div>
            <div className='slider h-full w-1/5 bg-black'></div>
            <div className='slider h-full w-1/5 bg-black'></div>
            </div>
        </div>

        <div ref={pageRef}>
            {props.children}
        </div>

    </div>
  )
}

export default SliderAnimation
