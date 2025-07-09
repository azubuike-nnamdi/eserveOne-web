import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CookieState {
  cookiesAccepted: boolean | null;
  setCookiesAccepted: (accepted: boolean) => void;
  resetCookies: () => void;
}

export const useCookieStore = create<CookieState>()(
  persist(
    (set) => ({
      cookiesAccepted: null, // null means user hasn't made a choice yet
      setCookiesAccepted: (accepted: boolean) =>
        set({ cookiesAccepted: accepted }),
      resetCookies: () =>
        set({ cookiesAccepted: null }),
    }),
    {
      name: 'cookie-consent', // localStorage key
    }
  )
); 