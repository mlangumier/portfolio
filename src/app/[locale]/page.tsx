import { getTranslations } from 'next-intl/server';
import React from 'react';

import { PageProps } from '@/types/globals';
import HomepageView from '@/views/homepage-view';

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.Homepage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Homepage() {
  return <HomepageView />;
}
