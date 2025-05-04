'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import LocalSwitcher from '@/components/locale-switcher';
import ThemeSwitcher from '@/components/theme-switcher/theme-switcher';
import useViewportBreakpoint from '@/hooks/use-viewport-breakpoint';
import { Link, usePathname } from '@/i18n/routing';
import { INavRouteItem } from '@/types/globals';
import { cn } from '@/utils/tailwindcss';

import BurgerIcon from './burger-icon';

interface Props {
  navItems: INavRouteItem[];
}

const Header: React.FC<Props> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const tHeader = useTranslations('Layout.Header');
  const isViewportMd = useViewportBreakpoint('sm');

  const handleBurgerMenu = (state: 'open' | 'close') => {
    setIsMenuOpen(state === 'open');
  };

  const toggleBurgerMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // On window resize, if mobile menu was open, close it when using desktop layout (without it, would prevent from scrolling)
  useEffect(() => {
    if (isViewportMd) setIsMenuOpen(false);
  }, [isViewportMd]);

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
    <header className="bg-background shadow-block fixed z-40 w-full">
      <div className="container-block relative flex h-20 flex-row items-center justify-between">
        {/* Title */}
        <div className="grid w-full grid-cols-[auto_1fr] items-center gap-3 sm:w-fit sm:grid-cols-[auto_1fr_minmax(0,_2.5rem)]">
          <div id="website-name-square" className="bg-accent hidden size-6 rotate-[15deg] sm:inline-block" />
          <BurgerIcon isOpen={isMenuOpen} handleIsOpen={toggleBurgerMenu} className="sm:hidden" />

          <Link
            href="/"
            onClick={() => handleBurgerMenu('close')}
            className="text-primary text-nowrap text-center text-2xl font-bold sm:text-wrap sm:text-start"
          >
            {tHeader('title')}
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden sm:block">
          <ul className="flex flex-row items-center gap-6">
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
            <ThemeSwitcher />
            <LocalSwitcher />
          </ul>
        </div>

        {/* Navigation - Mobile */}
        <div
          className={cn(
            'fixed inset-0 top-20 z-40 flex flex-row sm:hidden',
            'transition-all duration-500 ease-out',
            isMenuOpen ? 'visible left-0' : 'invisible left-[-100%]'
          )}
        >
          <div className="bg-background max-w-(--breakpoint-sm) flex h-full w-full min-w-fit flex-col gap-4 px-6">
            <div className="mt-4">
              <p className="text-foreground-muted font-light uppercase">{tHeader('pages')}</p>
              <ul className="flex h-full flex-col">
                {navItems.map((item: INavRouteItem, i) => (
                  <li key={i} className="border-border flex border-b last-of-type:border-none">
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
              <p className="text-foreground-muted font-light uppercase">{tHeader('switchLanguage')}</p>
              <ul className="flex h-full flex-col">
                <li className="mt-2 px-4">
                  <LocalSwitcher handleCloseMobileMenu={() => handleBurgerMenu('close')} />
                </li>
              </ul>
            </div>

            <div>
              <p className="text-foreground-muted font-light uppercase">{tHeader('switchTheme')}</p>
              <ul className="flex h-full flex-col">
                <li className="mt-2 px-4">
                  <ThemeSwitcher handleCloseMobileMenu={() => handleBurgerMenu('close')} />
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
