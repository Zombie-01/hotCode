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
        { /* <Particle params={ ParticlesConfig } className="App-particles__container" /> */ }
        <div className={ landing }>
          <div className={ landingText }>
            <span className="landing--title">A Place for you</span>
          </div>
          <div className={ landingNavigationWrapper }>
            <div className="primary-button main-gradient">
              <Link href="/donate">DONATE</Link>
            </div>
            <p style={ {marginTop: "32px"} } >
              Энэ дэлхийн хамгийн хүчтэй атлаа сулхан цохилох зүрх бүхний төлөө.
            </p>
            <div style={ {padding: "28px 0px 28px 0px"} }>
              <img src="assets/5299.jpg" alt="illust" width="350px" />
            </div>
            <p>Таны багахан тус таны тусламж хамгийн их хэрэгтэй байгаа хүнд очих болно</p>
          </div>
        </div>
      </div>
    </>
  );
}
