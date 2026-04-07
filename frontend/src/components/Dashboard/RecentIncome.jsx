import React from 'react';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentIncome = ({ transactions = [], onSeeMore }) => {
  return (
    <div className='card h-full'>
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h5 className='text-[18px] font-bold text-[#000000] tracking-tight'>Recent Income</h5>
          <p className='text-[13px] text-[#9B8EC4] mt-0.5 font-medium'>Your latest earnings at a glance</p>
        </div>
        <button 
          onClick={onSeeMore} 
          className='text-[12px] font-bold text-[#7C5CFC] hover:text-[#5D44D6] transition-colors bg-[#F5F3FF] px-3 py-1.5 rounded-lg'
        >
          View All
        </button>
      </div>

      <div className='space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar'>
        {transactions?.length > 0 ? (
          transactions.map((t) => (
            <TransactionInfoCard
              key={t._id}
              title={t.source}
              icon={t.icon}
              date={t.date}
              amount={t.amount}
              type='income'
              hideDelete
            />
          ))
        ) : (
          <div className='flex flex-col items-center justify-center py-12 px-4 text-center'>
            <div className='w-16 h-16 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-4'>
              <span className='text-2xl'>💰</span>
            </div>
            <p className='text-[#9B8EC4] text-[14px] font-medium'>No income records yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentIncome;
