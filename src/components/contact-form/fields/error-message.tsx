import React from 'react';

interface Props {
  id?: string;
  errorMessage: string;
}
const FormErrorMessage: React.FC<Props> = ({ id, errorMessage }) => {
  return (
    <p id={`${id}-error`} className="ml-2 font-light text-error">
      {errorMessage}
    </p>
  );
};

export default FormErrorMessage;
