import React from 'react';

interface Props {
  id?: string;
  errorMessage: string;
}
const FormErrorMessage: React.FC<Props> = ({ id, errorMessage }) => {
  return (
    <p id={`${id}-error`} className="text-error ml-2 font-light">
      {errorMessage}
    </p>
  );
};

export default FormErrorMessage;
