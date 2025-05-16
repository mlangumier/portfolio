'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/utils/tailwindcss';

import { Skill } from './';

interface Props {
  item: Skill;
  index: number;
  isViewportLg: boolean;
}

const SkillCard: React.FC<Props> = ({ item, index, isViewportLg }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: isViewportLg ? 0.3 : 1 });
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  // Adds a '1s' delay between each cards using the item's index number.
  useEffect(() => {
    if (isViewportLg) {
      const activateAnimation = setTimeout(() => {
        if (inView) setHasLoaded(true);
      }, index * 1000);

      return () => clearTimeout(activateAnimation);
    } else {
      if (inView) setHasLoaded(true);
    }
  }, [inView, index, isViewportLg]);

  return (
    <article
      ref={ref}
      className={cn(hasLoaded ? 'animate-in fade-in slide-in-from-bottom duration-1000' : 'opacity-0')}
    >
      <div className="card space-y-4">
        <h3 className="title-card flex flex-row items-center justify-between gap-4">
          {item.title}
          {item.icon}
        </h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
};

export default SkillCard;
