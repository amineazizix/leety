'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import AuthModal from "@/components/modals/AuthModal";
import {useRecoilValue} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase";
import {useRouter} from "next/navigation";

type AuthPageProps = {}
const AuthPage: React.FC<AuthPageProps> = () => {
  const authModalOpen = useRecoilValue(authModalState);
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if(user) router.push('/');
    if(!loading && !user) setPageLoading(false);
  }, [user, loading]);

  if(pageLoading) return null;

  return (
    <div className='h-screen'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
          <Image src='/hero.png' alt='Hero Image' width={500} height={500}/>
        </div>
        {authModalOpen.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default AuthPage;