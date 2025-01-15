import { getLocale, getTranslations } from 'next-intl/server';
import nodemailer from 'nodemailer';

import { ContactFormData } from '../form-types';

const contactEmail = process.env.CONTACT_EMAIL;
const smtpServerUsername = process.env.SMTP_SERVER_USERNAME;
const smtpServerPassword = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: smtpServerUsername,
    pass: smtpServerPassword,
  },
});

export async function sendMail({
  firstname,
  lastname,
  email,
  tel,
  subject,
  message,
}: ContactFormData): Promise<boolean> {
  const t = await getTranslations('Pages.Homepage.sections.contact.emailContent');

  try {
    await transporter.verify();

    const locale = await getLocale();

    const dateNow = new Date();
    const formattedNow = {
      date: dateNow.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US'),
      time: dateNow.toLocaleTimeString(locale === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    const contactEmailHtml = (showConfirmation?: boolean): string => {
      return `
        <div style="font-family:DM Sans, sans-serif; background-color:#eeeeee; height:100%; width:100%;">
          <div style="margin:0 12px;">
            <div style="max-width:600px; margin:auto; padding:32px 20px;">
              <p style="font-size:14px; color:#333333; text-align:end; margin:0;">
                ${t('dateTime', { sendDate: formattedNow.date, sendTime: formattedNow.time })}
              </p>
            </div>

            <div style="background-color:#ffffff; margin:auto; padding:32px 20px; max-width:600px;">
              ${
                showConfirmation
                  ? `
                <p style="font-size:16px; text-align:center; margin:12px 0 40px;">
                  ${t('confirmationText', { senderFirstname: firstname })}
                </p>
                `
                  : ''
              }

              <p style="font-size: 16px; margin:12px 0;"> 
                <b>${t('contactInfo')} :</b> <br/>
                ${firstname} ${lastname} <br/>
                ${t('emailLabel')} : ${email} <br/>
                ${t('telLabel')} : ${tel || '-'}
              </p>
              

              <div style="margin:20px 0 0;">
                <p style="font-size:16px; line-height:20px; margin:0 0 4px;">
                  <b>${t('subjectLabel')} : </b>${showConfirmation ? subject : `Portfolio Contact - ${subject}`}
                </p>
                <p style="font-size:16px; line-height:20px; margin:0;"><b>${t('messageLabel')} : </b>${message}</p>
              </div>
            </div>

            ${
              showConfirmation
                ? `
              <div style="margin:auto; padding:40px 0;">
                <p style="font-size:20px; color:#333333; text-transform:uppercase; font-weight:bold; text-align:center; margin:0;">
                  ${t('cyaText')}
                </p>
              </div>

              <div style="background-color:#333333; margin:auto; padding:32px 20px; max-width:600px">
                <p style="font-size:14px; line-height:20px; font-weight:bold; color:#ffffff; text-align:end; margin:0;">
                  ${t('salutation')} <br/>
                </p>
                <p style="font-size:14px; line-height:20px; font-weight:bold; color:#ffffff; text-align:end; margin:0;">
                  Mathieu Langumier
                </p>
              </div>
            `
                : '<div style="height:40px; max-width:600px;"></div>'
            }
          </div>
        </div>
      `;
    };

    //* ----- Sends mail to me
    await transporter.sendMail({
      from: `"Portfolio (${firstname} ${lastname})" <` + email + '>',
      to: contactEmail,
      subject: `Portfolio Contact - ${subject}`,
      html: contactEmailHtml(),
    });

    //* ----- Sends confirmation mail to the sender
    await transporter.sendMail({
      from: '"Mathieu Langumier" <' + contactEmail + '>',
      to: email,
      subject: `Contact - ${subject}`,
      html: contactEmailHtml(true),
    });

    return true;
  } catch (error) {
    console.error("--- Email couldn't be sent:", error);
    return false;
  }
}
