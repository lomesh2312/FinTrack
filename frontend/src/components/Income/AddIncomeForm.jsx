import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    icon: '',
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className='animate-fade-in'>
      <div className='flex items-center gap-4 mb-4'>
        <EmojiPickerPopup
          icon={income.icon}
          onSelect={(selectedIcon) => handleChange('icon', selectedIcon)}
        />
        <div className='flex-1'>
          <p className='text-[12px] font-semibold text-[#5B5580] dark:text-[#9B8EC4] uppercase tracking-wider mb-2'>
            Select Icon
          </p>
          <p className='text-[#9B8EC4] text-[13px]'>Choose an icon for your income source</p>
        </div>
      </div>

      <Input
        value={income.source}
        onChange={({ target }) => handleChange('source', target.value)}
        label='Income Source'
        placeholder='Freelance, Salary, etc.'
        type='text'
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange('amount', target.value)}
        label='Amount'
        placeholder='e.g., 5000'
        type='number'
      />

      <Input
        value={income.date}
        onChange={({ target }) => handleChange('date', target.value)}
        label='Date'
        placeholder=''
        type='date'
      />

      <div className='flex justify-end mt-6 gap-3'>
        <button
          type='button'
          className='w-full py-3.5 rounded-xl bg-[#7C5CFC] text-white text-[15px] font-bold tracking-wide active:scale-[0.98] transition-all duration-200 hover:bg-[#5B3FD4]'
          style={{ boxShadow: '0 4px 20px rgba(124, 92, 252, 0.35)' }}
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
