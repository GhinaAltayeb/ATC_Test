import React from 'react'
import quote from '@/assets/quote.webp'
function CustomersSlides({ image, desc, name, position }) {
    return (
        <div className='relative ps-5 md:ps-36 py-16'>
            <div className='flex gap-2  absolute z-50 left-0 top-0'>
                <img src={quote} alt="" />
                <img src={quote} alt="" />
            </div>
            <p className='text-large/9 text-white mb-9 text-balance'>{desc}</p>
            <div className='flex items-center gap-5'>
                <img className='rounded-2xl' src={image} alt="" />
                <div className='text-medium flex flex-col gap-1'>
                    <span className='text-white'>{name}</span>
                    <span className='text-secondary'>{position}</span>
                </div>
            </div>  
        </div>
    )
}

export default CustomersSlides