import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 m-2'>
        <div className='font-bold'>
            FinanceX
        </div>
        <div className='gap-5 cursor-pointer hidden lg:flex'>
            <ul>
                Why FinanceX
            </ul>
            <ul>
                Features
            </ul>
            <ul>
                Updates
            </ul>

            <ul>
                Blog
            </ul>
        </div>
        <div>
            Sign Out
        </div>
        
        </div>
  )
}

export default Navbar