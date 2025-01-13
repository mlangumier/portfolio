import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  errorMessage?: string;
}

const FormInput: React.FC<Props> = ({ label, id, className, errorMessage, ...rest }) => {
  // TODO: Update colors after dark mode setup
  return (
    <div className={cn('form-field', className)}>
      {label && (
        <label htmlFor={id} className="text-secondary">
          {label}
        </label>
      )}
      <input id={id} {...rest} className={cn('form-input', errorMessage && 'border-2 border-red-400')} />

      {errorMessage && (
        <p id={`${id}-error`} className="ml-2 text-sm text-red-400">
          *{errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormInput;
