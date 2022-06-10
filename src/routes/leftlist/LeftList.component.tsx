import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './LeftList.module.scss';

const { saveList, listitem, date, body, header, text,img } = styles;
export default function LeftList(): JSX.Element{


  return (
    <>
      <Head>
        <title>Хадгалсан</title>
      </Head>
      <div className={ saveList }>
        <Link href="asd">
          <div className={ listitem }>
            <div className={ img }>
              <img src="" alt="" />
            </div>
            <div className={ body }>
              <div className={ header }>name</div>
              <div className={ text }>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, non!</p>
              </div>
              <div className={ date }>2022:10:5</div>
            </div>
          </div>
        </Link>
        <Link href="asd">
          <div className={ listitem }>
            <div className={ img }>
              <img src="" alt="" />
            </div>
            <div className={ body }>
              <div className={ header }>name</div>
              <div className={ text }>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, non!</p>
              </div>
              <div className={ date }>2022:10:5</div>
            </div>
          </div>
        </Link>
        <Link href="asd">
          <div className={ listitem }>
            <div className={ img }>
              <img src="" alt="" />
            </div>
            <div className={ body }>
              <div className={ header }>name</div>
              <div className={ text }>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, non!</p>
              </div>
              <div className={ date }>2022:10:5</div>
            </div>
          </div>
        </Link>

      </div>
    </>
  );
}