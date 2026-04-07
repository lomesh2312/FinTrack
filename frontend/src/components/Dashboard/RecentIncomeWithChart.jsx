import React, { useEffect, useState, useCallback } from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const COLORS = ['#7C5CFC', '#8B5CF6', '#A78BFA', '#C4B5FD'];

const RecentIncomeWithChart = ({ data = [], totalIncome = 0 }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = useCallback(() => {
    if (!data || !Array.isArray(data)) {
        setChartData([]);
        return;
    }
    const dataArr = data.map((item) => ({
      name: item?.source || 'Unknown Source',
      amount: item?.amount || 0,
    }));
    setChartData(dataArr);
  }, [data]);

  useEffect(() => {
    prepareChartData();
  }, [prepareChartData]);

  return (
    <div className='card'>
      <div className='mb-2'>
        <h5 className='text-[16px] font-bold text-[#000000] tracking-tight'>Last 60 Days Income</h5>
        <p className='text-[12px] text-[#9B8EC4] mt-0.5'>Income breakdown by source</p>
      </div>
      <CustomPieChart
        data={chartData}
        label='Total Income'
        totalAmount={`\u20B9${totalIncome || 0}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
