import React from 'react'
import Navbar from '../Navbar'
import HeaderBody from './HeaderBody'
import Photo from '../../images/Photo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Sidebar from '../MobileSidebar';

const Header = () => {
  return (
    <div className='relative' >
       
         {/* <Sidebar/> */}
      <Carousel infiniteLoop={true} showArrows={false} autoPlay={true} showStatus = {false} showThumbs={false} h-full dynamicHeight={false} className='h-[400px]'>
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
            <Navbar/>
        
            <div className='mt-[500px] md:mt-[400px]'></div>
      
      <HeaderBody/>
    </div>
  )
}

export default Header
