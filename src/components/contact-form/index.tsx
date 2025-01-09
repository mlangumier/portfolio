'use client';

import React, { useActionState } from 'react';

import { cn } from '@/utils/tailwindcss';

import Button from '../button';
import { ActionResponse } from './form-types';
import { submitContactForm } from './form-validation';
import FormInput from './input';
import FormTextArea from './text-area';

// TODO: Setup Nodemailer
// TODO: Setup Gmail SMTP
// TODO: Use the "/api" route to setup the "sendEmail()" function?
// TODO: Add icons: btn-hover (message/arrow), spinner on 'pending', checkmark on success

const initialState: ActionResponse = {
  success: false,
  message: '',
};

const ContactForm: React.FC = () => {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="mx-auto mt-20 max-w-3xl space-y-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <FormInput
          id="firstname"
          name="firstname"
          label="Firstname"
          type="text"
          minLength={1}
          maxLength={50}
          required
          defaultValue={state.inputs?.firstname}
          errorMessage={state.errors?.firstname && state.errors?.firstname[0]}
        />
        <FormInput
          id="lastname"
          name="lastname"
          label="Lastname"
          type="text"
          minLength={1}
          maxLength={50}
          required
          defaultValue={state.inputs?.lastname}
          errorMessage={state.errors?.lastname && state.errors?.lastname[0]}
        />
        <FormInput
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          defaultValue={state.inputs?.email}
          errorMessage={state.errors?.email && state.errors?.email[0]}
        />
        <FormInput id="tel" name="tel" label="Phone (optional)" type="tel" defaultValue={state.inputs?.tel} />
      </div>
      <FormTextArea
        id="message"
        name="message"
        label="Message"
        minLength={30}
        rows={4}
        defaultValue={state.inputs?.message}
        errorMessage={state.errors?.message && state.errors?.message[0]}
      />

      {/* Temporary - Remove after Success/Error setup */}
      {state?.message && (
        <div
          className={cn(
            'mx-auto w-fit border-2 bg-white p-4 text-center',
            state.success ? 'border-green-500' : 'border-red-500'
          )}
        >
          {state.success ? (
            <p className="text-green-500">{state.message}</p>
          ) : (
            <p className="text-red-500">{state.message}</p>
          )}
        </div>
      )}

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          // TODO: Remove className after dark-mode setup
          className="bg-secondary text-primary hover:bg-secondary"
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
