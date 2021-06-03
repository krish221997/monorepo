import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Free Web tutorials"></meta>
        <title>Welcome to app two working!</title>
      </Head>
      <NxLogo/>
      {/* <h1>App 2 _app.tsx</h1> */}
      <div>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
