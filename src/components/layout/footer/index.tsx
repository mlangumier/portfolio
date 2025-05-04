import { useTranslations } from 'next-intl';
import React from 'react';

import { socialsList } from '@/data/socials';
import { Link } from '@/i18n/routing';
import { INavRouteItem } from '@/types/globals';

import { CategoryBlock } from './category-block';

interface Props {
  navItems: INavRouteItem[];
}

const Footer: React.FC<Props> = ({ navItems }) => {
  const tFooter = useTranslations('Layout.Footer');
  const tFiles = useTranslations('Common.Files');

  return (
    <footer className="bg-background pt-8 sm:pb-6 md:pb-8 md:pt-12">
      <div className="container-block grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:grid-rows-1 sm:gap-y-0">
        <CategoryBlock title={tFooter('pages')}>
          {navItems.map((route, i) => (
            <li key={i}>
              <Link href={route.pathname} className="nav">
                {route.label}
              </Link>
            </li>
          ))}
        </CategoryBlock>

        <CategoryBlock title={tFooter('socials')}>
          {socialsList.map((link, i) => (
            <li key={i}>
              <a href={link.url} className="nav" target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </CategoryBlock>

        {/* <CategoryBlock title={tFooter('projects')} className="hidden">
          <li>(soon)</li>
        </CategoryBlock> */}

        <CategoryBlock title={tFooter('download')} className="sm:col-start-4">
          <li>
            <a className="nav" href="/CV_Developpeur_Frontend.pdf" target="_blank" rel="noopener noreferrer">
              {tFiles('resume')}
            </a>
          </li>
        </CategoryBlock>
      </div>
    </footer>
  );
};

export default Footer;
