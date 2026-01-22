import React from 'react'
import { motion } from "framer-motion";

function AboutCard({ image, title, desc }) {
    const textVariants = {
        rest: {
            y: 0,
        },
        hover: {
            y: -4,
        },
    }
    const underlineVariants = {
        rest: {
            width: 0,
        },
        hover: {
            width: "100%",
        },
    }
    return (
        <div className='flex flex-col gap-2'>
            <div className='relative flex items-center gap-5'>
                <img className=' w-8' src={image} alt="" />
                <motion.h5
                    className="relative inline-block cursor-pointer text-xsmall text-black"
                    variants={textVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    {title}

                    <motion.span
                        className="absolute left-0 -bottom-1 h-px bg-primary"
                        variants={underlineVariants}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </motion.h5>
                <div className='rounded-full bg-secondary opacity-50 size-5 absolute left-5 top-3'></div>
            </div>
            <p className='text-black text-xsmall opacity-70 w-40'>{desc}</p>
        </div>
    )
}

export default AboutCard