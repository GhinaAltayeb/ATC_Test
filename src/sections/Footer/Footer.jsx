import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCameraFill } from "react-icons/bs";

import './Footer.css'
function Footer({id}) {
    return (
        <footer id={id} className='footer-section flex flex-col gap-y-12 bg-primary px-5 md:px-64 pt-16 pb-10'>
            <div className='flex max-md:flex-col max-md:items-center max-md:text-center gap-y-7 justify-between mb-7'>
                <div>
                    <h5>OUR ADDRESS</h5>
                    <ul>
                        <li>2200 Clarendon Blvd., Suite 1400A</li>
                        <li>Arlington, VA 22201, USA</li>
                    </ul>
                </div>
                <div>
                    <h5>SOCIALS</h5>
                    <ul>
                        <li>
                            <NavLink to="/">Facebook</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Instagram</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">YouTube</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>PHONE</h5>
                    <ul>
                        <li>
                            <NavLink to="tel:1-800-901-234">
                                1-800-901-234
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Email</h5>
                    <ul>
                        <li>
                            <a href="mailto:info@atclink.org">
                                info@atclink.org
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-9'>
                <div className='flex flex-1 h-px bg-white opacity-50' />
                <div className=' flex items-center gap-2 text-white text-medium'>
                    <BsCameraFill size={20} />
                    your logo
                </div>
                <div className='flex flex-1 h-px bg-white opacity-50' />
            </div>
            <span className='text-medium text-white text-center opacity-60'>©  2024 ATC systematic. All Rights Reserved</span>
        </footer>
    )
}

export default Footer