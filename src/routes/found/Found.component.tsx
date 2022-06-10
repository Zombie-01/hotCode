import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import styles from './Found.module.scss';

const { mainFound, save } = styles;
export default function Found(): JSX.Element {

  return (
    <>
      <Head>
        <title>Хандив</title>
      </Head>
      <div className={ mainFound }>
        <div>
          <Link href="donate"><section>Өгөх</section></Link>
          <Link href="take"><section>Авах</section></Link>
        </div>
        <Link href="leftlist" >
          <section className={ save }>
          Хадгалсан  
          </section>
        </Link>
      </div>
    </>
  );
}