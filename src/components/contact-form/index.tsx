'use client';

import { useTranslations } from 'next-intl';
import React, { useActionState } from 'react';
import { TbLoader2, TbSend2 } from 'react-icons/tb';

import Button from '../button';
import { submitContactForm } from './actions/submit-form';
import FormInput from './fields/input';
import FormTextArea from './fields/text-area';
import { ActionResponse, EStatus } from './form-types';

const initialState: ActionResponse = {
  status: EStatus.IDLE,
};

const ContactForm: React.FC = () => {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  const t = useTranslations('Pages.Homepage.sections.contact.form');

  if (state.status === EStatus.SUCCESS) {
    return (
      <div className="notification-block notification__success">
        <p className="text-inherit">{t.rich('responseMessages.success', { br: () => <br /> })}</p>
      </div>
    );
  }

  return (
    <form action={action} className="mx-auto mt-20 max-w-3xl space-y-4">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        <FormInput
          id="firstname"
          name="firstname"
          label={t('labels.firstname')}
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
          label={t('labels.lastname')}
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
          label={t('labels.email')}
          type="email"
          required
          maxLength={100}
          disabled={isPending}
          defaultValue={state.inputs?.email}
          errorMessage={state.fieldErrors?.email && state.fieldErrors?.email[0]}
        />
        <FormInput
          id="tel"
          name="tel"
          label={`${t('labels.tel')} (${t('labels.optional').toLowerCase()})`}
          type="tel"
          maxLength={15}
          disabled={isPending}
          defaultValue={state.inputs?.tel}
          errorMessage={state.fieldErrors?.tel && state.fieldErrors?.tel[0]}
        />
        <FormInput
          id="subject"
          name="subject"
          label={t('labels.subject')}
          type="text"
          minLength={1}
          maxLength={200}
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
        label={t('labels.message')}
        minLength={30}
        maxLength={2000}
        required
        rows={4}
        disabled={isPending}
        defaultValue={state.inputs?.message}
        errorMessage={state.fieldErrors?.message && state.fieldErrors?.message[0]}
      />

      {state.status === EStatus.ERROR && (
        <div className="notification-block notification__error">
          <p className="text-inherit">{state.message}</p>
        </div>
      )}

      <div className="flex justify-center pt-4">
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              {t('button.sending')} <TbLoader2 className="size-6 animate-spin" />
            </>
          ) : (
            <>
              {t('button.sendMessage')} <TbSend2 className="size-6" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
