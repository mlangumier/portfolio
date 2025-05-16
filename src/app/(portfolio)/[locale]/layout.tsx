import './styles.css';

import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';

import DocumentHtml from '@/components/document-html';
import MainLayout from '@/components/layout/main-layout';
import { ILocale, routing } from '@/i18n/routing';
import { LayoutProps } from '@/types/globals';

import Providers from './providers';

import type { Metadata } from 'next';

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
  const messages: IntlMessages = (await getMessages()) as IntlMessages;

  return (
    <DocumentHtml locale={locale} messages={messages}>
      <Providers>
        <MainLayout>{children}</MainLayout>
      </Providers>
    </DocumentHtml>
  );
}
