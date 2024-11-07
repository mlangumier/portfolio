import clsx from 'clsx';
import React from 'react';

interface Props {
    isOpen: boolean;
    handleIsOpen: () => void;
}

const BurgerIcon: React.FC<Props> = ({ isOpen, handleIsOpen }) => {
    return (
        <div onClick={handleIsOpen} className="relative h-full w-14">
            <span
                className={clsx(
                    'absolute right-[50%] top-0 h-1.5 w-7 transform rounded-sm bg-primary transition duration-500 ease-in-out',
                    isOpen && 'translate-x-1.5 translate-y-3 rotate-45'
                )}
            />
            <span
                className={clsx(
                    'absolute right-0 top-5 h-1.5 w-14 transform rounded-sm bg-primary transition duration-500 ease-in-out',
                    isOpen && '-rotate-45'
                )}
            />
            <span
                className={clsx(
                    'absolute right-0 top-10 h-1.5 w-7 transform rounded-sm bg-primary transition duration-500 ease-in-out',
                    isOpen && '-translate-x-1.5 -translate-y-3 rotate-45'
                )}
            />
        </div>
    );
};

export default BurgerIcon;
