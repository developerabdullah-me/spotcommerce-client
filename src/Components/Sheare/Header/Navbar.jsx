/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import style from './Navbar.module.css'
import { NavLink, Link, useNavigate } from 'react-router-dom';

import logo from './spot-commerce-logo.png'
const Navbar = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);

    window.addEventListener('scroll', () => {
        const { scrollY } = window;
        if (scrollY > 0) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    const styling = ({ isActive }) => {
        return isActive ? 'text-[#F66B0e] text-xl font-bold' : 'text-white text-xl  font-bold';
    }

    return (
        // <div className={`fixed-top position-sticky
        //  left-0 right-0 z-[999] ${scroll && !menu && 'bg-zinc-900 transition-all duration-500'} ${menu && 'bg-black/95'} bg-[#333333CC]`}>
      <div className={`fixed top-0 left-0 right-0 z-[999] ${scroll && !menu && 'bg-zinc-900 transition-all duration-500'} ${menu && 'bg-black/95'} bg-[#333333CC]`}>

            <div className={`h-14 flex justify-between items-center py-5 px-4 max-w-[80rem] mx-auto `}>
               
               
                {/* mega-menu */}
               <div className="">
               <div class=" flex font-bold">
            <ul class="menu menu-horizontal p-0 ">
             
            <li className='' tabindex="0" className={styling}>
                <NavLink to='/' className={styling}>
                  SERVICES
                
                </NavLink>
                <ul class="p-2 bg-[#222] text-white" id={styling} style={{ zIndex: "11111" }}>
                  <li className=''>
                    <NavLink className={styling} to="/catering">
                      Catering
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/audiovisual">
                      Audiovisual
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/sound-lighting">
                      Sound And Lighting
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/event-linen">
                      Event Linen Rentals
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/destination">
                      Destination Management
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/logistics-registration">
                      Logistics And Registration
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/venue-facility">
                      Venue & Facility Negotiation
                    </NavLink>
                  </li>
                  <li className=''>
                    <NavLink className={styling} to="/photography">
                      Videography & Photography
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
          {/* logo */}
               </div>
               <div className="">
                <Link to='/'>
                <img className='h-10' src={logo} alt="" />
                
                </Link>
               </div>
               <div className="">
                err
               </div>

                  
                
            </div>

        </div>
    );
};

export default Navbar;