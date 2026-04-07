import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import { LuLayoutDashboard } from 'react-icons/lu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className='flex items-center gap-4 navbar-glass py-4 px-6 sticky top-0 z-30 transition-colors duration-300'>
      <button
        className='block lg:hidden text-[#7C5CFC] hover:text-[#5B3FD4] transition-colors'
        onClick={() => setOpenSideMenu(!openSideMenu)}
        aria-label="Toggle menu"
      >
        {openSideMenu
          ? <HiOutlineX className='text-2xl' />
          : <HiOutlineMenu className='text-2xl' />}
      </button>

      <div className='flex items-center gap-2.5'>
        <div className='w-8 h-8 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] flex items-center justify-center shadow-md shadow-[#7C5CFC]/25'>
          <LuLayoutDashboard className='text-white text-sm' />
        </div>
        <h2 className='text-[20px] font-bold text-[#000000] tracking-tight'>
          Fin<span className='text-[#7C5CFC]'>Track</span>
        </h2>
      </div>

      {openSideMenu && (
        <div className='fixed top-[61px] left-0 w-full h-full z-50 bg-white animate-fade-in'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
