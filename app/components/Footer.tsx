import React from 'react'

const Footer = () => {
    return (
        <div className='mt-6 text-sm lg:flex justify-around mb-4 border-t-1 border-gray-600 shadow-lg'>
            <div className=''>
                <p className='font-semibold mb-2'>FinanceX</p>
                <p> We are here to help you</p>
            </div>
            <div>
                <p className='font-semibold mb-2'> Company</p>
                <p>About Us</p>
                <p> Careers</p>
                <p> Pricing </p>
            </div>
            <div>
                <p className='font-semibold mb-2'> Resources</p>
                <p>Templates</p>
                <p>Tutorials</p>
                <p>Free Resources</p>
                <p>Contract Templates</p>
            </div>
            
        </div>
    )
}

export default Footer