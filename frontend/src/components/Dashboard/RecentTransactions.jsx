import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import moment from 'moment';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({ transactions = [], onSeeMore }) => {
  return (
    <div className='card'>
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h5 className='text-[16px] font-bold text-[#000000] tracking-tight'>Recent Transactions</h5>
          <p className='text-[12px] text-[#9B8EC4] mt-0.5'>Your latest financial activity</p>
        </div>
        <button
          id='btn-see-all-transactions'
          className='card-btn'
          onClick={onSeeMore}
        >
          See all <LuArrowRight className='text-sm' />
        </button>
      </div>

      <div className='space-y-0.5'>
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === 'expense' ? item.category : item.source}
            icon={item.icon}
            date={moment(item.date).format('Do MMM YYYY')}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn
          />
        ))}
        {(!transactions || transactions.length === 0) && (
          <p className='text-[13px] text-[#9B8EC4] text-center py-8 font-medium'>No recent transactions</p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
