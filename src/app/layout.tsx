import '@/styles/global.css';
import '@/styles/theme.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Sonix',
  description: 'Sonix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased base">{children}</body>
    </html>
  );
}
