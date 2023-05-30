import React, { useState } from 'react'
import Cover from '../images/cover-landing-page 1.png'
import PlayStore from '../images/image 133.png'
import AppleStore from '../images/image 134 (Traced).png'

const About = () => {
    const [flag, setFlag] = useState(true)
  return (
    <div className='mt-20 flex flex-col justify-center items-center  w-full lg:justify-start lg:items-start font-Rubik'>
      <div className='flex lg:ml-20'>
        <div className={flag ? 'border-b-2 border-[#0AF685] cursor-pointer' : 'cursor-pointer'} onClick={() => setFlag(true)} >Reeroute for Transporter</div>
        <div className={!flag ? 'border-b-2 border-[#0AF685] ml-10 cursor-pointer' : 'ml-10 cursor-pointer'} onClick={() => setFlag(false)}>Reeroute for Owners</div>
      </div>
      <div className='w-5/6 ml-20 lg:w-85 h-[2px] bg-[#F4F4F4] '></div>
      <div className='flex justify-center items-center w-full  bg-[#F4F4F4] my-4 flex-col lg:flex-row '>
        <div className='w-[50%] lg:p-20'>
            <img src={`${Cover}`} className='w-[400px] p-5 '/>
        </div>

        <div className='w-full p-10 lg:pr-20 text-[#2A4F6D] lg:w-[600px] flex flex-col items-center justify-center'>
            { flag ? (
            <div>
            <div className=''>
                <h2 className='font-bold'>Real-time Tracking</h2>
                <p className='font-light'>Stay informed about your cargo's location and ETA with our real-time tracking feature. Know exactly where your shipment is throughout the entire journey.</p>
            </div>

            <div className='mt-5'>
                <h2 className='font-bold'>Transparent Pricing</h2>
                <p className='font-light'>Reeroute believes in transparency. Our platform provides upfront and competitive pricing, allowing you to make informed decisions and manage your transportation costs effectively.</p>
            </div>

            <div className='mt-5'>
                <h2 className='font-bold '>Secure Payments</h2>
                <p className='font-light'>We prioritize the security of your transactions. Reeroute ensures safe and secure online payments, giving you peace of mind while completing your bookings.</p>
            </div>

            <div className='mt-5 mb-3 lg:mb-0'>
                <div className='font-bold text-black '>Download App</div>
                <div className='mt-2 flex font-Vietnam'>
                    <button className='flex bg-black  items-center justify-center text-white p-2 w-[143px] rounded'>
                        <div>
                            <img src={`${PlayStore}`} className='w-[18px] h-[19px] mr-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-[9px] text-start'>GET IT ON</div>
                            <div className='text-[12px] ml-5px'>Google Play</div>
                        </div>
                    </button>

                    <button className='flex bg-black  items-center justify-center text-white p-2 w-[143px] rounded ml-4'>
                        <div>
                            <img src={`${AppleStore}`} className='w-[18px] h-[19px] mr-1'/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-[9px] text-start'>GET IT ON</div>
                            <div className='text-[12px] ml-5px'>App Store</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
            ) : <div>Empty</div>
}
        </div>
      </div>
    </div>
  )
}

export default About
