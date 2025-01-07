'use client';

import { useTranslations } from 'next-intl';
import React, { ReactElement } from 'react';
import { FaChartLine, FaReact } from 'react-icons/fa';
import { GoMultiSelect } from 'react-icons/go';
import { RiTeamLine } from 'react-icons/ri';

import useViewportBreakpoint from '@/hooks/use-viewport-breakpoint';

import SkillCard from './skill-card';

export interface Skill {
  title: string;
  description: string;
  icon: ReactElement;
}

const SkillsBlock: React.FC = () => {
  const t = useTranslations('Pages.Homepage.sections.skills.cards');
  const isViewportLg = useViewportBreakpoint('lg');

  const skillsItem: Skill[] = [
    {
      title: t('technical.title'),
      description: t('technical.description'),
      icon: <FaReact size="2rem" />,
    },
    {
      title: t('adapt.title'),
      description: t('adapt.description'),
      icon: <GoMultiSelect size="2rem" />,
    },
    {
      title: t('teamwork.title'),
      description: t('teamwork.description'),
      icon: <RiTeamLine size="2rem" />,
    },
    {
      title: t('learning.title'),
      description: t('learning.description'),
      icon: <FaChartLine size="2rem" />,
    },
  ];

  return (
    <div className="my-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {skillsItem.map((item: Skill, index) => (
        <SkillCard key={index} item={item} index={index} isViewportLg={isViewportLg} />
      ))}
    </div>
  );
};

export default SkillsBlock;
