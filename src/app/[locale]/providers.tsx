'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
