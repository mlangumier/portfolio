import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props {
  id: string;
  full?: boolean;
  first?: boolean;
  invertedSection?: boolean;
  containerStyle?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper full-width with a container for content
 *
 * @param id - Section's name
 * @param full - Makes the section use the viewport's height, minus the Header.
 * @param first - (only for first section of the page) Reduces the padding-top on mobile
 * @param invertedSection - Set a dark background color for the section
 * @param containerStyle - Adding style to container
 */
const SectionWrapper: React.FC<Props> = ({
  id,
  full = true,
  first = false,
  invertedSection = false,
  containerStyle,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'overflow-clip bg-background',
        first ? 'section-py-first' : 'section-py',
        full && 'section-full',
        invertedSection && 'bg-background-muted'
      )}
    >
      <div className={cn('container-block', containerStyle)}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
