import './styles.css';

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';

import { ILocale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/types/globals';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export function metadata(): Metadata {
  return {
    title: {
      template: '%s | Mathieu Langumier',
      default: 'Projects | Mathieu Langumier',
    },
    description: '[insert short description here]',
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as ILocale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={dmSans.variable} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
