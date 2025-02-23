import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoHomeSharp } from 'react-icons/io5';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { FaBookmark, FaSearch, FaRegSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header id='header' className='sticky top-0 left-0 z-40 bg-[#000000d8] flex items-center h-14'>
        <div className='container-all mx-auto flex items-center justify-between px-6'>
          <div className='flex items-center gap-4'>
            <img src={logo} alt='BilTick Logo' className='h-8' />
          </div>
          
          <div className='md:hidden text-white text-2xl cursor-pointer' onClick={toggleSidebar}>
            <FaBars /> 
          </div>

          <nav className='hidden md:flex'>
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

          <div className='hidden md:flex items-center gap-4'>
            <select className='bg-[#1D1D1D80] px-3 py-2 rounded-md text-white flex items-center text-[14px] font-normal'>
              <option value=''>Ру</option>
              <option value=''>Eng</option>
              <option value=''>Uzb</option>
            </select>
            <button className='px-4 py-2 text-white rounded-md cursor-pointer'><FaRegSun /></button>
          </div>
        </div>
      </header>

      <div className={`fixed top-0 right-0 h-full w-64 bg-[#000000f8] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-end p-4'>
          <FaTimes className='text-white text-2xl cursor-pointer' onClick={toggleSidebar} /> 
        </div>
        <nav className='mt-8'>
          <ul className='flex flex-col items-start gap-7 text-white text-[12px] font-medium pl-6'>
            <NavLink to='/' className='flex items-center gap-2 hover:text-red-500' onClick={toggleSidebar}>
              <IoHomeSharp className='text-xl' />
              <span>Home</span>
            </NavLink>
            <NavLink to='/movies' className='flex items-center gap-2 hover:text-red-500' onClick={toggleSidebar}>
              <BiSolidCameraMovie className='text-xl' />
              <span>Movies</span>
            </NavLink>
            <NavLink to='/saved' className='flex items-center gap-2 hover:text-red-500' onClick={toggleSidebar}>
              <FaBookmark className='text-xl' />
              <span>Saved</span>
            </NavLink>
            <NavLink to='/search' className='flex items-center gap-2 hover:text-red-500' onClick={toggleSidebar}>
              <FaSearch className='text-xl' />
              <span>Search</span>
            </NavLink>
          </ul>
        </nav>
        <div className='mt-8 pl-6'>
          <select className='bg-[#1D1D1D80] px-3 py-2 rounded-md text-white flex items-center text-[14px] font-normal'>
            <option value=''>Ру</option>
            <option value=''>Eng</option>
            <option value=''>Uzb</option>
          </select>
          <button className='mt-4 px-4 py-2 text-white rounded-md cursor-pointer'><FaRegSun /></button>
        </div>
      </div>
    </>
  );
};

export default Header;