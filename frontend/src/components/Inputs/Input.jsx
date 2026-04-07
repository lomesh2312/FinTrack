import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, placeholder, label, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='mb-4'>
      <label className='text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-wider block mb-2'>
        {label}
      </label>

      <div className='input-box relative'>
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className='w-full bg-transparent outline-none text-[15px] text-[#7C5CFC] placeholder:text-[#C4B5FD] font-medium'
          value={value}
          onChange={(e) => onChange(e)}
        />

        {type === 'password' && (
          <button
            type='button'
            className='absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-[#EEE9FF] transition-colors cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword
              ? <FaRegEye size={16} className='text-[#7C5CFC]' />
              : <FaRegEyeSlash size={16} className='text-[#C4B5FD]' />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
