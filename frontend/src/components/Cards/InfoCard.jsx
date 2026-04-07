import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className='card flex items-center gap-6 animate-fade-in-up p-8 px-9'>
      <div className={`w-16 h-16 flex items-center justify-center text-[28px] text-white ${color} rounded-3xl shadow-xl flex-shrink-0 transition-transform hover:scale-105 duration-300`}>
        {icon}
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-[13px] font-bold text-[#9B8EC4] uppercase tracking-widest'>
          {label}
        </p>
        <div className='flex items-baseline gap-1'>
          <span className='text-[28px] font-extrabold text-[#000000] tracking-tight leading-none'>
            ₹{value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
