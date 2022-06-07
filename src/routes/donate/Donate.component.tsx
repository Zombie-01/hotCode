import React from 'react';
import Head from 'next/head';
import styles from './Donate.module.scss';

const {
  doante
} = styles;

export default function Donate(): JSX.Element {
  return (
    <>
      <Head>
        <title>Хандив</title>
      </Head>
      <main className={ doante }>
        <h1>Хандив</h1>
        
        
      </main>
    </>
  );
}
