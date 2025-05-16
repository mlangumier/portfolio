import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CategoryBlock: React.FC<Props> = ({ title, children, className }) => (
  <div className={className}>
    <p className="title-category">{title}</p>
    <ul className="mt-2 flex flex-col gap-2">{children}</ul>
  </div>
);
