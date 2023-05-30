import React from 'react'

const HeaderBody = () => {
  return (
    <div className='flex flex-col lg:text-white justify-around items-center absolute top-[180px] w-full left-2 md:flex-row lg:flex-row lg:top-[45%] font-Rubik lg:h-full md:top-0 md:text-white'>
      <div className='lg:max-w-[60%] p-1'>
            <p className='border-l-4 border-yellow-400 text-[14px] pl-1'>Streamline Your Logistics with Easy Truck Booking</p> 
            <h3 className='font-bold lg:text-4xl lg:left-0'>ReeRoute: India's <br/> Fastest Truck <br/>  Booking Platform</h3>
            <ul className='list-disc mx-5 font-Kurb'>
                <li className='text-[14px]'>Pan-india operations</li>
                <li className='text-[14px]'>Associated with 10000+ Vehicle Owners</li>
                <li className='text-[14px]'>Guaranteed Timely Payments</li>
            </ul>
      </div>
      <div className='w-full md:w-[30%] '>
            <div className='bg-white text-black p-10 w-[90%]  rounded-md'>
                <h1 className='text-center text-lg font-bold'>Book Your Truck</h1>
                <form>
                    <div className='flex flex-col mt-10 my-4'>
                        <label className='text-[14px]'>From</label>
                        <input type='text' className='border-2 border-gray-200 p-1 w-full rounded-sm outline-none' placeholder='Enter origin city'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[14px]'>To</label>
                        <input type='text' className='p-1 border-2 border-gray-200 px-1 rounded-sm outline-none' placeholder='Enter destination city'/>
                    </div>

                    <button className='bg-[#F49454] w-full mt-20 p-1 '>Next</button>
                </form>
            </div>
      </div>
    </div>
  )
}

export default HeaderBody
