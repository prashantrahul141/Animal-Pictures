import HeadComponent from '@/components/common/HeadComponent';
import type { NextPage } from 'next';
import Link from 'next/link';

const FourZeroFour: NextPage = () => {
  return (
    <>
      <HeadComponent pageTitle='404'></HeadComponent>
      <div className='mt-12 flex w-full flex-col items-center justify-center gap-12'>
        <span className='font-sans text-4xl font-extrabold text-white'>
          404 - Page not found.
        </span>
        <Link href={'/Animal-Pictures'}>
          <button className='btn'>Home</button>
        </Link>
      </div>
    </>
  );
};

export default FourZeroFour;
