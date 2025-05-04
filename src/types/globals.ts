import React from 'react';

import { IPathname } from '@/i18n/routing';

//*-------- CORE --------*\\

export interface LayoutProps extends PageProps {
  children: React.ReactNode;
}

export interface PageProps {
  params: Promise<{ locale: string }>;
}

//*-------- NAVIGATION --------*\\

export interface INavRouteItem {
  label: string;
  pathname: IPathname;
}

export interface IExternalLink {
  label: string;
  url: string;
  // logo: any; // Typing: https://github.com/parcel-bundler/parcel/discussions/7910
}
