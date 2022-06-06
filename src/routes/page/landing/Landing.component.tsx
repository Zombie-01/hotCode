import React from 'react';
import Head from 'next/head';
import Image from 'components/image';
import styles from './Landing.module.scss';

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  landingNavigationWrapper
} = styles;

export default function Landing(): JSX.Element {
  return (
    <>
      <Head>
        <title>Нүүр хуудас</title>
      </Head>
      <div className={ wrapper }>
        <div className={ landing }>
          <div className={ landingText }>
            <h1>Бяцхан зүрхний баатар</h1>
            <p>
              Энэ дэлхийн хамгийн хүчтэй атлаа сулхан цохьлох зүрх бүхний төлөө.<br />
              Та ч гэсэн баатар болж чадна.
            </p>
          </div>
          <div className={ landingNavigationWrapper }>
            <a
              href="https://github.com/tomburgs/pwa-boilerplate"
              target="_blank"
              rel="noreferrer"
            >
            хандив өгөх
            </a>
            <p>Таний багахан тус таны тусламж хамгийн их хэрэгтэй байгаа хүнд очих болно</p>
          </div>
          <Image
            className={ landingImage }
            src="/assets/landing.png"
            alt="Desktop & Mobile PWA Application"
            width="450px"
            height="310px"
          />
        </div>
      </div>
    </>
  );
}
