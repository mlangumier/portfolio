'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

interface Props {
  handleCloseMobileMenu?: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ handleCloseMobileMenu }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Wait for system's mode to be detected
  useEffect(() => setIsMounted(true), []);

  const handleChangeTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    if (handleCloseMobileMenu) {
      handleCloseMobileMenu();
    }
  };

  // Show a placeholder while theme is being resolved
  if (!isMounted)
    return (
      <div className="mx-auto text-center">
        <div className="bg-secondary mx-auto size-6 animate-pulse rounded-full" />
      </div>
    );

  // Display the corresponding theme-switcher icon
  if (resolvedTheme === 'light')
    return (
      <button onClick={() => handleChangeTheme('dark')}>
        <MdDarkMode className="fill-primary size-9 md:size-7" />
      </button>
    );

  if (resolvedTheme === 'dark')
    return (
      <button onClick={() => handleChangeTheme('light')}>
        <MdOutlineLightMode className="fill-primary size-9 md:size-7" />
      </button>
    );
};

export default ThemeSwitcher;
