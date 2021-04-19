import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const userWindow = typeof window === 'object';

  const [windowWidth, setWindowWidth] = useState(
    userWindow ? window.innerWidth : null
  );

  useEffect(() => {
    function setWidth() {
      setWindowWidth(window.innerWidth);
    }
    if (userWindow) {
      window.addEventListener('resize', setWidth);
      return () => window.removeEventListener('resize', setWidth);
    }
  }, [userWindow, setWindowWidth]);
  return windowWidth;
}
