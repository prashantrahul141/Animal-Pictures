import type { NextPage } from 'next';

import { dogBreedsData } from '@/utils/constants';
import { useEffect, useState } from 'react';
import HeadComponent from '@/components/common/HeadComponent';
import Link from 'next/link';
import type { TDogApiResponse } from '@/types';

const Dog: NextPage = () => {
  const [selectedBreedUrl, setSelectedBreedUrl] = useState(
    dogBreedsData[0].url
  );
  const [dogImageUrl, setDogImageUrl] = useState(dogBreedsData[0].url);

  const fetchData = async () => {
    const response = await fetch(selectedBreedUrl, { method: 'GET' });
    const newData: TDogApiResponse = (await response.json()) as TDogApiResponse;
    setDogImageUrl(newData.message);
  };

  useEffect(() => {
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBreedUrl]);

  return (
    <>
      <HeadComponent pageTitle='Dogs'></HeadComponent>
      <div className='h-screen w-screen overflow-auto'>
        <div className='flex w-full items-center justify-center gap-4 py-12'>
          <select
            onChange={(e) => {
              setSelectedBreedUrl(e.currentTarget.value);
            }}
            className='flex w-fit items-center justify-center rounded-md border bg-bg-100 py-1 text-2xl text-white'>
            {dogBreedsData.map((dogBreed) => {
              return (
                <option
                  className='text-base'
                  value={dogBreed.url}
                  key={dogBreed.id}>
                  {dogBreed.name}
                </option>
              );
            })}
          </select>
          <button onClick={fetchData} className='btn w-12'>
            Next
          </button>
        </div>
        <div className='w-ful flex items-center justify-center p-12'>
          <Link href={dogImageUrl} target='_blank' passHref={true}>
            <img className='max-h-96' src={dogImageUrl} alt='dog' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dog;
