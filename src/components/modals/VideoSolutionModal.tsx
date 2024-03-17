import React from 'react';
import {IoClose} from "react-icons/io5";
import {useCloseModal} from "@/hooks/useCloseModal";
import {createPortal} from "react-dom";
import YouTube from "react-youtube";
import {useRecoilValue} from "recoil";
import {videoSolutionModalState} from "@/atoms/videoSolutionModalAtom";

type VideoSolutionModalProps = {};

const VideoSolutionModal: React.FC<VideoSolutionModalProps> = () => {
  const { videoId } = useRecoilValue(videoSolutionModalState)
  const closeModal = useCloseModal('video_solution');
  const overlayRootEl = document.getElementById('modal');
  console.log('Its loaded')

  return overlayRootEl ?
  createPortal(
      <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-10'>
        <div
          className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
          onClick={closeModal}
        ></div>
        <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
          <div className='w-full h-full flex items-center justify-center relative'>
            <div className='w-full relative'>
              <IoClose
                fontSize={"35"}
                className='cursor-pointer absolute -top-16 right-0 text-white'
                onClick={closeModal}
              />
              <YouTube
                videoId={videoId}
                loading='lazy'
                iframeClassName='w-full min-h-[500px]'
              />
            </div>
          </div>
        </div>
      </div>,
    overlayRootEl
  ) : null;
};

export default VideoSolutionModal;