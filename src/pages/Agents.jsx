import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Agents = () => {
  
  const imgDivRef = useRef(null)
  const imgRef = useRef(null)
  const imgArray =[
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imgDivRef.current,{
      scrollTrigger:{
        trigger:imgDivRef.current,
        start: 'top 30%',
        end: 'top -120%',
        pin:true,
        scrub:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex=Math.floor(elem.progress * imgArray.length)
          } else {
            imageIndex=imgArray.length-1
          } 
          imgRef.current.src=imgArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imgDivRef} className='absolute h-[18vw] w-[14vw] rounded-2xl top-50 left-[30vw] overflow-hidden'>
          <img ref={imgRef} src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7' alt='agents' className='h-full w-full object-cover'/>
        </div>

        <div className='font-[font1]'>
          <div className=' mt-[55vh]'>
            <h1 className='relative text-[20vw] uppercase text-center leading-[16vw] font-bold'>Soixan7e<br/>Douze
            </h1>
          </div>
          <div className=' pl-[40%] mr-6'>
            <p className='relative   text-6xl text-left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit 
              non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, 
              une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, 
              mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'> 
        
      </div>

    </div>
  )
}

export default Agents