import { useCookieStore } from "@/lib/store/cookie-store";

export const useCookieConsent = () => {
  const { cookiesAccepted, setCookiesAccepted, resetCookies } = useCookieStore();

  return {
    cookiesAccepted,
    setCookiesAccepted,
    resetCookies,
    hasUserMadeChoice: cookiesAccepted !== null,
    canTrackAnalytics: cookiesAccepted === true,
  };
}; 