import Head from 'next/head';
import type { FC } from 'react';

const HeadComponent: FC<{ pageTitle?: string }> = ({ pageTitle }) => {
  return (
    <Head>
      {pageTitle === undefined ? (
        <title>{`Animal Pictures`}</title>
      ) : (
        <title>{`Animal Pictures | ${pageTitle}`}</title>
      )}

      <meta
        name='viewport'
        content='width=device-width, user-scalable=no'></meta>
      <meta name='darkreader-lock' />

      <meta name='twitter:title' content='Animal Pictures' />
      <meta name='twitter:description' content='Website for animal Pictures' />

      <meta property='og:image:alt' content='Website for animal Pictures' />
      <meta property='og:site_name' content='Animal Pictures' />
      <meta property='og:type' content='object' />
      <meta property='og:title' charSet='UTF-8' content='Animal Pictures' />
      <meta
        property='og:description'
        charSet='UTF-8'
        content='Website for animal Pictures'
      />

      <meta content='#ec4899' data-react-helmet='true' name='theme-color' />
    </Head>
  );
};

export default HeadComponent;
