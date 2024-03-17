import { atom} from "recoil";

// ==========  Auth State   ==========
export type AuthModalState = {
  isOpen: boolean;
  type: 'login' | 'register' | 'forgotPassword';
};

const InitialAuthModalState: AuthModalState = {
  isOpen: false,
  type: 'login',
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: InitialAuthModalState,
});