import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

interface Props {
  locale: string;
  messages: IntlMessages;
  className: string;
  children: React.ReactNode;
}
const DocumentHtml: React.FC<Props> = ({ locale, messages, className, children }) => {
  return (
    <html lang={locale} suppressHydrationWarning className={`${className}`}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default DocumentHtml;
