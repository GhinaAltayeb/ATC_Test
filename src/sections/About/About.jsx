import React from 'react'
import AboutCard from '@/component/Cards/AboutCard/AboutCard'
import { motion, useMotionValue, useTransform } from "framer-motion";

import about1 from '@/assets/about1.webp'
import about2 from '@/assets/about2.webp'
import about3 from '@/assets/about3.webp'
import background from '@/assets/aboutBackground.webp'

import './About.css'
function About({ id }) {
    const content = [
        {
            title: "lighting",
            desc: "We provide high-quality lighting services.",
            image: about1
        },
        {
            title: "interior lighting",
            desc: "Our team offers unique and stylish architecture solutions.",
            image: about2
        },
        {
            title: "LIGHTING DESIGN",
            desc: "Let our team design unique lighting for your home.",
            image: about3
        },
    ]

    //image animation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const translateX = useTransform(x, [-0.5, 0.5], [-20, 20]);
    const translateY = useTransform(y, [-0.5, 0.5], [-20, 20]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(relX);
        y.set(relY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }
    return (
        <section id={id}
            className='about-section overflow-hidden py-16 px-5 flex gap-y-10
                lg:ps-40 lg:pe-30 xl:ps-80 xl:pe-60 max-md:flex-col justify-between md:items-center relative'
        >
            {/* cards */}
            <div className='flex md:flex-col flex-row flex-wrap max-md:items-center gap-16 relative z-10'>
                {content.map((item, i) => (
                    <AboutCard
                        key={i}
                        title={item.title}
                        image={item.image}
                        desc={item.desc}
                    />
                ))}
            </div>

            {/* background */}
            {/* <div
                className='w-3xl h-[649px] bg- bg-no-repeat bg-center absolute left-[30%] top-5 -z-1'
                style={{ backgroundImage: `url(${background})` }}
            /> */}

            <div
                className="absolute w-full h-1/2 md:w-3xl md:h-[600px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className="absolute inset-0 md:left-[15%] md:top-5 w-full h-full bg-cover md:bg-contain bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${background})`,
                        x: translateX, y: translateY
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                />
            </div>

            {/* Form */}
            <div className=' relative flex flex-col gap-y-7 z-10'>
                <h3 className='text-large/8 text-black'>
                    FIND OUT THE PRICE
                    <span className='block'>OF YOUR light products</span>
                </h3>
                <p className='text-medium text-secondary'>WE WILL CONTACT YOU WITHIN 24 HOURS</p>
                <form action="" className='flex flex-col gap-y-10 rounded-md bg-primary shadow-2xl py-14 px-11'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Phone' />

                    <motion.button
                        type='submit'
                        className='main-btn bg-secondary self-start'
                        whileHover={{ backgroundColor: "var(--primary)", borderColor: "var(--secondary)" }}
                    >
                        Submit
                    </motion.button>
                </form>
            </div>
        </section>
    )
}

export default About