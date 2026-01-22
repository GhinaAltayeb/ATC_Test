import React from 'react'
import { motion } from "framer-motion";

import team1 from '@/assets/team1.webp'
import team2 from '@/assets/team2.webp'
import team3 from '@/assets/team3.webp'
import team4 from '@/assets/team4.webp'
import OurTeamCard from '@/component/Cards/OurTeamCard/OurTeamCard'

import './OurTeam.css'
function OurTeam({ id }) {
    const content = [
        {
            name: "mike BALMER",
            position: "Lead Interior Designer",
            image: team1
        },
        {
            name: "sam BALMER",
            position: "Senior Architect",
            image: team2
        },
        {
            name: "jack BALMER",
            position: "Exterior & Landscape Designer",
            image: team3
        },
        {
            name: "JOHN BALMER",
            position: "Project Manager",
            image: team4
        },
    ]
    return (
        <section id={id} className='our-team-section flex flex-col gap-y-12 px-5 lg:px-32 xl:px-64 py-32 bg-[#F5F5F5]'>
            <div className='text-center'>
                <h3 className='text-black text-large mb-3'>OUR TEAM</h3>
                <p className='text-medium text-secondary'>PEOPLE BEHIND OUR SUCCESS</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-1'>
                {content.map((item, i) => (
                    <OurTeamCard
                        key={i}
                        image={item.image}
                        name={item.name}
                        position={item.position}
                    />
                ))}
            </div>
        </section>
    )
}

export default OurTeam