'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const NextThemesProvider = dynamic(() => import('next-themes').then(e => e.ThemeProvider), { ssr: false });

interface Props {
  children: React.ReactNode;
}
const Providers: React.FC<Props> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
};

export default Providers;
