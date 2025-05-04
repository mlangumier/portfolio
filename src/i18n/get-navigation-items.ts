import { getTranslations } from 'next-intl/server';

import { INavRouteItem } from '../types/globals';

export const getNavigationRoutes = async () => {
  const t = await getTranslations('Common.Routes');

  const items: INavRouteItem[] = [
    { label: t('home'), pathname: '/' },
    // { label: t('about'), pathname: '/about' },
    // { label: t('projects'), pathname: '/projects' },
  ];

  return items;
};

// export const getProjectRoutes = async () => {};
