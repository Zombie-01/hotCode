import React from 'react';
import Head from 'next/head';
import Pages from 'components/pages';
import Placeholder from 'components/placeholder';
import styles from './PageList.module.scss';

const {
  pageList,
  pageListContainer
} = styles;

export default function PageList(): JSX.Element {
  return (
    <>
      <Head>
        <title>Мэдээ мэдээлэл</title>
      </Head>
      <main className={ pageList }>
        <h1>Мэдээ мэдээлэл</h1>
        <p>
            Шилэн данс, эрүүл мэндийн даатгалын тухай мэдээлэл, бидний цаашдийн үйл ажиллагаа болон бидэнд ирсэн эерэг сэтгэгдлүүдийг эндээс унших боломжтой
        </p>
        <Pages className={ pageListContainer }>
          <li><Placeholder length="medium" /></li>
          <li><Placeholder length="medium" /></li>
          <li><Placeholder length="medium" /></li>
          <li><Placeholder length="medium" /></li>
          <li><Placeholder length="medium" /></li>
        </Pages>
      </main>
    </>
  );
}
