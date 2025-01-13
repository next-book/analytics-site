import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Next Book',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
