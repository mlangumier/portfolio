'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Wait for system's mode to be detected
  useEffect(() => setIsMounted(true), []);

  // Show a placeholder while theme is being resolved
  if (!isMounted)
    return (
      <div className="mx-auto text-center">
        <div className="mx-auto size-6 animate-pulse rounded-full bg-secondary" />
      </div>
    );

  // Display the corresponding theme-switcher icon
  if (resolvedTheme === 'light')
    return (
      <button onClick={() => setTheme('dark')}>
        <MdDarkMode className="size-9 fill-primary md:size-7" />
      </button>
    );

  if (resolvedTheme === 'dark')
    return (
      <button onClick={() => setTheme('light')}>
        <MdOutlineLightMode className="size-9 fill-primary md:size-7" />
      </button>
    );
};

export default ThemeSwitcher;
