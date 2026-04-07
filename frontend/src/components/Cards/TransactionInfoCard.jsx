import React from 'react';
import { LuUtensils, LuTrendingUp, LuTrendingDown, LuTrash2 } from 'react-icons/lu';

const TransactionInfoCard = ({ title, icon, date, amount, type, hideDeleteBtn, onDelete }) => {
  const isIncome = type === 'income';

  return (
    <div className='group relative flex items-center gap-4 mt-2 p-3 rounded-xl hover:bg-[#F7F5FF] transition-all duration-200'>
      <div className='w-11 h-11 flex items-center justify-center text-lg text-[#7C5CFC] bg-[#EEE9FF] rounded-xl flex-shrink-0'>
        {icon
          ? <img src={icon} alt={title} className='w-5 h-5 object-contain' />
          : <LuUtensils />}
      </div>

      <div className='flex-1 flex items-center justify-between min-w-0'>
        <div className='min-w-0'>
          <p className='text-[13px] text-[#000000] font-semibold truncate'>{title}</p>
          <p className='text-[11px] text-[#9B8EC4] mt-0.5'>{date}</p>
        </div>

        <div className='flex items-center gap-2 flex-shrink-0 ml-3'>
          {!hideDeleteBtn && (
            <button
              className='text-[#C4B5FD] hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer'
              onClick={onDelete}
              aria-label='Delete'
            >
              <LuTrash2 size={16} />
            </button>
          )}

          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold ${
            isIncome
              ? 'bg-emerald-50 text-emerald-600'
              : 'bg-rose-50 text-rose-500'
          }`}>
            {isIncome ? <LuTrendingUp size={13} /> : <LuTrendingDown size={13} />}
            {isIncome ? '+' : '-'} ₹{amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
