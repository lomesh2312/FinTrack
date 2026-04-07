import React from 'react';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';

const CustomLineChart = ({ data = [] }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-white shadow-2xl rounded-2xl p-4 border border-[#F0EEFF] backdrop-blur-md bg-opacity-95'>
          <p className='text-[12px] font-bold text-[#7C5CFC] uppercase tracking-wider mb-2 opacity-80'>
            {payload[0].payload.month || 'Detail'}
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 rounded-full bg-[#7C5CFC]' />
            <div>
              <p className='text-[14px] text-[#5B5580] font-medium'>Balance</p>
              <p className='text-[20px] font-black text-[#000000]'>₹{payload[0].value.toLocaleString()}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='w-full min-h-[300px]'>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data || []} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id='colorAmount' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#7C5CFC' stopOpacity={0.4} />
              <stop offset='95%' stopColor='#7C5CFC' stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray='4 4' vertical={false} stroke='#F0EEFF' />
          <XAxis
            dataKey='month'
            tick={{ fontSize: 12, fill: '#9B8EC4', fontVariant: 'tabular-nums', fontWeight: 600 }}
            stroke='none'
            axisLine={false}
            tickLine={false}
            dy={15}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#9B8EC4', fontWeight: 600 }}
            stroke='none'
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ stroke: '#7C5CFC', strokeWidth: 1.5, strokeDasharray: '4 4' }} 
            animationDuration={400}
          />
          <Area
            type='monotone'
            dataKey='amount'
            stroke='#7C5CFC'
            strokeWidth={4}
            fill='url(#colorAmount)'
            animationDuration={2000}
            activeDot={{ 
              r: 8, 
              fill: '#FFFFFF', 
              stroke: '#7C5CFC', 
              strokeWidth: 3,
              className: 'shadow-lg drop-shadow-md'
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;