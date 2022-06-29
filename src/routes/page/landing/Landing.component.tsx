import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
              Энэ дэлхийн хамгийн хүчтэй атлаа сулхан цохилох зүрх бүхний төлөө.<br />
              Та ч гэсэн баатар болж чадна.
            </p>
          </div>
          <div className={ landingNavigationWrapper }>
            <div className="primary-button main-gradient">
              <Link href="/donate">Хандив өгөх</Link>
            </div>
            <p>Таны багахан тус таны тусламж хамгийн их хэрэгтэй байгаа хүнд очих болно</p>
          </div>
        </div>
      </div>
    </>
  );
}
