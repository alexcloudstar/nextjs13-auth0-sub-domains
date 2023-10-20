'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation';
import LinkButton from '../components/LinkButton';

const Profile = () => {
  const { user, isLoading } = useUser();

  if (!user && !isLoading) {
    redirect('/api/auth/login');
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='h-full flex items-center justify-center flex-col'>
      <h1>Profile</h1>

      <div className='mb-5 text-center'>
        <p>{user?.nickname}</p>
        <p>{user?.email}</p>
      </div>
      <LinkButton href='/api/auth/logout' text='Logout' />
    </div>
  );
};

export default Profile;
