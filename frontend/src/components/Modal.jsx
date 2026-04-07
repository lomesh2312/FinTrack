import React from 'react';
import { LuX } from 'react-icons/lu';

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex justify-center items-center bg-[#7C5CFC]/20 backdrop-blur-sm animate-fade-in'
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className='relative w-full max-w-xl mx-4 animate-scale-in'>
        <div className='relative bg-white rounded-2xl shadow-2xl border border-[#F0EEFF]'>
          <div className='flex items-center justify-between px-6 py-5 border-b border-[#F0EEFF]'>
            <h3 className='text-[17px] font-bold text-[#7C5CFC]'>{title}</h3>
            <button
              id='btn-modal-close'
              type='button'
              onClick={onClose}
              className='w-8 h-8 flex items-center justify-center rounded-xl text-[#9B8EC4] hover:bg-[#F8F7FF] hover:text-[#7C5CFC] transition-all duration-200 cursor-pointer'
              aria-label='Close modal'
            >
              <LuX size={17} />
            </button>
          </div>

          <div className='px-6 py-5'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
