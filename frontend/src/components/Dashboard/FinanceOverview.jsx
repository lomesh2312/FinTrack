import React, { useMemo } from 'react';
import CustomLineChart from '../Charts/CustomLineChart';
import { prepareExpenseLineChartData } from '../../utils/helper';

const FinanceOverview = ({ balanceData = [] }) => {
  const chartData = useMemo(() => {
    return prepareExpenseLineChartData(balanceData);
  }, [balanceData]);

  return (
    <div className='card h-full min-h-[420px]'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h5 className='text-[18px] font-bold text-[#000000] tracking-tight'>Financial Overview</h5>
          <p className='text-[13px] text-[#9B8EC4] mt-0.5 font-medium'>Monthly income vs expense analysis</p>
        </div>
      </div>

      <div className='mt-8 h-72'>
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default FinanceOverview;
