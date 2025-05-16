import { useTranslations } from 'next-intl';
import React from 'react';

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

  const experienceItems: Experience[] = [
    {
      title: t('training.title'),
      business: t('training.business'),
      dates: '2024-2025',
      location: 'St-Étienne',
      description: t('training.description'),
    },
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
        'before:via-accent before:absolute before:inset-0 before:ml-3 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:to-transparent md:before:mx-auto md:before:translate-x-0'
      )}
    >
      {experienceItems.map((item: Experience, index: number) => (
        <ExperienceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ExperiencesBlock;
