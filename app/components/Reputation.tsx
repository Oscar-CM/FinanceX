"use client"
import React from 'react'




const Reputation = () => {

    const reputations = [
        {
            say: "I was thoroughly entertained by this film. The acting was outstanding, and the plot was captivating.",
            name: 'Oscar Maritim',
            photo: '',
        },

        {
            say: "The technician was prompt, courteous, and fixed my issue quickly. I highly recommend this service.",
            name: 'Oscar Maritim',
            photo: '',
        },
        {
            say: "The technician was prompt, courteous, and fixed my issue quickly. I highly recommend this service.",
            name: 'Oscar Maritim',
            photo: '',
        },
      
    ]
    return (
        <div className='bg-[#Dede11] text-black p-6 mt-6'>

            <p> Our Services</p>
            <p className='text-3xl font-bold mt-4'> Global Businesses <br /> Love FinanceX</p>

            <p> What people say</p>
            <div className='flex flex-col lg:flex-row w-full justify-center gap-2 mt-4'>
                
            {reputations.map((reputation) => (
                
                <div key={reputation.name} className='bg-gray-900 text-fuchsia-100 p-3  rounded-md'>
                    <div className='flex flex-col gap-2'>
                        <p> {reputation.say}</p>
                        <p className='text-sm font-mono italic'>{reputation.name}</p>
                        <p className='r-3 bg-slate-100 rounded-full'>{reputation.photo}</p>

                    </div>



                </div>
        

        ))}

            </div>
           

        </div>
    )
}

export default Reputation