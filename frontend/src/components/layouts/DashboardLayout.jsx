import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-[#F8F7FF]'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7C5CFC]'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#F8F7FF] transition-colors duration-300'>
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className='flex'>
          {
}
          <div className='max-[1080px]:hidden'>
            <SideMenu activeMenu={activeMenu} />
          </div>

          {
}
          <div className='flex-1 px-6 py-6 overflow-y-auto'>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
