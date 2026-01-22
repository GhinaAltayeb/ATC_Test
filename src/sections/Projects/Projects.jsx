import React, { useEffect, useRef, useState } from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Share from "yet-another-react-lightbox/plugins/share";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import project1 from "@/assets/project1.webp"
import project2 from "@/assets/project2.webp"
import project3 from "@/assets/project3.webp"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css'
function Projects({ id }) {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperSlides = [project1, project2, project3, project1, project3];
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState("")

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
        <section id={id} className='projects-section py-16 flex flex-col gap-y-10 lg:gap-y-24 bg-white relative'>
            <div className='flex max-lg:flex-col gap-y-1 gap-x-20 items-center text-primary px-5 lg:px-32 xl:px-64 relative overflow-hidden'>
                <h3 className='text-xlarge'>PROJECTS</h3>
                <p className='opacity-70 text-medium max-lg:text-center max-lg:mb-3'>
                    Below you can take a look at our featured and recent projects that have been numerously awarded for
                    our unique light products.
                </p>
                <div className='absolute h-1 bg-secondary bottom-0 w-full' />
            </div>
            <div className='relative'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    centeredSlides={true}
                    slidesPerView="auto"
                    allowTouchMove
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 50 },
                        1028: { slidesPerView: 2, spaceBetween: 170 },
                    }}
                    speed={1200}
                    className="projects-swiper h-[500px] lg:h-[400px] "
                    paginationposition={"bottom"}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {swiperSlides.map((bg, index) => (
                        <SwiperSlide key={index} className='max-lg:flex flex-col'>
                            <div
                                className="relative overflow-hidden h-1/2 lg:h-full lg:w-xl bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                <button
                                    className='bg-secondary view-btn'
                                    onClick={() => {
                                        setOpen(true)
                                        setImage(bg)
                                    }}
                                >
                                    <IoSearchSharp size={20} fill='var(--color-white)' />
                                </button>
                            </div>

                            {/* black div */}
                            <div className='black-div w-82'>
                                <div className='text-white text-medium flex gap-2 max-lg:justify-center'>
                                    MARCH 15, 2022
                                    <span className='opacity-20'>|</span>
                                    ARCHITECTURE
                                </div>
                                <h3 className='text-secondary text-large/9'>
                                    3119 MULBERRY LN,
                                    <span className='block'>NEWCASTLE, OK</span>
                                </h3>
                                <p className='text-white opacity-50'>
                                    We have worked on this project for three
                                    months to completely extend and redesign
                                    the old 2-storey house.
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        {
                            src: image,
                            alt: "project image",
                            width: 3840,
                            height: 2560,
                        },
                    ]}
                    plugins={[Download, Zoom, Share]}
                    render={{
                        buttonPrev: () => null,
                        buttonNext: () => null,
                    }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 1.5,
                        doubleTapDelay: 300,
                        doubleClickDelay: 300,
                        keyboardMoveDistance: 50,
                        wheelZoomDistanceFactor: 100,
                        pinchZoomDistanceFactor: 100,
                    }}
                />

                <div className='flex flex-col gap-y-3 swiper-buttons'>
                    <button
                        ref={prevRef}
                    >
                        <FaArrowLeft size={17} fill='var(--primary)' />
                    </button>

                    <button
                        ref={nextRef}
                    >
                        <FaArrowRight size={17} fill='var(--primary)' />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projects