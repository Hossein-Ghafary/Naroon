import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import '../slider/ImageSlider.css'

const ImageSlider = ({slides}) => {
const [current , setcurrent] = useState(0)
const length = slides.length

const nextslide = () =>{
    setcurrent(current === length -1 ? 0 :current +1)
}
const prevslide = () =>{
    setcurrent(current === 0 ? length -1 :current -1)
}


if (!Array.isArray(slides) || slides.length<=0) {
    return null
}

  return(
    <section className='slider'>
        <AiOutlineArrowLeft className='left-arrow' onClick={prevslide}/>
        <AiOutlineArrowRight className='right-arrow' onClick={nextslide}/>
        {SliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (
                         <img src={slide.image} alt='' className='image'/>
                    )}
                   
                </div>
            )
        })}
    </section>
  )
}

export default ImageSlider
