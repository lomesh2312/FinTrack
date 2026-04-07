import React, { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { prepareExpenseLineChartData } from '../../utils/helper';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(prepareExpenseLineChartData(transactions));
  }, [transactions]);

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <div>
          <h5 className='text-[16px] font-bold text-[#000000] tracking-tight'>Expense Overview</h5>
          <p className='text-[12px] text-[#9B8EC4] mt-0.5'>Track your spending trends over time</p>
        </div>
        <button id='btn-add-expense' className='add-btn' onClick={onExpenseIncome}>
          <LuPlus className='text-base' />
          Add Expense
        </button>
      </div>
      <div className='mt-8 h-72'>
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;