import React, {useRef} from "react";
import Profile1 from "../images/profile2.png";
import Profile2 from "../images/profile1.png";
import Star from "../images/Star 1.png"
import Colon from "../images/“.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import left from '../images/left.png'
import Right from '../images/right.png'

const Testimonial = () => {
  const sliderRef = useRef()

  const gotoNext = () => {
    sliderRef.current.slickNext()
  }

  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 703,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
  return (
    <>
    <div className='flex flex-col justify-center text-[#091242] mt-10 p-3 lg:p-18 lg:ml-20 lg:mr-20 mb-10 font-Rubik'>
    <div className='border-l-4 border-orange-400 bg-slate-200 px-1 w-[95px]'>Testimonial</div>
      <div className="flex flex-col lg:flex-row justify-between mb-5">
      <h2 className='text-2xl font-bold flex justify-start my-2'>What Our Customer Say</h2>
      <div className="flex lg:mr-16 justify-between lg:justify-start ">
        <button className="lg:mr-4" onClick={()=> gotoNext()}><img src={left} alt="left"/></button>
        <button className="lg:ml-3" onClick={()=> gotoPrev()}><img src={Right} alt="right"/></button>
      </div>
      </div>
    <Slider {...settings}
    ref = {sliderRef}
    >
      <div className="mt-4 lg:mt-0">
       
          <div className="bg-[#F4F4F4] w-full lg:w-[600px] lg:h-[350px] p-5 lg:p-14">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div>
                  <img
                    src={Profile1}
                    alt="Profile Pic"
                    className="rounded-[50%] w-[70px]"
                  />
                </div>
                <div className="lg:ml-3 p-2">
                  <div className="lg:text-[20px] font-medium">Kathleen Smith</div>
                  <div className="text-[14px] lg:text-[16px]">Fuel Company</div>
                </div>
              </div>
              <div className="w-[60px] h-[60px] bg-[#FFB629] flex justify-center item-center rounded-[50%] py-5">
                <img src={Colon} alt="Colon" className="w-[24px] h-[20px] flex justify-center item-center"/>
              </div>
            </div>
            <p className="mt-4 italic text-justify">
              Reeroute frameworks to provide a robust synopsis for strategy
              foster collaborative thinking to further the overall value
              proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className="mt-5 flex gap-2">
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
          </div>
          </div>
        </div>
    
      <div className="mt-4 lg:mt-0">
        <div className="bg-[#2A4F6D] w-full lg:w-[600px] lg:h-[350px] p-5 lg:p-14 text-white">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div>
                <img
                  src={Profile2}
                  alt="Profile Pic"
                  className="rounded-[50%] w-[70px]"
                />
              </div>
              <div className="lg:ml-3 p-2">
                <div className="lg:text-[20px] font-medium">John Martin</div>
                <div className="text-[14px] lg:text-[16px]">Restoration Company</div>
              </div>
            </div>
            <div className="w-[60px] h-[60px] bg-[#FFB629] flex justify-center item-center rounded-[50%] py-5">
                <img src={Colon} alt="Colon" className="w-[24px] h-[20px] flex justify-center item-center"/>
              </div>
          </div>
          <p className="mt-4 italic">
            Reeroute frameworks to provide a robust synopsis for strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <div className="mt-5 flex gap-2">
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-0">
   
        <div className='bg-[#F4F4F4] w-full lg:w-[600px] lg:h-[350px] p-5 lg:p-14'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div>
                <img src={Profile1} alt='Profile Pic' className='rounded-[50%] w-[70px]'/>
              </div>
              <div className='ml-3'>
                <div className='text-[20px] font-medium'>Kathleen Smith</div>
                <div>Fuel Company</div>
              </div>
            </div>
            <div className="w-[60px] h-[60px] bg-[#FFB629] flex justify-center item-center rounded-[50%] py-5">
                <img src={Colon} alt="Colon" className="w-[24px] h-[20px] flex justify-center item-center"/>
              </div>
          </div>
          <p className='mt-4 italic'>
          Reeroute frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          <div className="mt-5 flex gap-2">
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
          </div>
        </div>
        </div>
  
      <div className="mt-4 lg:mt-0">
      <div className="bg-[#2A4F6D] w-full lg:w-[600px] lg:h-[350px] p-5 lg:p-14 text-white">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div>
                <img
                  src={Profile2}
                  alt="Profile Pic"
                  className="rounded-[50%] w-[70px]"
                />
              </div>
              <div className="ml-3">
                <div className="text-[20px] font-medium">John Martin</div>
                <div>Restoration Company</div>
              </div>
            </div>
            <div className="w-[60px] h-[60px] bg-[#FFB629] flex justify-center item-center rounded-[50%] py-5">
                <img src={Colon} alt="Colon" className="w-[24px] h-[20px] flex justify-center item-center"/>
              </div>
          </div>
          <p className="mt-4 italic">
            Reeroute frameworks to provide a robust synopsis for strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <div className="mt-5 flex gap-2">
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
            <img src={Star} alt="Star"/>
          </div>
        </div>
      </div>
     
    </Slider>
    </div>
    </>
  );
};

export default Testimonial;
