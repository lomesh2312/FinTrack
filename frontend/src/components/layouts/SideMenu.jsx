import React, { useContext, useRef } from 'react';
import { SIDE_MENU_DATA } from '../../utils/data';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { LuCamera, LuLogOut } from 'react-icons/lu';
import uploadImage from '../../utils/uploadImage';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';

const DEFAULT_PROFILE_IMAGE =
  'https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleClick = (route) => {
    if (route === '/logout') {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };

  const handleProfilePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const uploadRes = await uploadImage(file);
      const imageUrl = uploadRes.imageUrl;
      const response = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, {
        profileImageUrl: imageUrl,
      });
      if (response.data) {
        updateUser(response.data.user);
        toast.success('Profile photo updated successfully');
      }
    } catch (error) {
      console.error('Error updating profile photo:', error);
      toast.error('Failed to update profile photo');
    }
  };

  return (
    <div className='w-72 h-[calc(100vh-61px)] bg-white border-r border-[#F0EEFF] p-7 sticky top-[61px] z-20 flex flex-col transition-colors duration-300'>
      <div className='flex flex-col items-center justify-center gap-4 mt-4 mb-9 relative group'>
        <div className='relative'>
          <img
            src={user?.profileImageUrl || DEFAULT_PROFILE_IMAGE}
            alt='Profile'
            className='w-20 h-20 rounded-3xl object-cover ring-4 ring-[#F0EEFF] ring-offset-4'
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className='absolute -bottom-1 -right-1 p-2 bg-[#7C5CFC] text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-lg'
          >
            <LuCamera size={14} />
          </button>
          <input
            type='file'
            ref={fileInputRef}
            onChange={handleProfilePhotoChange}
            className='hidden'
            accept='image/*'
          />
        </div>

        <div className='text-center'>
          <h5 className='text-[16px] font-bold text-[#7C5CFC] leading-tight'>
            {user?.fullName || ''}
          </h5>
          {user?.email && (
            <p className='text-[12px] text-[#9B8EC4] mt-1 truncate max-w-[200px]'>
              {user.email}
            </p>
          )}
        </div>
      </div>

      <div className='h-px bg-[#F0EEFF] mb-5' />

      <div className='flex-1 space-y-2'>
        {SIDE_MENU_DATA.map((item, index) => {
          const isActive = activeMenu === item.label;
          return (
            <button
              key={`menu_${index}`}
              id={`nav-${item.label.toLowerCase()}`}
              className={`w-full flex items-center gap-3.5 text-[15px] font-semibold py-3.5 px-5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'sidebar-active translate-x-1'
                  : 'text-[#5B5580] hover:bg-[#F8F7FF] hover:text-[#7C5CFC]'
              }`}
              onClick={() => handleClick(item.path)}
            >
              <item.icon className={`text-[20px] ${isActive ? 'text-white' : 'text-[#7C5CFC]'}`} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className='mt-8 space-y-2 border-t border-[#F0EEFF] pt-6'>
        <button
          onClick={() => handleClick('/logout')}
          className='w-full flex items-center gap-3.5 text-[15px] font-semibold text-rose-500 py-3.5 px-5 rounded-2xl hover:bg-rose-50 transition-all duration-300'
        >
          <LuLogOut className='text-[20px]' />
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
