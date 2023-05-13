import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AnimalPictures: NextPage = () => {
  // this page is for redirecting to main page when testing locally.
  const router = useRouter();
  useEffect(() => {
    void router.push('/');
  });
  return <></>;
};

export default AnimalPictures;
