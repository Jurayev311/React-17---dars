import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoHomeSharp } from 'react-icons/io5';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { FaBookmark } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegSun } from "react-icons/fa";


const Header = () => {
  return (
    <header id='header' className='bg-black py-4'>
      <div className='container-all mx-auto flex items-center justify-between px-6'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt='BilTick Logo' className='h-8' />
        </div>
        
        <nav>
          <ul className='flex items-center gap-7 text-white text-[12px] font-medium'>
            <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-red-500'>
              <IoHomeSharp className='text-xl' />
              <span>Home</span>
            </NavLink>
            <NavLink to='/movies' className='flex flex-col items-center gap-1 hover:text-red-500'>
              <BiSolidCameraMovie className='text-xl' />
              <span>Movies</span>
            </NavLink>
            <NavLink to='/saved' className='flex flex-col items-center gap-1 hover:text-red-500'>
              <FaBookmark className='text-xl' />
              <span>Saved</span>
            </NavLink>
            <NavLink to='/search' className='flex flex-col items-center gap-1 hover:text-red-500'>
              <FaSearch className='text-xl' />
              <span>Search</span>
            </NavLink>
          </ul>
        </nav>

        <div className='flex items-center gap-4'>
          <select className='bg-[#1D1D1D80] px-3 py-2 rounded-md text-white flex items-center text-[14px] font-normal'>
            <option value=''>
               Ру
            </option>
            <option value=''>
               Eng
            </option>
            <option value=''>
               Uzb
            </option>
          </select>
          <button className='px-4 py-2 text-white rounded-md cursor-pointer'><FaRegSun /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
