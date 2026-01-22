import React from 'react'

function CompanyCard({image}) {
    return (
        <div className='flex flex-col gap-2 items-center'>
            <img src={image} alt="" />
            <h5 className='text-white text-normal uppercase'>Company</h5>
        </div>
    )
}

export default CompanyCard