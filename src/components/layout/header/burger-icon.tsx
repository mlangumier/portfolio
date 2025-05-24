import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props {
  isOpen: boolean;
  handleIsOpen: () => void;
  className?: string;
}

const BurgerIcon: React.FC<Props> = ({ isOpen, handleIsOpen, className }) => {
  return (
    <div onClick={handleIsOpen} className={cn('relative h-7 w-10 hover:cursor-pointer', className)}>
      <span
        className={cn(
          'absolute left-0 h-1 rounded-xs bg-accent transition-all',
          isOpen ? 'top-1/2 w-full -translate-y-1/2 rotate-45 duration-500' : 'top-0 w-2/3 duration-200'
        )}
      />
      <span
        className={cn(
          'absolute top-1/2 h-1 -translate-y-1/2 transform rounded-xs bg-accent transition-all',
          isOpen ? 'left-1/2 w-0 -translate-x-1/2 duration-200' : 'left-0 w-full duration-500'
        )}
      />
      <span
        className={cn(
          'absolute right-0 h-1 rounded-xs bg-accent transition-all',
          isOpen ? 'bottom-1/2 w-full translate-y-1/2 -rotate-[45deg] duration-500' : 'bottom-0 w-2/3 duration-200'
        )}
      />
    </div>
  );
};

export default BurgerIcon;
