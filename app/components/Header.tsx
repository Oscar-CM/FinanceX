import React from 'react'
import Image from 'next/image'
import Started from './Started'


const Header = () => {
    return (
        <div className='flex justify-around mt-8 relative' >
            <Image src='/Vector.svg' width='700' height='500' alt='vetcor' className='absolute inset-0 z-10 w-screen h-72 object-cover'/>

            <div className='flex flex-col gap-6 p-4 m-4 w-1/2'>
                <p className='text-[#Dede11] font-thin'> Welcome! Future Platform </p>
                <p className='sm:text-[40px] lg:text-[45px] font-bold'>
                    The World's <br />Most Modern <br /> Card <span className='text-[#Dede11]'> Platform </span>
                </p>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='hidden lg:block'>Ab, enim? Autem voluptas porro cum fugiat exercitationem eaque repudiandae, debitis sint adipisci, perferendis molestias doloribus sed, blanditiis ducimus nobis amet quo.</span>
                </p>
                <Started />


            </div>
            <div className='relative mt-5  w-1/2 text-center'>
                <div className=''>
                    <Image src='/Ellipse.png' alt='ellipse' height={350} width={350} className=' absolute top-10 z-0 right-0' />
                    <Image src='/card3.svg' alt='card' height={450} width={450} className=' absolute top-[50px] lg:top-10 z-30 right-[30px] lg:right-[130px]' />
                    <Image src='/card1.svg' alt='card' height={450} width={450} className=' absolute top-[90px] lg:top-40 z-10 right-[30px] lg:right-[130px]' />
                </div>
                <div>


                </div>
            </div>
        </div>
    )
}

export default Header