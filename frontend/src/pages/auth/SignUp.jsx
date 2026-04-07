import React, { useState, useContext } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { API_PATHS } from '../../utils/apiPaths';
import axiosInstance from '../../utils/axiosInstance';
import uploadImage from '../../utils/uploadImage';
import { UserContext } from '../../context/UserContext';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = '';
    if (!fullName) { setError('Please enter your full name.'); return; }
    if (!validateEmail(email)) { setError('Please enter a valid email address.'); return; }
    if (!password) { setError('Please enter your password.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters long.'); return; }
    setError('');
    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || '';
      }
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, { fullName, email, password, profileImageUrl });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        updateUser(user);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center h-full px-2 md:px-4 py-6 animate-fade-in-up'>
        <div className='mb-7'>
          <p className='text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-widest mb-2'>Get started</p>
          <h3 className='text-[30px] font-extrabold text-[#000000] leading-tight'>
            Create your<br />FinTrack account
          </h3>
          <p className='text-[14px] text-[#9B8EC4] mt-2'>
            Join thousands managing their finances smarter
          </p>
        </div>
        <form onSubmit={handleSignUp} className='w-full'>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label='Full Name'
              placeholder='John Doe'
              type='text'
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label='Email Address'
              placeholder='you@example.com'
              type='text'
            />
            <div className='col-span-1 md:col-span-2'>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label='Password'
                placeholder='Min 8 characters'
                type='password'
              />
            </div>
          </div>
          {error && (
            <div className='flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 mb-3'>
              <p className='text-rose-500 text-[13px] font-medium'>{error}</p>
            </div>
          )}
          <button id='btn-signup' type='submit' className='btn-primary mt-2'>
            Create Account
          </button>
          <p className='text-[13px] text-center text-[#9B8EC4] mt-5'>
            Already have an account?{' '}
            <Link
              id='link-login'
              className='font-bold text-[#7C5CFC] hover:text-[#5B3FD4] hover:underline transition-colors'
              to='/login'
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
