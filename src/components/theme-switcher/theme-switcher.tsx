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
    <button onClick={() => handleChangeTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <MdDarkMode className="fill-primary size-9 md:size-7" />
      ) : (
        <MdOutlineLightMode className="fill-primary size-9 md:size-7" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
