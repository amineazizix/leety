import {useSetRecoilState} from "recoil";
import {authModalState} from "@/atoms/authModalAtom";
import {videoSolutionModalState} from "@/atoms/videoSolutionModalAtom";
import {useEffect} from "react";

export const useCloseModal = (type: string) => {
  const setShowVideoModal = useSetRecoilState(videoSolutionModalState);
  const setShowAuthModal = useSetRecoilState(authModalState);

  let setShowModal;

  if(type == 'auth') setShowModal = setShowAuthModal;
  else setShowModal = setShowVideoModal;

  const closeModal = () => {
    // TODO: Change the any type
    setShowModal((prev: any) => ({...prev, isOpen: false}));
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