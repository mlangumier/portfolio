'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

//* Coming soon:
// TODO: Light/Dark mode switcher
// (Optional): Theme color switcher, with a default "blue" (ex: blue, slate, red, green)
// Display: above (mobile) / before (desktop) the language button

const ThemeSelector = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Wait for system's mode to be detected...
  useEffect(() => setIsMounted(true), []);

  // ...uses a placeholder in the meanwhile...
  if (!isMounted)
    return (
      <div className="mx-auto py-12 text-center">
        <div className="mx-auto size-12 animate-pulse rounded-full bg-primary" />
      </div>
    );

  // ...then displays the correct button
  return (
    <div className="mx-auto my-12 text-center">
      {resolvedTheme === 'light' && (
        <button onClick={() => setTheme('dark')}>
          <MdDarkMode size="3rem" />
        </button>
      )}

      {resolvedTheme === 'dark' && (
        <button onClick={() => setTheme('light')}>
          <MdOutlineLightMode size="3rem" />
        </button>
      )}
    </div>
  );
};

export default ThemeSelector;
