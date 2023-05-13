import HeadComponent from '@/components/common/HeadComponent';
import type { TCatApiResponse } from '@/types';
import { catUrlTypes } from '@/utils/constants';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Cat: NextPage = () => {
  const [selectedImageType, setSelectedImageType] = useState(
    catUrlTypes[0].url
  );

  const [catImageUrl, setCatImageUrl] = useState(catUrlTypes[0].url);

  const fetchData = async () => {
    const response: TCatApiResponse = (await (
      await fetch(selectedImageType, { method: 'GET' })
    ).json()) as TCatApiResponse;

    setCatImageUrl(`https://cataas.com${response.url}`);
  };

  useEffect(() => {
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageType]);

  return (
    <>
      <HeadComponent pageTitle='Cats'></HeadComponent>
      <div className='h-screen w-screen overflow-auto'>
        <div className='flex w-full items-center justify-center gap-4 py-12'>
          <select
            onChange={(e) => {
              setSelectedImageType(e.currentTarget.value);
            }}
            className='flex w-fit items-center justify-center rounded-md border bg-bg-100 py-1 text-2xl text-white'>
            {catUrlTypes.map((imageType) => {
              return (
                <option
                  className='text-base'
                  value={imageType.url}
                  key={imageType.id}>
                  {imageType.name}
                </option>
              );
            })}
          </select>
          <button onClick={fetchData} className='btn w-12'>
            Next
          </button>
        </div>
        <div className='w-ful flex items-center justify-center p-12'>
          <Link href={catImageUrl} target='_blank' passHref={true}>
            <img className='max-h-96' src={catImageUrl} alt='cat' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cat;
