import React from 'react'
import { FaAmazon, FaPaypal, FaGoogle } from 'react-icons/fa';
import { SiWebflow} from 'react-icons/si';

const Companies = () => {
  return (
    <div className=' bg-[#Dede11] w-screen text-black mt-20 p-5 lg:mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-around mr-5 font-bold text-center items-center'>
            <p className='flex items-center gap-2'> 
                <FaPaypal/>
                Paypal
                </p>
            <p className='flex items-center gap-2'> 
            <FaAmazon/> 
                Amazon 
                </p>
            <p className='flex items-center gap-2'> 
            <FaGoogle/>
                Google
                </p>
            <p className='flex items-center gap-2'> 
            <SiWebflow/>
                Webflow
                </p>

        </div>

        </div>
  )
}

export default Companies