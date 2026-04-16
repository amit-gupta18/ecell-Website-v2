import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('down');
  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      setScrollDir(y > lastY ? 'down' : 'up');
      lastY = y;
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrollDir;
}