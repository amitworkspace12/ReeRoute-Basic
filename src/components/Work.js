import React from 'react'
import Trucks from '../images/Rectangle 5553.png'
import Play from '../images/Vector (1).png'

const Work = () => {
  return (
    <div className='flex flex-col p-10 lg:p-12 text-[#2A4F6D] w-full justify-between lg:flex-row items-center '>
      <div className='w-full lg:w-1/2 lg:p-10'>
        <p className='font-Rubik border-l-4 border-orange-400 font-[12px] bg-slate-200 px-1 w-[110px] '>How it works</p>
        <h2 className='font-bold font-Rubik'>How Reeroute works</h2>
        <p className='text-justify font-Kurb'>With Reeroute, experience the perfect blend of reliability and convenience in your transportation needs. Our extensive network, user-friendly platform, and dedicated support ensure a seamless and stress-free booking process. Trust us to connect you with trusted transporters and provide efficient solutions for all your cargo requirements.</p>

        <button className='p-2 bg-orange-400 mt-5 mb-5 lg:mb-0 text-black text-[16px] font-Kurb'>Know More</button>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center relative'>
        <img src={`${Trucks}`} className='lg:w-[500px] h-[300px] contrast-150 brightness-50 opacity-90'/>
        <img src={Play} alt='Play' className='absolute top-[40%]'/>
      </div>
    </div>
  )
}

export default Work
