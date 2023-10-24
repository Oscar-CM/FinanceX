import React from 'react'
import Started from './Started'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div className='m-2 p-2 ml-8 flex flex-col lg:flex-row gap-2 justify-around mt-5'>
      
        <div className='mb-4'>
                <p className='text-[#Dede11]'> Benefits</p>
                <p className='text-2xl font-semibold'>
                    We have many <br />Users all over the <span className='text-[#Dede11]'><br/>World</span>
                </p>

                <Started />
            </div>
            <div>
                <Image src='/map.svg' alt='map' width={600} height={500}/>
            </div>

        
        
        </div>
  )
}

export default Benefits