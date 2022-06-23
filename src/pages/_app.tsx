import React, { useEffect,  useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'contexts/theme';
import Header from 'components/header';
import Footer from 'components/footer';
import NotificationList from 'components/notificationList';
import store from 'stores';
import { Provider } from 'react-redux';
import { statusBarStyle } from 'config';
import { AppProps } from 'next/app';
import 'styles/main.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const viewportWidth = globalThis.innerWidth;
  const [ isMobile, setisMobile ] = useState(true);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(
        process.env.serviceWorkerUrl as string,
        { scope: '/' }
      );
    }
    if (viewportWidth > 768){
      setisMobile(false);
    }
  }, []);
  

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={ statusBarStyle } />
        <meta name="msapplication-TileImage" content="logo512.png"/>
        <link rel="apple-touch-startup-image" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-startup-image" sizes="256x256" href="/logo256.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/logo512.png" />
        <link rel="apple-touch-icon" sizes="198x198" href="/logo256.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={ store }>
        <ThemeProvider>
          <NotificationList />
          <Header />
          <Component { ...pageProps } />
          { isMobile? <div style={ { margin: '3.8rem' } }></div>: <Footer /> }
        </ThemeProvider>
      </Provider>
    </>
  );
}
