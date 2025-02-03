import '@/styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';

import { ILocale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/utils/types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Providers from './providers';

import type { Metadata } from 'next';
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
      default: 'Portfolio | Mathieu Langumier',
    },
    description: 'Portfolio de Mathieu Langumier - Projet Next.js 15, TypeScript & Tailwind CSS.',
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // Ensures valid incoming `locale`
  if (!routing.locales.includes(locale as ILocale)) {
    notFound();
  }

  // Enable static rendering of pages inside this route
  setRequestLocale(locale);

  // Provides all messages to the client side for easier starting point (adapt later)
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
