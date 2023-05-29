import React from 'react'
import Truck from '../images/Photo (1).png'
import Icon from '../images/Icon.png'
import Icon1 from '../images/Icon (1).png'
import Icon3 from '../images/Icon4.png'
import Icon4 from '../images/Icon (2).png'
import Icon5 from '../images/Icon 5.png'
import Icon6 from '../images/Icon (3).png'
import Tag from '../images/Feature Tag.png'

const WhyChoose = () => {
  return (
    <div className='flex flex-col w-full lg:flex-row justify-center items-center lg:justify-start lg:items-start font-Rubik'>
      <div className='bg-[#2A4F6D] lg:w-1/2 lg:h-[600px] relative w-full p-5'>
        <img src={`${Truck}`} className=' left-[20%] top-[7%] w-[700px] lg:absolute'/>
        <img src={Tag} className='lg:absolute w-[300px] bottom-[16.5%] left-[46%]'/>
      </div>

      <div className='lg:w-1/2 w-full p-10  lg:p-[99px] lg:pl-[120px]  text-[#2A4F6D] bg-[#F4F4F4] lg:h-[600px]'>
        <div className='border-l-4 border-orange-400 font-[12px] pl-1 bg-slate-200 px-1 w-[180px]'>Why Choose Reeroute</div>
        <h2 className='text-2xl font-bold mt-1'>Choose Reeroute for <br/> Reliable and Convenient <br/> Tranport Solutions</h2>
        <p className='mt-4  text-justify pr-10 font-Kurb'>With Reeroute, experience the perfect blend of reliability and convenience in your transportation needs. Our extensive network, user-friendly platform, and dedicated support ensure a seamless and stress-free booking process. Trust us to connect you with trusted transporters and provide efficient solutions for all your cargo requirements.</p>

        <div className='flex flex-col mt-4'>
            <div className='flex pr-10 '>
              <div className='flex  items-center w-1/2'>
                <img src={Icon} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>Extensive <br/> Tranport Network</div>
                </div>

                <div className='flex justify-center items-center'>
                <img src={Icon1} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>User-Friendly Interface</div>
                </div>
            </div>

            <div className='flex  pr-10 mt-3'>
              <div className='flex  items-center w-1/2'>
                <img src={Icon3} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>Real-Time Shipment <br/> Tracking</div>
                </div>

                <div className='flex justify-center items-center'>
                <img src={Icon4} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>Tranparent Pricing</div>
                </div>
            </div>


            <div className='flex pr-10 mt-3'>
              <div className='flex  items-center w-1/2'>
                <img src={Icon5} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>Document <br/> Management</div>
                </div>

                <div className='flex justify-center items-center'>
                <img src={Icon6} alt='image' className='w-[50px]'/>
                <div className='font-medium text-[14px] ml-1'>Customizable Truck Selection</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default WhyChoose
