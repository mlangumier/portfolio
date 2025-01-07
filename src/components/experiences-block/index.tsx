'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import useViewportBreakpoint from '@/hooks/use-viewport-breakpoint';
import { cn } from '@/utils/tailwindcss';

import ExperienceCard from './experience-card';

export interface Experience {
  title: string;
  business: string;
  dates: string;
  location: string;
  description: string;
}

const ExperiencesBlock: React.FC = () => {
  const t = useTranslations('Pages.Homepage.sections.experiences.cards');
  const isViewportMd = useViewportBreakpoint('md');

  const experienceItems: Experience[] = [
    {
      title: t('dixeed.title'),
      business: t('dixeed.business'),
      dates: '2022-2024',
      location: 'Lyon',
      description: t('dixeed.description'),
    },
    {
      title: t('ffy.title'),
      business: t('ffy.business'),
      dates: '2022',
      location: 'Paris',
      description: t('ffy.description'),
    },
    {
      title: t('humanBooster.title'),
      business: t('humanBooster.business'),
      dates: '2020-2021',
      location: 'St-Étienne',
      description: t('humanBooster.description'),
    },
  ];

  return (
    <div
      id="timeline-container"
      className={cn(
        'relative mt-20 space-y-4',
        'before:absolute before:inset-0 before:ml-3 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent md:before:mx-auto md:before:translate-x-0'
      )}
    >
      {experienceItems.map((item: Experience, index: number) => (
        <ExperienceCard key={index} item={item} isViewportMd={isViewportMd} />
      ))}
    </div>
  );
};

export default ExperiencesBlock;
