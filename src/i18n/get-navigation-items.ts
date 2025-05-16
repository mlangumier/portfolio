import { getTranslations } from 'next-intl/server';

import { INavRouteItem } from '../types/globals';

export const getNavigationRoutes = async () => {
  const t = await getTranslations('Common.Routes');

  const items: INavRouteItem[] = [
    { label: t('home'), pathname: '/' },
    { label: t('projects'), pathname: '/projects' },
    // { label: 'First Project', pathname: '/projects/first' },
  ];

  return items;
};
