'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";

type NavbarProps = {}
const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({...prev, isOpen: true, type: 'login'}));
  }

  return (
    <div className='flex items-center justify-between px-2 sm:px-12 md:px-24'>
      <Link href='/public' className='flex items-center justify-between h-20'>
        <Image src='/logo.png' alt='Logo' className='h-full' width={200} height={200}/>
      </Link>
      <div className='flex items-center'>
        <button
          className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out'
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;