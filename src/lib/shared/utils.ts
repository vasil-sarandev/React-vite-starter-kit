import { use100vh } from 'react-div-100vh';

export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });

export const isAppInProd = Boolean(import.meta.env.PROD);

// this exists to solve the problem with the browser bar in mobile browsers.
// css's 100vh is not accurate there when the user scrolls down and browser bar disappears.
export const useApp100vh = (): number => {
  const height = use100vh();
  if (height) return height;
  // this should never reach but adding it to satisfy the number return signature
  return window.innerHeight;
};
