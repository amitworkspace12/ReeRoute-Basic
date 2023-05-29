import React from 'react'
import Navbar from '../Navbar'
import HeaderBody from './HeaderBody'
import Photo from '../../images/Photo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <div className='relative' >
      <Carousel infiniteLoop={true} showArrows={false} autoPlay={true} showStatus = {false} showThumbs={false} h-full>
                <div>
                    <img src={Photo} className='contrast-150 brightness-50 opacity-90 w-full '/>
                </div>
                <div>
                <img src={Photo} className='contrast-150 brightness-50 opacity-90  w-full'/>
               
                </div>
                <div>
                <img src={Photo} className='contrast-150 brightness-50 opacity-90  w-full'/>
                
                </div>
            </Carousel>
            <div className='mt-[500px] lg:mt-[0px]'></div>
      <Navbar/>
      <HeaderBody/>
    </div>
  )
}

export default Header
