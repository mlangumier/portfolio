import { getLocale } from 'next-intl/server';
import nodemailer from 'nodemailer';

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

export interface ContactEmail {
  firstname: string;
  lastname: string;
  email: string;
  tel?: string;
  subject: string;
  message: string;
}
export async function sendMail({ firstname, lastname, email, tel, subject, message }: ContactEmail): Promise<boolean> {
  // TODO: get translations

  try {
    await transporter.verify();

    const locale = await getLocale();

    const dateNow = new Date();
    const formattedNow = {
      date: dateNow.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US'),
      time: dateNow.toLocaleTimeString(locale === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    // TODO: Move ContactEmailTemplate to its own file
    const contactEmailHtml = (showConfirmation?: boolean): string => {
      return `
        <div style="font-family:DM Sans, sans-serif; background-color:#eeeeee; height:100%; width:100%;">
          <div style="margin:0 12px;">
            <div style="max-width:600px; margin:auto; padding:32px 20px;">
              <p style="font-size:14px; color:#333333; text-align:end; margin:0;">
                Le ${formattedNow.date} à ${formattedNow.time}
              </p>
            </div>

            <div style="background-color:#ffffff; margin:auto; padding:32px 20px; max-width:600px;">
              ${
                showConfirmation
                  ? `
                <p style="font-size:16px; text-align:center; margin:12px 0 40px;">
                  Merci pour votre message, ${firstname}, je reviens vers vous dès que possible !
                </p>
                `
                  : ''
              }

              <p style="font-size: 16px; margin:12px 0;"> 
                <b>Contact Informations:</b> <br/>
                ${firstname} ${lastname} <br/>
                Email: ${email} <br/>
                Tel: ${tel || '-'}
              </p>
              

              <div style="margin:20px 0 0;">
                <p style="font-size:16px; line-height:20px; margin:0 0 4px;">
                  <b>Subject: </b>${showConfirmation ? subject : `Portfolio Contact - ${subject}`}
                </p>
                <p style="font-size:16px; line-height:20px; margin:0;"><b>Message: </b>${message}</p>
              </div>
            </div>

            ${
              showConfirmation
                ? `
              <div style="margin:auto; padding:40px 0;">
                <p style="font-size:20px; color:#333333; text-transform:uppercase; font-weight:bold; text-align:center; margin:0;">
                  à très bientôt!
                </p>
              </div>

              <div style="background-color:#333333; margin:auto; padding:32px 20px; max-width:600px">
                <p style="font-size:14px; line-height:20px; font-weight:bold; color:#ffffff; text-align:end; margin:0;">
                  Cordialement <br/>
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
      from: `"Portfolio (${firstname} ${lastname}) - " <` + email + '>',
      to: contactEmail,
      subject: `Portfolio Contact - ${subject}`,
      html: contactEmailHtml(),
    });

    //* ----- Sends confirmation mail to the sender
    await transporter.sendMail({
      from: '"Mathieu Langumier" <' + contactEmail + '>',
      to: email,
      subject: `Contact - ${subject}`,
      text: `Hi ${firstname}, thanks you for your message, I'll reply as soon as I can!`,
      html: contactEmailHtml(true),
    });

    return true;
  } catch (error) {
    console.error("--- Email couldn't be sent:", error);
    return false;
  }
}
