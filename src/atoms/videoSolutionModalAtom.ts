import { atom} from "recoil";

//  ========== Video Solution State   ==========
export type VideoSolutionModalState = {
  isOpen: boolean;
  videoId: string;
}

const InitialVideoSolutionModalState: VideoSolutionModalState = {
  isOpen: false,
  videoId: '8-k1C6ehKuw',
}

export const videoSolutionModalState = atom<VideoSolutionModalState>({
  key: 'videoSolutionModalState',
  default: InitialVideoSolutionModalState,
})