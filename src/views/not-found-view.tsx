import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { notFoundImage } from '@/assets';
import SectionWrapper from '@/components/section-block';

const NotFoundView: React.FC = () => {
  const t = useTranslations('Pages.NotFound');

  return (
    <SectionWrapper id="not-found" full first containerStyle="flex grow flex-col items-center justify-center gap-8">
      <Image src={notFoundImage} alt="" width={480} height={320} className="max-w-(--breakpoint-sm) w-full" />
      <p className="title-section text-center">{t('text')}</p>
    </SectionWrapper>
  );
};

export default NotFoundView;
