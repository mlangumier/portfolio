import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  pathnames: {
    //--- Main portfolio

    '/': '/',
    '/about': {
      fr: '/a-propos',
      en: '/about',
    },
    '/projects': {
      fr: '/projets',
      en: '/projects',
    },

    //--- Individual project pages

    // TODO: rename & setup tests
    // '/project/first-project': {
    //   fr: '/premier-projet',
    //   en: '/first-project',
    // },
  },
});

export type ILocale = (typeof routing.locales)[number];
export type IPathname = keyof typeof routing.pathnames;

// Lightweight wrappers around Next.js' navigation APIs that will consider the routing configuration
// We've updated `esling.config.mjs` rules to show an error if we don't use next-intl API.
export const { Link, redirect, getPathname, usePathname, useRouter } = createNavigation(routing);

// For static page generation
export function generateStaticParams() {
  return routing.locales.map((locale: ILocale) => ({ locale }));
}
