import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

function OurTeamCard({ image, name, position }) {
    return (
        <div>
            <img className='w-full' src={image} alt="" />
            <motion.h5
                className='bg-white text-normal text-black px-5 py-2'
                whileHover={{ color: "var(--secondary)", cursor: 'pointer' }}
            >
                {name}
            </motion.h5>
            <p className='text-secondary text-medium px-5 py-2 mb-1'>{position}</p>
            <div className='icons flex items-center justify-between gap-3 px-5  text-dark-gray relative'>
                <div className='h-px w-16 bg-dark-gray mr-9' />
                <div className='flex gap-3 items-center'>
                    <TiSocialFacebook size={20} className='svg-hover' />
                    <FaInstagram size={15} className='svg-hover' />
                    <MdEmail size={15} className='svg-hover' />
                </div>
                <div className='absolute text-xlarge text-primary opacity-5 -top-8'>
                    {name.split(" ")[0]}
                </div>
            </div>
        </div>
    )
}

export default OurTeamCard