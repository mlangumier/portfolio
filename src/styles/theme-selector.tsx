'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

// TODO: select for colors (rounded-div + name) & button for light/dark
// Display as one above (mobile) or before (desktop) the language button

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
      {/* Light/Dark */}
      <div>
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

      {/* Colors */}
      <div className="mx-auto my-4 flex w-fit flex-row justify-center gap-4 border border-slate-500 bg-white p-4">
        <div
          onClick={() => setTheme('slate-light')}
          className="size-12 rounded-full bg-slate-200 hover:cursor-pointer"
        />
        <div
          onClick={() => setTheme('slate-dark')}
          className="size-12 rounded-full bg-slate-900 hover:cursor-pointer"
        />
        <div onClick={() => setTheme('blue-light')} className="size-12 rounded-full bg-cyan-200 hover:cursor-pointer" />
        <div onClick={() => setTheme('blue-dark')} className="size-12 rounded-full bg-cyan-900 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default ThemeSelector;
