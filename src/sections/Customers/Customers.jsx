import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';

import customer1 from '@/assets/customers1.webp'
import company1 from '@/assets/company1.webp'
import company2 from '@/assets/company2.webp'
import company3 from '@/assets/company3.webp'
import CustomersSlides from '@/component/CustomersSlides/CustomersSlides';

import 'swiper/css';
import 'swiper/css/pagination';
import './Customers.css'
import CompanyCard from '@/component/Cards/CompanyCard/CompanyCard';
function Customers({ id }) {
    const content = [
        {
            name: "KATE WILLIAMS",
            position: "Enterpreneur",
            desc: "I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.",
            image: customer1
        },
        {
            name: "ANN LEE",
            position: "Freelancer",
            desc: "I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.",
            image: customer1
        },
        {
            name: "JACK BALMER",
            position: "Manager",
            desc: "I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.",
            image: customer1
        },
    ]

    const companies = [company1, company2, company3, company1, company2]
    return (
        <section id={id} className='customers-section bg-primary px-5 lg:px-32 xl:px-64 py-24 relative '>
            {/* Customers swiper */}
            <Swiper
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                allowTouchMove={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    1024: { slidesPerView: 1, spaceBetween: 10 },
                }}
                loop={true}
                slidesPerView={1}
                modules={[Pagination, EffectFade]}
                effect={'fade'}
                fadeEffect={{
                    crossFade: true
                }}
                speed={1000}
                className={`customers-swiper`}
                paginationposition={"bottom"}
            >

                {content.map((item, index) => (
                    <SwiperSlide key={index} className="overflow-visible">
                        <CustomersSlides
                            image={item.image}
                            name={item.name}
                            position={item.position}
                            desc={item.desc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* trusted companies */}
            <div className=' ps-5 xl:ps-36'>
                <h5 className='text-medium max-md:text-center text-white opacity-50 mb-10 md:mb-4'>Trusted by</h5>
                <div className='flex max-md:flex-col gap-y-10 gap-x-20 items-center'>
                    {companies.map((company, i) => (
                        <CompanyCard key={i} image={company} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Customers