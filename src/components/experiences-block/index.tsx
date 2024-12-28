import { useTranslations } from 'next-intl';
import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Experience {
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
      location: 'St-Etienne',
      description: t('humanBooster.description'),
    },
  ];

  return (
    <div className="mt-20 grid grid-cols-1 grid-rows-3 gap-y-4 md:grid-cols-experience">
      {experienceItems.map((item: Experience, index) => (
        <React.Fragment key={item.business}>
          <div
            className={cn(
              'md:flex md:flex-row md:items-center',
              index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3 md:flex-row-reverse'
            )}
          >
            <article className={cn('card z-10 min-w-[15rem] space-y-4 sm:max-md:hover:scale-[1.02]')}>
              <div>
                <p className="title-card">{item.title}</p>
                <p className="body-muted">
                  {item.dates} | <span className="font-semibold">{item.business}</span>, {item.location}
                </p>
              </div>
              <p>{item.description}</p>
            </article>

            <div id={`line-${index}`} className="relative hidden h-[0.125rem] w-8 bg-accent md:block">
              <div
                className={cn(
                  'absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-accent',
                  index % 2 === 0 ? 'left-full -translate-x-1/2' : 'left-0 -translate-x-1/2'
                )}
              />
            </div>
          </div>

          <div id="empty-placeholder-grid" className={cn('hidden md:block', index % 2 === 0 ? '' : 'md:hidden')} />
        </React.Fragment>
      ))}

      <div id="vertical-line" className="col-start-2 row-span-3 row-start-1 hidden h-full w-full bg-accent md:block" />
    </div>
  );
};

export default ExperiencesBlock;
