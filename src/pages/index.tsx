import HeadComponent from '@/components/common/HeadComponent';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent></HeadComponent>
      <div className='h-screen w-screen'>
        <div className='my-16 flex justify-center'>
          <span className='font-sans text-4xl font-extrabold text-white md:text-5xl '>
            Animal Pictures
          </span>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <Link href={'/cat'}>
            <button className='btn'>Cats</button>
          </Link>
          <Link href={'/dog'}>
            <button className='btn'>Dogs</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
