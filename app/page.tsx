export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-between p-24'>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-3xl mb-2'>Hi there! 👋🏻</h1>
        <a
          href='/api/auth/login'
          className='bg-[#00b2ff] text-white py-1.5 px-4 rounded-md text-xl'
        >
          Login
        </a>
      </div>
    </main>
  );
}
