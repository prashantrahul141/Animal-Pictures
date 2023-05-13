import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='fixed left-0 top-0 h-screen w-screen bg-bg'>
      <Component {...pageProps} />;
    </div>
  );
}
