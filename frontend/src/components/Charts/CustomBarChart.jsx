import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';

const CustomBarChart = ({ data = [] }) => {
  const getBarColor = (index) => {
    const colors = ['#7C5CFC', '#977FFF', '#B1A2FF', '#CBC4FF'];
    return colors[index % colors.length];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-white shadow-2xl rounded-2xl p-4 border border-[#F0EEFF] backdrop-blur-md bg-opacity-95'>
          <p className='text-[12px] font-bold text-[#7C5CFC] uppercase tracking-wider mb-2 opacity-80'>
            {payload[0].payload.source || payload[0].payload.month || 'Detail'}
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 rounded-full bg-[#7C5CFC]' />
            <div>
              <p className='text-[14px] text-[#5B5580] font-medium'>Amount</p>
              <p className='text-[20px] font-black text-[#000000]'>₹{payload[0].value.toLocaleString()}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='w-full h-full min-h-[300px]'>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data || []} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray='4 4' vertical={false} stroke='#F0EEFF' />
          <XAxis
            dataKey='month'
            tick={{ fontSize: 11, fill: '#9B8EC4', fontWeight: 600 }}
            stroke='none'
            axisLine={false}
            tickLine={false}
            dy={15}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#9B8EC4', fontWeight: 600 }}
            stroke='none'
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value}`}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: '#F8F7FF', radius: 12 }} 
            animationDuration={300}
          />
          <Bar
            dataKey='amount'
            radius={[10, 10, 10, 10]}
            barSize={32}
            animationBegin={0}
            animationDuration={1500}
            animationEasing='ease-out'
          >
            {(data || []).map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getBarColor(index)}
                className='hover:opacity-80 transition-opacity duration-300'
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
