'use client';

import React, { useActionState } from 'react';

import Button from '../button';
import FormInput from './input';
import FormTextArea from './text-area';

// TODO: Install Zod & prepare data validation schema (+ react-hook-form ?)
// TODO: Setup Nodemailer
// TODO: Setup Gmail SMTP
// TODO: Use the "/api" route to setup the "sendEmail()" function?
// TODO: Add icons: btn-hover (message/arrow), spinner on 'pending', checkmark on success

// Testing function (will be replaced by API route)
async function handleForm() {
  console.log('--HandleForm');
}

const ContactForm: React.FC = () => {
  const [state, action, isPending] = useActionState(handleForm, null);

  console.log('--State', state);

  return (
    <form action={action} className="mt-20 space-y-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <FormInput id="firstname" label="Firstname" type="text" />
        <FormInput id="lastname" label="Lastname" type="text" />
        <FormInput id="email" label="Email" type="email" />
        <FormInput id="phone" label="Phone" type="tel" />
      </div>

      <FormTextArea id="message" label="Message" rows={4} />

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          // TODO: Remove className after dark-mode setup
          className="bg-secondary text-primary hover:scale-105 hover:bg-secondary"
          aria-disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
