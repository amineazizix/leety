import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from '@/firebase/firebase';
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const router = useRouter()
  const setAuthModalState = useSetRecoilState(authModalState);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [inputs, setInputs] = useState(
    {email: '', password: ''}
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!inputs.email || !inputs.password) toast.error("Please fill all the fields", { position: "top-center", autoClose: 3000, theme: "dark" });
    try {
      const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
      if(!newUser) return;
      router.push('/');
    } catch (e: any) {
      toast.error(`${e.message}`, { position: "top-center", autoClose: 3000, theme: "dark" });
    }
  }

  useEffect(() => {
    if(error) toast.error(`${error.message}`, { position: "top-center", autoClose: 3000, theme: "dark" });
  }, [error]);

  const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
    setAuthModalState(prev => ({...prev, type}))
  }
  return (
    <form action="" className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
      <h3 className='text-xl font-medium text-white'>Sign In to Leetly</h3>
      <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
          Your Email
        </label>
        <input type='email'
               name='email'
               id='email'
               className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
               placeholder='name@company.com'
               onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
          Your Password
        </label>
        <input type='password'
               name='password'
               id='password'
               className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
               placeholder='*********'
               onChange={handleInputChange}
        />
      </div>
      <button
        type='submit'
        className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'
      >
        {loading ? 'Loading...' : 'Login' }
      </button>
      <button className='flex w-full justify-end' onClick={() => handleClick('forgotPassword')}>
        <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
          Forgot Password?
        </a>
      </button>
      <div className='text-sm font-medium text-gray-300'>
        Not Registered?{" "}
        <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick('register')}>
          Create account
        </a>
      </div>
    </form>
  );
};

export default Login;