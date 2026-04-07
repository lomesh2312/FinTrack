import React, { useRef, useState } from 'react';
import { LuUpload, LuTrash } from 'react-icons/lu';

const DEFAULT_PROFILE_IMAGE =
  'https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  return (
    <div className='flex flex-col items-center gap-3 mb-6'>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
      />

      <div className='relative group'>
        <div className='w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-[#7C5CFC]/20 ring-offset-2'>
          <img
            src={previewUrl || DEFAULT_PROFILE_IMAGE}
            alt='profile'
            className='w-full h-full object-cover'
          />
        </div>

        {!image ? (
          <button
            type='button'
            onClick={() => inputRef.current.click()}
            className='absolute -bottom-1.5 -right-1.5 w-8 h-8 flex items-center justify-center bg-[#7C5CFC] text-white rounded-xl shadow-lg hover:bg-[#5B3FD4] transition-colors cursor-pointer'
            aria-label='Upload photo'
          >
            <LuUpload size={14} />
          </button>
        ) : (
          <button
            type='button'
            onClick={handleRemoveImage}
            className='absolute -bottom-1.5 -right-1.5 w-8 h-8 flex items-center justify-center bg-rose-500 text-white rounded-xl shadow-lg hover:bg-rose-600 transition-colors cursor-pointer'
            aria-label='Remove photo'
          >
            <LuTrash size={14} />
          </button>
        )}
      </div>

      <p className='text-[12px] text-[#9B8EC4] font-medium'>
        {image ? 'Photo selected ✓' : 'Upload profile photo (optional)'}
      </p>
    </div>
  );
};

export default ProfilePhotoSelector;