import React from 'react';
import { LuTrendingUpDown } from 'react-icons/lu';

const AuthLayout = ({ children }) => {
  return (
    <div className='flex w-full h-screen overflow-hidden font-["Inter"]'>

      <div className='w-full md:w-[50vw] lg:w-[55vw] h-full flex flex-col justify-center px-8 md:px-12 lg:px-20 bg-[#F8F7FF] dark:bg-[#F8F7FF] z-10 transition-colors duration-300'>

        <div className='absolute top-7 left-8 md:left-12 flex items-center gap-2.5'>
          <div className='w-8 h-8 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] flex items-center justify-center shadow-md shadow-[#7C5CFC]/30'>
            <LuTrendingUpDown size={16} className='text-white' />
          </div>
          <span className='text-[17px] font-bold text-[#7C5CFC] tracking-tight'>
            Fin<span className='text-[#7C5CFC]'>Track</span>
          </span>
        </div>

        {children}
      </div>

      <div className='hidden md:flex w-[50vw] lg:w-[45vw] h-screen bg-gradient-to-br from-[#7C5CFC] via-[#9B7BFF] to-[#C4B5FD] relative items-center justify-center overflow-hidden'>

        <div className='w-96 h-96 rounded-full bg-white/10 blur-3xl absolute -top-16 -right-16' />
        <div className='w-72 h-72 rounded-full bg-white/8 blur-2xl absolute bottom-8 left-8' />
        <div className='w-48 h-48 rounded-full bg-[#FFD6FF]/20 blur-2xl absolute top-1/2 right-1/4' />

        <div className='relative z-20 flex flex-col items-center gap-8 p-10 animate-fade-in-up'>
          <div className='bg-white/15 backdrop-blur-xl border border-white/25 p-8 rounded-2xl shadow-2xl max-w-[300px] transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500'>

            <div className='flex items-center gap-4 mb-5'>
              <div className='w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center text-white'>
                <LuTrendingUpDown size={22} />
              </div>
              <div>
                <p className='text-[11px] text-white/70 font-medium uppercase tracking-wider'>Total Balance</p>
                <h4 className='text-2xl font-bold text-white'>₹4,30,000</h4>
              </div>
            </div>

            <div className='w-full h-1.5 bg-white/15 rounded-full overflow-hidden'>
              <div className='w-[70%] h-full bg-white rounded-full' />
            </div>

            <p className='text-[12px] text-white/70 mt-4 leading-relaxed'>
              Manage your expenses smartly and save more for the future.
            </p>

            <div className='flex gap-3 mt-5'>
              <div className='flex-1 bg-white/10 rounded-xl p-3'>
                <p className='text-[10px] text-white/60 mb-0.5'>Income</p>
                <p className='text-[15px] font-bold text-white'>₹8.5K</p>
                <p className='text-[10px] text-emerald-300 mt-0.5'>↑ 6.3%</p>
              </div>
              <div className='flex-1 bg-white/10 rounded-xl p-3'>
                <p className='text-[10px] text-white/60 mb-0.5'>Expense</p>
                <p className='text-[15px] font-bold text-white'>₹6.2K</p>
                <p className='text-[10px] text-rose-300 mt-0.5'>↓ 2.4%</p>
              </div>
            </div>
          </div>

          <p className='text-white/70 text-[13px] text-center max-w-[240px] leading-relaxed'>
            Take control of your finances with smart tracking and beautiful insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
