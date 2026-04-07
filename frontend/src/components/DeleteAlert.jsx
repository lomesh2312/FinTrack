import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div className='flex flex-col items-center gap-5 py-2'>
      <div className='w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center'>
        <FiAlertTriangle size={28} className='text-rose-500' />
      </div>

      <div className='text-center'>
        <h4 className='text-[15px] font-bold text-[#7C5CFC] mb-2'>Are you sure?</h4>
        <p className='text-[13px] text-[#9B8EC4] leading-relaxed max-w-xs'>{content}</p>
      </div>

      <button
        id='btn-confirm-delete'
        type='button'
        className='w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-[0.98] text-white text-[14px] font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-rose-500/30'
        onClick={onDelete}
      >
        Yes, Delete
      </button>
    </div>
  );
};

export default DeleteAlert;
