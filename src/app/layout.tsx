import { Logo } from '@/assets/icons/Logo';
import { Navbar } from '@/components/Navbar';
import { Search } from '@/components/Search';
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
    <html lang='en'>
      <body className='relative flex min-h-dvh flex-col space-y-6 p-6 antialiased'>
        <header className='flex space-x-6'>
          <Logo />
          <Search />
        </header>

        <section className='flex h-full flex-grow space-x-6'>
          <Navbar />

          <main className='flex flex-grow flex-col'>{children}</main>
        </section>

        <section className='absolute right-0 bottom-0 left-0 h-32'>player</section>
      </body>
    </html>
  );
}
