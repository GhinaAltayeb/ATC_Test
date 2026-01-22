import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";


import hero1 from "@/assets/hero1.webp"
import hero2 from "@/assets/hero2.webp"
import hero3 from "@/assets/hero3.webp"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Hero.css'
function Hero({ id }) {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const swiperSlides = [hero1, hero2, hero3];

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <main id={id} className="hero-section flex flex-col md:flex-row h-screen relative">
            <div className="w-full h-full md:w-1/3">
                <div className="bg-primary max-md:px-5 max-md:pt-5 h-6/7 flex flex-col justify-center items-center">
                    <div className='flex flex-col gap-20 md:gap-30 max-md:w-full items-start relative'>
                        <h1 className='text-white text-large lg:text-xlarge!'>lighting
                            <span className='block'>& BUILDING</span></h1>
                        <p className='text-secondary text-medium w-40 absolute right-0 bottom-11 md:-right-10 md:bottom-16 lg:right-5 lg:top-48'>MODERN ENERGY
                            EFFICIENT HOUSES
                            FROM 150 SQ. M.</p>
                        <motion.button
                            whileHover={{ backgroundColor: "var(--secondary)" }}
                            className='main-btn'
                        >
                            Contact us
                        </motion.button>

                    </div>
                </div>
                <div className="bg-[#313131] h-1/7" />
            </div>

            <div className="relative w-full h-full md:w-2/3">
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Navigation, EffectFade ,Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={1}
                    allowTouchMove
                    effect={'fade'}
                    fadeEffect={{
                        crossFade: true
                    }}
                    speed={1000}
                    className="h-full hero-swiper"
                    paginationposition={"bottom"}
                >
                    {swiperSlides.map((bg, index) => (
                        <SwiperSlide key={index} className='h-full max-md:pb-15'>
                            <div
                                className="h-6/7 w-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${bg})` }}
                            />
                            <div className="bg-primary h-1/7 px-5 py-7 md:px-14 flex items-center justify-between">
                                <h3 className='text-gray text-medium md:text-large tracking-[11px] opacity-5'>54+ WORKS</h3>
                                <div className='flex gap-3 md:gap-20 text-medium text-secondary'>
                                    <span className='text-white'>2750 DUFFY ST</span>
                                    <span>290 SQ. M.</span>
                                    <span>$ 240 000</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='swiper-buttons swiper-buttons-div'>
                    <motion.button
                        whileHover={{ opacity: 0.6 }}
                        ref={prevRef}
                    >
                        <FaArrowLeft size={17} fill='white' />
                    </motion.button>


                    <motion.button
                        whileHover={{ opacity: 0.6 }}
                        ref={nextRef}
                    >
                        <FaArrowRight size={17} fill='white' />
                    </motion.button>
                </div>
            </div>
        </main>
    );
}


export default Hero