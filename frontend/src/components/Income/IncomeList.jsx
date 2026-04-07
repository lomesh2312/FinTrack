import React, { useState } from 'react';
import { LuDownload, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';
import moment from 'moment';

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil((transactions?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='card'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h5 className='text-[16px] font-bold text-[#000000] tracking-tight'>Income History</h5>
          <p className='text-[12px] text-[#9B8EC4] mt-0.5'>{transactions?.length || 0} total records</p>
        </div>
        <button id='btn-download-income' className='card-btn' onClick={onDownload}>
          <LuDownload className='text-sm' /> Download
        </button>
      </div>

      <div className='grid grid-cols-1 gap-2'>
        {currentTransactions?.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format('Do MMM YYYY')}
            amount={income.amount}
            type='income'
            onDelete={() => onDelete(income._id)}
          />
        ))}
        
        {(!transactions || transactions.length === 0) && (
          <div className='flex flex-col items-center justify-center py-12'>
            <p className='text-[14px] text-[#9B8EC4] font-medium'>No income records found</p>
            <p className='text-[12px] text-[#C4B5FD] mt-1'>Add your first income to get started</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className='flex items-center justify-between mt-8 pt-6 border-t border-[#F0EEFF]'>
          <p className='text-[12px] text-[#9B8EC4] font-medium'>
            Page <span className='text-[#7C5CFC]'>{currentPage}</span> of {totalPages}
          </p>
          <div className='flex gap-2'>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-xl border transition-all ${
                currentPage === 1 
                ? 'border-[#F0EEFF] text-[#C4B5FD] cursor-not-allowed' 
                : 'border-[#EEE9FF] text-[#7C5CFC] hover:bg-[#F8F7FF] cursor-pointer'
              }`}
            >
              <LuChevronLeft size={18} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-xl border transition-all ${
                currentPage === totalPages 
                ? 'border-[#F0EEFF] text-[#C4B5FD] cursor-not-allowed' 
                : 'border-[#EEE9FF] text-[#7C5CFC] hover:bg-[#F8F7FF] cursor-pointer'
              }`}
            >
              <LuChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomeList;