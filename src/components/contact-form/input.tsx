import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const FormInput: React.FC<Props> = ({ label, id, className, ...rest }) => {
  return (
    <div className={cn('form-field', className)}>
      {label && (
        // TODO: Remove className after dark-mode setup
        <label htmlFor={id} className="text-secondary">
          {label}
        </label>
      )}
      <input id={id} {...rest} className="form-input" />
    </div>
  );
};

export default FormInput;
