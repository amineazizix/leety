import React from 'react';
import {IoClose} from "react-icons/io5";
import Login from "@/components/modals/Login";
import Signup from "@/components/modals/Signup";
import ResetPassword from "@/components/modals/ResetPassword";
import {useRecoilValue} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {useCloseModal} from "@/hooks/useCloseModal";
import {createPortal} from "react-dom";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const closeModal = useCloseModal('auth');
  const modalRootEl = document.getElementById('modal')

  return modalRootEl ?
    createPortal(
    <>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60' onClick={closeModal}></div>
      <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
          <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
            <div className='flex justify-end p-2'>
              <button
                type='button'
                className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                onClick={closeModal}
              >
                <IoClose className='h-5 w-5' />
              </button>
            </div>
            <ModalWrapper />
          </div>
        </div>
      </div>
    </>, modalRootEl
  ) : null;
};

const ModalWrapper = () => {
  const { type: authModalType } = useRecoilValue(authModalState);

  switch (authModalType) {
    case 'login':
      return <Login></Login>;
    case 'register':
      return <Signup></Signup>;
    case 'forgotPassword':
      return <ResetPassword></ResetPassword>;
    default:
      return <Login></Login>;
  }
}

export default AuthModal;