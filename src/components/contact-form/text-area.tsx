import React from 'react';

import { cn } from '@/utils/tailwindcss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  errorMessage?: string;
}

const FormTextArea: React.FC<Props> = ({ label, id, className, errorMessage, ...rest }) => {
  return (
    <div className={cn('form-field', className)}>
      {label && (
        // TODO: Remove className after dark-mode setup
        <label htmlFor={id} className="text-secondary">
          {label}
        </label>
      )}
      <textarea id={id} {...rest} className={cn('form-input', errorMessage && 'border border-red-500')} />

      {errorMessage && (
        <p id={`${id}-error`} className="ml-2 text-sm text-red-500">
          *{errorMessage}
        </p>
      )}
    </div>
  );
};

export default FormTextArea;
