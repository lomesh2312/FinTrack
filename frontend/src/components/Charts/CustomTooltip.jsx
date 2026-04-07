import React from 'react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white shadow-xl rounded-xl p-4 border border-[#E8E3FF]'>
        <p className='text-[12px] font-bold text-[#7C5CFC] uppercase tracking-wider mb-1'>
          {payload[0].name}
        </p>
        <p className='text-[14px] text-[#5B5580] font-medium'>
          Amount: <span className='text-[16px] font-bold text-[#000000] ml-1'>₹{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
