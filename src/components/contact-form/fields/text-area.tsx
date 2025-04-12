import React from 'react';

import { cn } from '@/utils/tailwindcss';

import FormErrorMessage from './error-message';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  errorMessage?: string;
}

const FormTextArea: React.FC<Props> = ({ label, id, className, errorMessage, ...rest }) => {
  return (
    <div className={cn('form-field', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea id={id} {...rest} className={cn('form-input', errorMessage && 'border-error border-2')} />

      {errorMessage && <FormErrorMessage id={id} errorMessage={errorMessage} />}
    </div>
  );
};

export default FormTextArea;
