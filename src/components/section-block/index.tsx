'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

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
  const { theme } = useTheme();

  // Temporary fix for the inverted section flickering on page load
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
      id={id}
      className={cn(
        'overflow-clip bg-background',
        first ? 'section-py-first' : 'section-py',
        full && 'section-full',
        invertedSection && isMounted && (theme === 'dark' ? 'inverted-dark' : 'inverted-theme')
      )}
    >
      <div className={cn('container', containerStyle)}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
