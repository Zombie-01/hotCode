import React from 'react';
import Head from 'next/head';
import styles from './register.module.scss';

const { mainBody, border, header, profile, headerbody} = styles;
export default function Register(): JSX.Element {

  return(
    <>
      <Head>
        <title>Хүсэлт</title>
      </Head>
      <div className={ mainBody }>
        <div className={ border }>
          <h2>Бүтргүүлэх</h2>
          <form action="" method="get">
            <div className={ header }>
              <div className={ profile }>img</div>
              <div className={ headerbody }>
                <input type="text" name="" id="" placeholder="Овог" />
                <input type="text" name="name" id="name" placeholder="нэр"/>
                <input type="date" name="date" id="date" placeholder="Төрсөн өдөр"/>
              </div>
            </div>
            <div>
              <span>Эмнэлгийн баталгаа</span>
              <input type="file" name="file" id="file"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}