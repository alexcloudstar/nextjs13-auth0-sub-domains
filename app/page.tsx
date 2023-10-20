'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';
import LinkButton from './components/LinkButton';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();

  return (
    <main className='flex h-full flex-col items-center justify-between p-24'>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-3xl'>Hi there! 👋🏻</h1>
        <div className='flex flex-row gap-4 mt-6'>
          {!user ? (
            <LinkButton href='/api/auth/login' text='Login' />
          ) : (
            <LinkButton href='/profile' text='Profile' />
          )}
        </div>
      </div>
    </main>
  );
}
