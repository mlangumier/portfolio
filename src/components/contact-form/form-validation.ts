'use server';

import { z } from 'zod';

import { capitalizeSentence } from '@/utils/capitalize-sentence';

import { ActionResponse, ContactFormData } from './form-types';
import { sendMail } from './send-mail';

const contactSchema = z.object({
  firstname: z.string().trim().min(1, { message: 'Firstname is required' }),
  lastname: z.string().trim().min(1, { message: 'Lastname is required' }),
  email: z.string().trim().email({ message: 'Correct email format required' }),
  tel: z.string().trim().optional(),
  subject: z.string().trim().min(1, { message: 'Subject is required' }),
  message: z.string().trim(),
  // .min(30, { message: 'Your message must contain at least 30 characters.' }),
});

// TODO: Translation for Zod schema error messages
// https://next-intl.dev/docs/environments/actions-metadata-route-handlers#server-actions-zod
// https://github.com/amannn/next-intl/tree/main/examples/example-app-router-without-i18n-routing

export async function submitContactForm(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  try {
    const rawData: ContactFormData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      tel: formData.get('tel') as string | undefined,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Validate form data:
    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Fields incorrect',
        fieldErrors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    const response: boolean = await sendMail({
      firstname: capitalizeSentence(validatedData.data.firstname),
      lastname: capitalizeSentence(validatedData.data.lastname),
      email: validatedData.data.email,
      tel: validatedData.data.tel,
      subject: validatedData.data.subject,
      message: validatedData.data.message,
    });

    if (!response) {
      return {
        success: false,
        message: 'Failed to send the message. Please, try again.',
        inputs: rawData,
      };
    }

    return {
      success: true,
      message: 'Email sent!',
    };
  } catch {
    return {
      success: false,
      message: 'Please fix errors',
    };
  }
}
