import React, { useState, useContext } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import { UserContext } from '../../context/UserContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) { setError('Please enter a valid email address.'); return; }
    if (!password) { setError('Please enter your password.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters long.'); return; }

    setError('');
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
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
      <div className='flex flex-col justify-center h-full px-2 md:px-4 py-10 animate-fade-in-up'>
        <div className='mb-8'>
          <p className='text-[12px] font-semibold text-[#7C5CFC] uppercase tracking-widest mb-2'>Welcome back</p>
          <h3 className='text-[32px] font-extrabold text-[#000000] leading-tight'>
            Sign in to your<br />account
          </h3>
          <p className='text-[14px] text-[#9B8EC4] mt-2'>
            Enter your credentials to access FinTrack
          </p>
        </div>

        <form onSubmit={handleLogin} className='w-full space-y-1'>
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label='Email Address'
            placeholder='you@example.com'
            type='text'
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label='Password'
            placeholder='Min 8 characters'
            type='password'
          />

          {error && (
            <div className='flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 mb-2'>
              <p className='text-rose-500 text-[13px] font-medium'>{error}</p>
            </div>
          )}

          <button id='btn-login' type='submit' className='btn-primary mt-6'>
            Sign In
          </button>

          <p className='text-[13px] text-center text-[#9B8EC4] mt-5 pt-2'>
            Don't have an account?{' '}
            <Link
              id='link-signup'
              className='font-bold text-[#7C5CFC] hover:text-[#5B3FD4] hover:underline transition-colors'
              to='/signup'
            >
              Create one
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
