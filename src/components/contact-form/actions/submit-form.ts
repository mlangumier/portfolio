'use server';

import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { z } from 'zod';

import { emailDisplay } from '@/data/socials';
import { capitalizeSentence } from '@/utils/capitalize-sentence';

import { ActionResponse, ContactFormData, EStatus } from '../form-types';
import { sendMail } from './send-mail';

const contactFormSchema = (t: ReturnType<typeof useTranslations<'Pages.Homepage.sections.contact.form.fieldErrors'>>) =>
  z.object({
    firstname: z
      .string()
      .trim()
      .min(1, { message: t('firstname') }),
    lastname: z
      .string()
      .trim()
      .min(1, { message: t('lastname') }),
    email: z
      .string()
      .trim()
      .email({ message: t('email') }),
    tel: z
      .union([
        z
          .string()
          .trim()
          .regex(/^[0-9\.\+\(\))]+$/, { message: t('tel') })
          .min(8, { message: t('tel') })
          .max(15, { message: t('tel') }),
        z.string().trim().length(0),
      ])
      .optional(),
    subject: z
      .string()
      .trim()
      .min(1, { message: t('subject') }),
    message: z
      .string()
      .trim()
      .min(30, { message: t('message') }),
  });

export async function submitContactForm(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const t = await getTranslations('Pages.Homepage.sections.contact.form.responseMessages');
  const tFieldErrors = await getTranslations('Pages.Homepage.sections.contact.form.fieldErrors');

  try {
    const rawData: ContactFormData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      tel: formData.get('tel') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    //* Validate form data:
    const validatedData = contactFormSchema(tFieldErrors).safeParse(rawData);

    if (!validatedData.success) {
      return {
        status: EStatus.ERROR,
        message: t('errors.missingFields'),
        fieldErrors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const response: boolean = await sendMail({
      firstname: capitalizeSentence(validatedData.data.firstname),
      lastname: capitalizeSentence(validatedData.data.lastname),
      email: validatedData.data.email.toLowerCase(),
      tel: validatedData.data.tel,
      subject: validatedData.data.subject,
      message: validatedData.data.message,
    });

    if (!response) {
      return {
        status: EStatus.ERROR,
        message: t('errors.sendingFailed', { emailAddress: emailDisplay }),
        inputs: rawData,
      };
    }

    return {
      status: EStatus.SUCCESS,
    };
  } catch {
    return {
      status: EStatus.ERROR,
      message: t('errors.generic', { emailAddress: emailDisplay }),
    };
  }
}
