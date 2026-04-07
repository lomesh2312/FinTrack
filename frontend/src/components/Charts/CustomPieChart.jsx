import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ data = [], label = 'Total', totalAmount = '0', colors = [], showTextAnchor = true }) => {
  const chartColors = colors.length > 0 ? colors : ['#7C5CFC', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE'];

  return (
    <div className='w-full min-h-[300px] flex justify-center items-center relative'>
      <ResponsiveContainer width='100%' height={320}>
        <PieChart>
          <Pie
            data={data || []}
            dataKey='amount'
            nameKey='name'
            cx='50%'
            cy='50%'
            innerRadius={90}
            outerRadius={120}
            paddingAngle={8}
            animationBegin={0}
            animationDuration={1500}
            animationEasing='ease-out'
            labelLine={false}
          >
            {(data || []).map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={chartColors[index % chartColors.length]} 
                className='hover:opacity-85 cursor-pointer shadow-sm'
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            content={<CustomLegend />} 
            verticalAlign='bottom' 
            layout='horizontal'
            align='center'
            wrapperStyle={{ paddingTop: '20px' }}
          />
          {showTextAnchor && (
            <>
              <text
                x='50%'
                y='50%'
                dy={-18}
                textAnchor='middle'
                fill='#9B8EC4'
                fontSize='12px'
                fontWeight='700'
                style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                {label}
              </text>

              <text
                x='50%'
                y='50%'
                dy={16}
                textAnchor='middle'
                fill='#000000'
                fontSize='24px'
                fontWeight='900'
                className='font-tabular-nums'
              >
                {totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
