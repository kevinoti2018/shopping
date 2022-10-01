import { faArrowAltCircleLeft,faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/slider.css'
const Slider = () => {
  return (
    <div className='s-container'>
    <div className='s-arrow left'>
    <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
    </div>
    <div className='s-arrow right'>
    <FontAwesomeIcon icon={faArrowAltCircleRight}/>
    </div>
    </div>
  )
}

export default Slider