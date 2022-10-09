import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { saveItem } from 'hooks/save';
import styles from './LeftList.module.scss';

const { saveList, listitem, dateStyle, body, header, textStyle, img, costStyle, costDiv, before } = styles;
export default function LeftList(): JSX.Element{

  const db = [
    {
      url: 'assets/avatar1.png'
    },
    {
      url: 'assets/avatar2.png'
    },
    {
      url: 'assets/avatar3.png'
    },
    {
      url: 'assets/avatar4.png'
    },
    {
      url: 'assets/avatar5.png'
    }
  ];

  const item  = saveItem();
  return (
    <>
      <Head>
        <title>Хадгалсан</title>
      </Head>
      <div className={ saveList }>
        { Object.values(item).map((e,i) => {
          return (<Link key={ i } href="upList">
            <div className={ listitem }>
              <div className={ img }>
                <img src="/assets/avatar3.png" width="140px" alt="" />
              </div>
              <div className={ body }>
                <div className={ header }>{ e.userId }</div>
                <div className={ textStyle }>
                  <p>{ e.title }</p>
                </div>
                <div className={ dateStyle }>2022.10.5</div>
              </div>
              <div className={ costDiv }>
                <h4>1000$</h4>
                <div className={ costStyle }>
                  <div className={ before }></div>
                </div>
              </div>
            </div>
          </Link>);
        }) }
        

      </div>
    </>
  );
}