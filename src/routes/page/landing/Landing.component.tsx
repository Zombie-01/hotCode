import React, { useRef, useState, useEffect } from 'react';
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
  const myref = useRef(null)
  const [ x, setX ] = useState()
  useEffect(() => {
    getPosition();
  }, []);
  const getPosition = () => {
  }
  const y = myref.current.offset();
  console.log(y)
  
  return (
    <>
      <Head>
        <title>Нүүр хуудас</title>
      </Head>
      <div className={ wrapper }>
        { /* <Particle params={ ParticlesConfig } className="App-particles__container" /> */ }
        <div className={ landing }>
          <div className={ landingText }>
            <span className="landing--title">Хүүхэд бүрийн төлөө</span>
          </div>
          <div className={ landingNavigationWrapper }>
<<<<<<< HEAD
            <div ref={myref} ><Link href="/donate">Хандив өгөх</Link></div>
            <p>Таний багахан тус таны тусламж хамгийн их хэрэгтэй байгаа хүнд очих болно</p>
=======
            <div className="primary-button main-gradient">
              <Link style={ {fontSize: "18px !important"} } href="/donate">ХАНДИВ ӨРГӨХ</Link>
            </div>
            <p style={ {marginTop: "32px"} } >
              Энэ дэлхийн хамгийн хүчтэй атлаа сулхан цохилох зүрх бүхний төлөө.
            </p>
            <div style={ {padding: "28px 0px 28px 0px"} }>
              <img src="assets/5299.jpg" alt="illust" width="350px" />
            </div>
            <p>Таны багахан тус таны тусламж хамгийн их хэрэгтэй байгаа хүнд очих болно</p>
>>>>>>> 817d83cc9b32cd80db42e9c828ea3b234d8aebcd
          </div>
        </div>
      </div>
    </>
  );
}
