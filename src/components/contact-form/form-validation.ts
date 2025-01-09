'use server';

import { z } from 'zod';

import { ActionResponse, ContactFormData } from './form-types';

const contactSchema = z.object({
  firstname: z.string().trim().min(1, { message: 'Firstname is required' }),
  lastname: z.string().trim().min(1, { message: 'Lastname is required' }),
  email: z.string().trim().email({ message: 'Correct email format required' }),
  tel: z.string().trim().optional(),
  message: z.string().trim().min(30, { message: 'Your message must contain at least 30 characters.' }),
});

// TODO: Translation for Zod schema error messages
// https://next-intl.dev/docs/environments/actions-metadata-route-handlers#server-actions-zod
// https://github.com/amannn/next-intl/tree/main/examples/example-app-router-without-i18n-routing

// Testing function (will be replaced by API route)
export async function submitContactForm(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  //TODO: Remove later (simulates network delay)
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const rawData: ContactFormData = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      tel: formData.get('tel') as string | undefined,
      message: formData.get('message') as string,
    };

    // Validate form data
    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Fields incorrect',
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    // TODO: Place Nodemail code here to send email:
    console.log('----- Email sent:', validatedData.data);

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
