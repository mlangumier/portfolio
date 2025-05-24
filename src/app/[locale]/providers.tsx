'use client';

import { NextIntlClientProvider } from 'next-intl';
import dynamic from 'next/dynamic';
import React from 'react';

const NextThemesProvider = dynamic(() => import('next-themes').then(e => e.ThemeProvider), { ssr: false });

interface Props {
  messages: IntlMessages;
  locale: string;
  children: React.ReactNode;
}
const Providers: React.FC<Props> = ({ children, messages, locale }) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </NextThemesProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
