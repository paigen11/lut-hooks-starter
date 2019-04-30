import { useLayoutEffect } from 'react';

// this layout effect runs after the dom has rendered
function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    console.log(originalOverflow);
    document.body.style.overflow = 'hidden';

    // the return function makes it possible to remove / destroy the effect after it's needed
    // you can do this too
    // return function cleanup() {
    return () => (document.body.style.overflow = originalOverflow);
    // the empty array at the end will make it only fire on mount
  }, []);
}

export { useBodyScrollLock };
