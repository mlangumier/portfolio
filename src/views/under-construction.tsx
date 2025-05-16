import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { underConstructionImage } from '@/assets';
import SectionWrapper from '@/components/section-block';

const UnderConstructionView: React.FC = () => {
  const t = useTranslations('Pages.UnderConstruction');

  return (
    <SectionWrapper
      id="under-construction"
      full
      first
      containerStyle="flex grow flex-col items-center justify-center gap-8"
    >
      <Image src={underConstructionImage} alt="" width={480} height={295} className="w-full max-w-(--breakpoint-sm)" />
      <p className="section-title text-center">{t('text')}</p>
    </SectionWrapper>
  );
};

export default UnderConstructionView;
