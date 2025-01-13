'use client';

import React, { useActionState } from 'react';
import { TbLoader2, TbSend2 } from 'react-icons/tb';

import Button from '../button';
import { ActionResponse, EStatus } from './form-types';
import { submitContactForm } from './form-validation';
import FormInput from './input';
import FormTextArea from './text-area';

const initialState: ActionResponse = {
  status: EStatus.IDLE,
  message: '',
};

const ContactForm: React.FC = () => {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  // const t = useTranslations('')

  if (state.status === EStatus.SUCCESS) {
    return (
      <div className="mx-auto mt-20 max-w-md p-4 text-center">
        <p className="text-secondary">{state.message}</p>
      </div>
    );
  }

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
          disabled={isPending}
          defaultValue={state.inputs?.firstname}
          errorMessage={state.fieldErrors?.firstname && state.fieldErrors?.firstname[0]}
        />
        <FormInput
          id="lastname"
          name="lastname"
          label="Lastname"
          type="text"
          minLength={1}
          maxLength={50}
          required
          disabled={isPending}
          defaultValue={state.inputs?.lastname}
          errorMessage={state.fieldErrors?.lastname && state.fieldErrors?.lastname[0]}
        />
        <FormInput
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          disabled={isPending}
          defaultValue={state.inputs?.email}
          errorMessage={state.fieldErrors?.email && state.fieldErrors?.email[0]}
        />
        <FormInput
          id="tel"
          name="tel"
          label="Phone (optional)"
          type="tel"
          disabled={isPending}
          defaultValue={state.inputs?.tel}
        />
        <FormInput
          id="subject"
          name="subject"
          label="Subject"
          type="text"
          minLength={1}
          maxLength={100}
          required
          disabled={isPending}
          defaultValue={state.inputs?.subject}
          errorMessage={state.fieldErrors?.subject && state.fieldErrors?.subject[0]}
          className="md:col-span-2"
        />
      </div>
      <FormTextArea
        id="message"
        name="message"
        label="Message"
        minLength={30}
        rows={4}
        disabled={isPending}
        defaultValue={state.inputs?.message}
        errorMessage={state.fieldErrors?.message && state.fieldErrors?.message[0]}
      />

      {state.status === EStatus.ERROR && (
        <div className="mx-auto max-w-md p-4 text-center">
          <p className="text-red-400">{state.message}</p>
        </div>
      )}

      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          // TODO: Remove className after dark-mode setup
          className="bg-secondary text-primary hover:bg-secondary"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <TbLoader2 className="size-6 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send message <TbSend2 className="size-6" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
