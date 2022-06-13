import React from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import styles from './Found.module.scss';

const { mainFound, save, donation, take } = styles;
export default function Found(): JSX.Element {

  return (
    <>
      <Head>
        <title>Хандив</title>
      </Head>
      <div className={ mainFound }>
        <div>
          <Link href="donate"><section className={ donation }>Хандив өгөх</section></Link>
          <Link href="take"><section className={ take }>Хандив авах</section></Link>
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