'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import LocalSwitcher from '@/components/locale-switcher';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/utils/tailwindcss';
import { INavRouteItem } from '@/utils/types';

import BurgerIcon from './burger-icon';

interface Props {
  navItems: INavRouteItem[];
}

const Header: React.FC<Props> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const tHeader = useTranslations('Layout.Header');

  const handleBurgerMenu = (state: 'open' | 'close') => {
    setIsMenuOpen(state === 'open');
  };

  const toggleBurgerMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Disables scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed z-40 w-full bg-background">
      <div className="container relative flex h-20 flex-row items-center justify-between">
        {/* Title */}
        <div className="grid w-full grid-cols-header-title-center items-center gap-3 md:w-fit md:grid-cols-header-title-start">
          <div id="website-name-square" className="hidden size-6 rotate-[15deg] bg-accent md:inline-block" />
          <BurgerIcon isOpen={isMenuOpen} handleIsOpen={toggleBurgerMenu} className="md:hidden" />

          <Link
            href="/"
            onClick={() => handleBurgerMenu('close')}
            className="text-nowrap text-center text-2xl font-bold text-primary md:text-wrap md:text-start"
          >
            {tHeader('title')}
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-6">
            {navItems.map((item: INavRouteItem, i) => (
              <li key={i}>
                <Link
                  href={item.pathname}
                  aria-current={pathname === item.pathname}
                  className={cn('nav nav-header', pathname === item.pathname && 'nav-active')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <LocalSwitcher />
          </ul>
        </div>

        {/* Navigation - Mobile */}
        <div
          className={cn(
            'fixed inset-0 top-20 z-40 flex flex-row md:hidden',
            'transition-all duration-500 ease-out',
            isMenuOpen ? 'visible left-0' : 'invisible left-[-100%]'
          )}
        >
          <div className="flex h-full w-full min-w-fit max-w-screen-sm flex-col gap-4 bg-background px-6">
            <div className="mt-4">
              <p className="font-light uppercase text-foreground-muted">{tHeader('pages')}</p>
              <ul className="flex h-full flex-col">
                {navItems.map((item: INavRouteItem, i) => (
                  <li key={i} className="flex border-b border-grey-border last-of-type:border-none">
                    <Link
                      href={item.pathname}
                      aria-current={pathname === item.pathname}
                      className={cn('nav nav-mobile w-full px-4 py-4', pathname === item.pathname && 'nav-active')}
                      onClick={() => handleBurgerMenu('close')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-light uppercase text-foreground-muted">{tHeader('switchLanguage')}</p>
              <ul className="flex h-full flex-col">
                <li className="mt-2 px-4">
                  <LocalSwitcher handleCloseMobileMenu={() => handleBurgerMenu('close')} />
                </li>
              </ul>
            </div>
          </div>

          <div
            id="backdrop"
            className={cn(
              'backdrop w-full',
              'transition-all delay-100 duration-500',
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => handleBurgerMenu('close')}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
