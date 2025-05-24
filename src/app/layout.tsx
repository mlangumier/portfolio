import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return children;
}
