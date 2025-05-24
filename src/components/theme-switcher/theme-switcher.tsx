'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

interface Props {
  handleCloseMobileMenu?: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ handleCloseMobileMenu }) => {
  const { theme, setTheme } = useTheme();

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

  return (
    <button onClick={() => handleChangeTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:cursor-pointer">
      {theme === 'dark' ? (
        <MdOutlineLightMode className="size-9 fill-primary md:size-7" />
      ) : (
        <MdDarkMode className="size-9 fill-primary md:size-7" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
