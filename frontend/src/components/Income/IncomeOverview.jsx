import React, { useState, useEffect } from 'react';
import { LuPlus } from 'react-icons/lu';
import CustomBarChart from '../Charts/CustomBarChart';
import { prepareIncomeBarChartData } from '../../utils/helper';

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prepareIncomeBarChartData(transactions));
  }, [transactions]);

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <div>
          <h5 className='text-[16px] font-bold text-[#000000] tracking-tight'>Income Overview</h5>
          <p className='text-[12px] text-[#9B8EC4] mt-0.5'>Track your earnings over time</p>
        </div>
        <button id='btn-add-income' className='add-btn' onClick={onAddIncome}>
          <LuPlus className='text-base' />
          Add Income
        </button>
      </div>
      <div className='mt-8 h-72'>
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
