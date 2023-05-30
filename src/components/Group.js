import React from 'react'

const Group = () => {
  return (
    <div className='flex items-center flex-wrap p-10 lg:my-10 text-[#2A4F6D] w-full lg:flex-row lg:justify-around'>
      <div className='flex items-center justify-between'>
        <div className=' font-bold text-2xl px-1 font-Kurb'>10,000+</div>
        <div className='w-3 h-3 bg-orange-400 px-1 '></div>
        <div className=' px-2 font-League text-center'>Vehicle Owners</div>
      </div>

      <div className='flex items-center justify-center'>
        <div className=' font-bold text-2xl px-1 font-Kurb'>25,000+</div>
        <div className='w-3 h-3 bg-orange-400 px-1'></div>
        <div className=' px-2 font-League'>Successful Booking</div>
      </div>


      <div className='flex items-center justify-center'>
        <div className=' font-bold text-2xl px-1 font-Kurb'>3,000+</div>
        <div className='w-3 h-3 bg-orange-400 px-1'></div>
        <div className=' px-2 font-League'>Satisfied clients</div>
      </div>

      <div className='flex items-center justify-center'>
        <div className=' font-bold px-1 text-2xl font-Kurb'>70+</div>
        <div className='w-3 h-3 bg-orange-400 px-1'></div>
        <div className='px-2 font-League'>Cities Covered</div>
      </div>
    </div>
  )
}

export default Group
