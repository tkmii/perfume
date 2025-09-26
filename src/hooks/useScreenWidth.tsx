import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/variables';

export function useScreenWidth() {
  const [width, setWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width >= BREAKPOINTS.notebook) {
    return 'isDesktop';
  } else if (width >= BREAKPOINTS.tablet) {
    return 'isTablet';
  } else {
    return 'isMobile';
  }
}