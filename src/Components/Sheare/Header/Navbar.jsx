/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import style from './Navbar.module.css'
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    const navStyle = ({ isActive }) => {
        return isActive && "btnActive";
      };
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
        return isActive ? 'text-[#F66B0e] xl font-bold' : 'text-white text-xl  font-bold';
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-[999] ${scroll && !menu && 'bg-zinc-900 transition-all duration-500'} ${menu && 'bg-black/95'} bg-[#112B3c]`}>

            <div className={`h-14 flex justify-between items-center md:items-baseline pt-2 px-4 max-w-[80rem] mx-auto`}>
                
                <p className='text-white font-extrabold text-xl bree cursor-pointer select-none first-letter:text-3xl tracking-widest uppercase' onClick={() => {navigate('/');setMenu(false)}}>Portfolio</p>

                  
                <div class=" hidden lg:flex font-bold">
            <ul class="menu menu-horizontal p-0 ">
             
            <li tabindex="0" className="bg-red-500">
                <NavLink to='/' className={` `}>
                  SERVICES
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </NavLink>
                <ul class="p-2 bg-red-500" id="megaMenu" style={{ zIndex: "11111" }}>
                  <li>
                    <NavLink className="" to="/catering">
                      Catering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/audiovisual">
                      Audiovisual
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/sound-lighting">
                      Sound And Lighting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/event-linen">
                      Event Linen Rentals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/destination">
                      Destination Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/logistics-registration">
                      Logistics And Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/venue-facility">
                      Venue & Facility Negotiation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/photography">
                      Videography & Photography
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
            </div>

        </div>
    );
};

export default Navbar;