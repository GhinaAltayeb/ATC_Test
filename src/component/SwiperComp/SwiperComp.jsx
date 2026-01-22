import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperComp.css'
function SwiperComp({ pagination, navigation, children, size, sizeSM, className }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const enabledModules = navigation ? [Autoplay, Pagination, Navigation] : [Autoplay, Pagination];
    return (
        <>
            <Swiper
                spaceBetween={15}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={pagination ? {
                    clickable: true,
                } : false}
                allowTouchMove={true}
                breakpoints={{
                    0: {
                        slidesPerView: size,
                        spaceBetween: 20,
                    },
                    550: {
                        slidesPerView: size,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: sizeSM,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: sizeSM,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: size,
                        spaceBetween: 10,
                    },
                }}
                loop={true}
                onBeforeInit={navigation ? (swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                } : undefined}
                navigation={navigation ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                } : false}
                slidesPerView={size ?? 1}
                modules={enabledModules}
                className={`mySwiper ${className}`}
                paginationposition={"bottom"}
                style={{ '--swiper-pagination-color': 'var(--accent-light)' }}

            >
                {children}
                {navigation && (
                    <>
                        <button
                            ref={prevRef}
                            className="custom-prev group cursor-pointer z-30 absolute -translate-y-1/2 w-10 h-10 flex items-center justify-center transition"
                        >
                            <IoIosArrowDropleftCircle className='fill-text-primary group-hover:fill-text-secondary group-disabled:opacity-70' size={24} />
                        </button>
                        <button
                            ref={nextRef}
                            className="custom-next group cursor-pointer z-30 absolute  -translate-y-1/2 w-10 h-10 flex items-center justify-cente transition"
                        >
                            <IoIosArrowDroprightCircle className='fill-text-primary group-hover:fill-text-secondary group-disabled:opacity-70' size={24} />
                        </button>
                    </>
                )}
            </Swiper>
        </>
    )
}

export default SwiperComp