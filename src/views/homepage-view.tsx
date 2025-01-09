import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { profilePicture } from '@/assets';
import ContactForm from '@/components/contact-form';
import ExperiencesBlock from '@/components/experiences-block';
import ExternalLink from '@/components/links/external-link';
import NavigationLink from '@/components/links/navigation-link';
import SectionWrapper from '@/components/section-block';
import SectionTitle from '@/components/section-title-block';
import SkillsBlock from '@/components/skills-block';
import { socials } from '@/utils/socials';

const HomepageView = () => {
  const tPage = useTranslations('Pages.Homepage.sections');
  const tButton = useTranslations('Components.Buttons');

  return (
    <>
      <SectionWrapper
        id="hero"
        first
        containerStyle="flex flex-col-reverse justify-between gap-8 md:flex-row md:gap-12 lg:gap-32"
      >
        <div id="texts" className="text-center md:text-start">
          <p className="font-bold text-primary md:text-start">{tPage('hero.salutation')}</p>
          <h1 className="mt-4 md:mt-2 md:text-start">{tPage('hero.title')}</h1>
          <p className="mt-5 text-lg md:text-start">
            {tPage.rich('hero.description', {
              jobTitle: chunk => <span className="font-bold text-primary">{chunk}</span>,
              tech: chunk => <span className="font-bold text-primary">{chunk}</span>,
            })}
          </p>
          <NavigationLink href={{ pathname: '/', hash: '#contact' }} scroll={true} className="mt-8">
            {tButton('talk')}
          </NavigationLink>
        </div>

        <div id="picture" className="flex min-w-fit justify-center">
          <Image
            src={profilePicture}
            alt="Mathieu Langumier"
            className="size-[15rem] rounded-full md:size-[20rem]"
            priority // For LCP
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" dark>
        <SectionTitle title={tPage('skills.title')} description={tPage('skills.description')} dark />
        <SkillsBlock />
      </SectionWrapper>

      <SectionWrapper id="experiences">
        <SectionTitle title={tPage('experiences.title')}>
          <ExternalLink href="/CV_Developpeur_Frontend.pdf"> {tButton('downloadResume')}</ExternalLink>
        </SectionTitle>
        <ExperiencesBlock />
      </SectionWrapper>

      <SectionWrapper id="contact" dark>
        <SectionTitle title={tPage('contact.title')} description={tPage('contact.description')} dark>
          <ExternalLink href={socials.linkedin.url}>{socials.linkedin.label}</ExternalLink>
          <ExternalLink href={socials.github.url}>{socials.github.label}</ExternalLink>
        </SectionTitle>
        <ContactForm />
      </SectionWrapper>
    </>
  );
};

export default HomepageView;
