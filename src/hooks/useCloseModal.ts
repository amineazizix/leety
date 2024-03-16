import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {useEffect} from "react";

export const useCloseModal = () => {
  const setShowAuthModal = useSetRecoilState(authModalState);

  const closeModal = () => {
    setShowAuthModal(prev => ({...prev, isOpen: false}));
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if(e.key === 'Escape') closeModal()
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return closeModal;
}