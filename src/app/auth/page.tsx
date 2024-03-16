'use client'

import React from 'react';
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import AuthModal from "@/components/modals/AuthModal";
import {useRecoilValue} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";

type AuthPageProps = {}
const AuthPage: React.FC<AuthPageProps> = () => {
  const authModalOpen = useRecoilValue(authModalState);

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