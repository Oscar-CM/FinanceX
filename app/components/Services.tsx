import React from 'react'
import Started from './Started'
import { BsArrowUpRight} from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';



const Services = () => {
    const services = [{
        name:'Checking Accounts',
        job:'These libraries can help you create custom backgrounds for boxes or elements, but the choice of the library depends on your specific project requirements and the level of customization and complexity you need.',
        icon:<BsArrowUpRight/>
    
    }, 
    {
        name:'Opening Accounts',
        job:'These libraries can help you create custom backgrounds for boxes or elements, but the choice of the library depends on your specific project requirements and the level of customization and complexity you need.',
        icon:<BsArrowUpRight/>
    
    }, 
    {
        name:'Opening Accounts',
        job:'A software These libraries can help you create custom backgrounds for boxes or elements, but the choice of the library depends on your specific project requirements and the level of customization and complexity you need.',
        icon:<BsArrowUpRight/>
    
    }, 
    {
        name:'Opening Accounts',
        job:'These libraries can help you create custom backgrounds for boxes or elements, but the choice of the library depends on your specific project requirements and the level of customization and complexity you need.',
        icon:<BsArrowUpRight/>
    
    }, 
    {
        name:'Opening Accounts',
        job:'A software consultant in checking accounts',
        icon:<BsArrowUpRight/>
    
    }, 
        
    ]
    return (
        <div className='mt-20 m-3 p-2 mr-10 ml-10 grid sm:grid-cols-1 lg:grid-cols-3'>
            <div className='mb-4'>
                <p className='text-[#Dede11]'> Our Services</p>
                <p className='text-2xl font-semibold'>
                    Browse Our <br />Services & <span className='text-[#Dede11]'>Offerings</span>
                </p>

                <Started />
            </div>
            {services.map((service)=>(
                <div key={service.name} className='lg:ml-10 lg:h-[250px] relative
                flex flex-col gap-4 border border-gray-800 p-4 shadow-lg justify-between'>
                    <p> 
                        <AiOutlineLine/>
                        {service.name}
                        </p>
                    <p>{service.job}</p>
                    <p className='text-[#Dede11] absolute -top-4 right-1 p-4 mt-10'>{service.icon}</p>

                </div>
            ))
            }

        </div>
    )
}

export default Services