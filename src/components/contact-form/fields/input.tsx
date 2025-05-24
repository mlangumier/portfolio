import React from 'react';

import { cn } from '@/utils/tailwindcss';

import FormErrorMessage from './error-message';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  errorMessage?: string;
}

const FormInput: React.FC<Props> = ({ label, id, className, errorMessage, ...rest }) => {
  return (
    <div className={cn('form-field', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} className={cn('form-input', errorMessage && 'border-2 border-error')} />

      {errorMessage && <FormErrorMessage id={id} errorMessage={errorMessage} />}
    </div>
  );
};

export default FormInput;
