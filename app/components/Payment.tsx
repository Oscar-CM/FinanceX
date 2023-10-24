import React from 'react'
import {ImLocation2} from 'react-icons/im';
import { AiOutlineGlobal} from 'react-icons/ai';
import { BsGraphUpArrow} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Payment = () => {

    const pays = [
        {
            icons:<ImLocation2/>,
            name:'Local Business Finance',
            info:' If youre looking for a creative coding library, p5.js is a JavaScript library that makes it easy',
            link:'',
        },
        {
            icons: <AiOutlineGlobal/>,
            name:'Built for Global Payments',
            info:'If youre looking for a creative coding library, p5.js is a JavaScript library that makes it easy',
            link:'',
        },
        {
            icons:<BsGraphUpArrow/>,
            name:'Make Internet for Money',
            info:'If youre looking for a creative coding library, p5.js is a JavaScript library that makes it easy',
            link:'',
        },
    ]
  return (
    <div className='m-7 flex flex-col md:flex-row justify-center lg:mr-40 lg:ml-40'>
        {pays.map((pay) =>(
            <div key={pay.name} className='flex flex-col gap-2 border border-1 border-gray-800 p-3 rounded-md'>
                <p className='text-[#Dede11]'> {pay.icons}</p>
                <p className='font-semibold'> {pay.name}</p>
                <p className='text-sm'>{pay.info}</p>

                <p className='text-xs font-light flex items-center gap-2'> Learn More <AiOutlineArrowRight/></p>
                </div>
        ))}
        </div>
  )
}

export default Payment