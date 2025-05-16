import React from 'react';

import NavigationLink from '@/components/links/navigation-link';

export default async function HomeProject() {
  return (
    <main>
      <h1 className="text-primary text-3xl font-bold uppercase">Welcome. Everything is fine !</h1>
      <NavigationLink href={'/'}>{`<- Home`}</NavigationLink>
    </main>
  );
}
