import React from 'react';
import Head from 'next/head';
import styles from './Login.module.scss';

const { LoginForm, formContainer} = styles;
export default function Login(): JSX.Element {
  return (
    <>
      <Head>
        <title>Нэвтрэх</title>
      </Head>
      <div className={ formContainer }><div className={ LoginForm }>
        <h1>Нэвтрэх</h1>
        <form action="" method="get">
          <input type="number" name="number" placeholder="Дугаар" id="number" />
          <input type="text" name="name" id="name" placeholder="Нэр "/>
          <button type="submit">Нэвтрэх</button>
        </form>
      </div></div>
    </>
  );
}