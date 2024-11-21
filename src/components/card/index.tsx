import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}

const Card: React.FC<Props> = ({ children, className, padding = false }) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-md bg-white shadow-bottom-right',
        className,
        padding && 'px-5 py-8 md:px-8 md:py-10'
      )}
    >
      {children}
    </div>
  );
};

export default Card;
