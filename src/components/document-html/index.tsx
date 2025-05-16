import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

interface Props {
  locale: string;
  messages: IntlMessages;
  children: React.ReactNode;
}
const DocumentHtml: React.FC<Props> = ({ locale, messages, children }) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default DocumentHtml;
