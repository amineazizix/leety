import React, {useEffect, useState} from 'react';
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import { auth} from "@/firebase/firebase";
import {useRouter} from "next/navigation";

type SignupProps = {};
const Signup: React.FC<SignupProps> = () => {
  const router = useRouter();
  const setAuthModalState = useSetRecoilState(authModalState);
  const [inputs, setInputs] = useState(
    {email: '', full_name: '', password: ''}
  );
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!inputs.email || !inputs.full_name || !inputs.password) alert('Please fill all the fields')
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      if(!newUser) return;
      router.push('/');
    } catch (e: any) {
      alert(e.message)
    }
  }

  useEffect(() => {
    if(error) alert(error.message);
  }, [error]);

  const handleClickLogin = () => {
    setAuthModalState(prev => ({...prev, type: 'login'}))
  }

  return (
    <form action="" className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
      <h3 className='text-xl font-medium text-white'>Register to Leetly</h3>
      <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
          Email
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
        <label htmlFor='full_name' className='text-sm font-medium block mb-2 text-gray-300'>
          Full Name
        </label>
        <input type='text'
               name='full_name'
               id='full_name'
               className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
               placeholder='John Doe'
               onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
          Password
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
        {loading ? 'Registering...' : 'Register' }
      </button>
      <div className='text-sm font-medium text-gray-300'>
        Already have an account ?{"  "}
        <a href='#' className='text-blue-700 hover:underline' onClick={handleClickLogin}>
          Login
        </a>
      </div>
    </form>
  );
};

export default Signup;