'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/utils/tailwindcss';

import { Experience } from './';

interface Props {
  item: Experience;
}
const ExperienceCard: React.FC<Props> = ({ item }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  return (
    <div ref={ref} className="group flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
      <div
        id="icon"
        className={cn(
          'flex size-6 shrink-0 items-center justify-center rounded-full border-border bg-accent shadow-md md:order-1 md:group-odd:-translate-x-7 md:group-even:translate-x-7',
          inView ? 'opacity-1 transition-opacity delay-1000 duration-1000 ease-out' : 'opacity-0'
        )}
      />

      <article
        className={cn(
          'relative w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)]',
          inView
            ? 'animate-in fade-in slide-in-from-right duration-1500 md:group-odd:slide-in-from-right md:group-even:slide-in-from-left'
            : 'opacity-0'
        )}
      >
        <div
          className={cn(
            'card space-y-4',
            'before:absolute before:left-0 before:top-1/2 before:size-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border-b before:border-l before:border-border before:bg-card md:group-even:before:left-full md:group-even:before:border-b-0 md:group-even:before:border-l-0 md:group-even:before:border-r md:group-even:before:border-t'
          )}
        >
          <div>
            <p className="title-card">{item.title}</p>
            <p className="body-muted">
              {item.dates} | <span className="font-semibold">{item.business}</span>, {item.location}
            </p>
          </div>
          <p>{item.description}</p>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;
