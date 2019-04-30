import { useLayoutEffect } from 'react';

// this layout effect runs after the dom has rendered
function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
  });
}

export { useBodyScrollLock };
