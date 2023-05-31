import React from 'react'
import Navbar from '../Navbar'
import HeaderBody from './HeaderBody'
import Photo from '../../images/Photo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MobileSidebar from '../MobileSidebar';

const Header = () => {
  return (
    <div className='relative' >
       
     <div className='mt-[50px] md:mt-0'>
      <Carousel infiniteLoop={true} showArrows={false} autoPlay={true} showStatus = {false} showThumbs={false} dynamicHeight={true} >
                <div>
                    <img src={Photo} className='contrast-150 brightness-50 opacity-90 w-full h-[100vh]'/>
                </div>
                <div>
                <img src={Photo} className='contrast-150 brightness-50 opacity-90 w-full h-[100vh]'/>
               
                </div>
                <div>
                <img src={Photo} className='contrast-150 brightness-50 opacity-90 h-[100vh] w-full '/>
                
                </div>
            </Carousel>
            </div>
            {/* <Navbar/> */}
            <MobileSidebar/>
        
            {/* <div className='mt-[500px] md:mt-0'></div> */}
      
      <HeaderBody/>
    </div>
  )
}

export default Header
