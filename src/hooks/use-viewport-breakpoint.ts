import { useEffect, useState } from 'react';

import { EBreakpoints, IBreakpoint } from '@/utils/tailwindcss';

/**
 * Checks if the current viewport's width corresponds to the chosen breakpoint.
 * @param breakpoint Minimum width to compare the viewport's, uses Tailwind CSS's breakpoint values.
 * @returns A boolean that confirms if the current viewport corresponds to the breakpoint (true = is wider).
 */
const useViewportBreakpoint = (breakpoint: IBreakpoint): boolean => {
  const [isMediaMatch, setIsMediaMatch] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia(`(min-width: ${EBreakpoints[breakpoint]})`).matches
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(`(min-width: ${EBreakpoints[breakpoint]})`);
    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsMediaMatch(e.matches);

    setIsMediaMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryChange);
    };
  }, [breakpoint]);

  return isMediaMatch;
};

export default useViewportBreakpoint;
