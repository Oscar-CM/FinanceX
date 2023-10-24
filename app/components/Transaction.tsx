import React from 'react'
import Started from './Started'
import Image from 'next/image'

const Transaction = () => {
    return (
        <div className='m-4 ml-10 mt-6 relative lg:flex justify-around'>
            <div className='mb-6 lg:w-2/3'>
                <p className='text-[#Dede11]'> Our Pride</p>
                <p className='text-2xl font-semibold'>
                    Real time <span className='text-[#Dede11]'><br/>Transaction Report</span>
                </p>
                <p className='mt-4'>
                If you're interested in creating 3D backgrounds and objects, Three.js is a 3D graphics library for the web. It's often used for creating complex 3D scenes and animations.
                </p>

                <Started />
            </div>
            <div className='mt-5 h-[30vh]'>
                <Image src='/ellipse2.svg' alt='ellipse' width={180} height={300} className='absolute right-0 z-0'/>
                <Image src='/oscar.svg' alt='ellipse' width={250} height={150} className='absolute right-7 lg:right-20 w-[300px] z-10'/>

            </div>
        </div>
    )
}

export default Transaction