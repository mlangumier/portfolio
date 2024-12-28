import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props {
  id: string;
  full?: boolean;
  first?: boolean;
  dark?: boolean;
  containerStyle?: string;
  children: React.ReactNode;
}

/**
 * Section wrapper full-width with a container for content
 *
 * @param id - Section's name
 * @param full - Makes the section use the viewport's height, minus the Header.
 * @param first - (only for first section of the page) Reduces the padding-top on mobile
 * @param dark - Set a dark background color
 * @param containerStyle - Adding style to container
 */
const SectionWrapper: React.FC<Props> = ({
  id,
  first = false,
  full = false,
  dark = false,
  containerStyle,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'bg-background',
        first ? 'section-py-first' : 'section-py',
        full && 'section-full',
        dark && 'bg-primary'
      )}
    >
      <div className={cn('container', containerStyle)}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
