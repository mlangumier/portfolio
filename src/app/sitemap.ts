import { MetadataRoute } from 'next';

import { getPathname, ILocale, routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry('/'),
    // getEntry('/projects')
  ];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((locale: ILocale) => [locale, getUrl(href, locale)])),
    },
  };
}

function getUrl(href: Href, locale: ILocale) {
  const pathname = getPathname({ locale, href });
  return process.env.NEXT_PUBLIC_SITE_URL + pathname;
}
