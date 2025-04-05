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
        <div className='flex'>
          <div>Logo</div>
          <input type='text' placeholder='search' className='h-11' />
        </div>

        <div className='flex h-full flex-grow space-x-6'>
          <div className='flex w-11 flex-col'>navbar</div>
          <div className='flex flex-grow flex-col'>{children}</div>
        </div>

        <div className='absolute right-0 bottom-0 left-0 h-32'>player</div>
      </body>
    </html>
  );
}
