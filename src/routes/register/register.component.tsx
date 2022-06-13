import React from 'react';
import Head from 'next/head';
import styles from './register.module.scss';

const { mainBody, border, header, profile, headerbody,chooseButton, body, section,subButton  } = styles;
export default function Register(): JSX.Element {

  return(
    <>
      <Head>
        <title>Хүсэлт</title>
      </Head>
      <div className={ mainBody }>
        <div className={ border }>
          <h2>Бүртгүүлэх</h2>
          <form action="" method="get">
            <div className={ header }>
              <div className={ profile }>img</div>
              <div className={ headerbody }>
                <input type="text" name="lastName" id="lastName" placeholder="Овог" />
                <input type="text" name="name" id="name" placeholder="нэр"/>
                <input type="number" name="money" id="money" placeholder="Мөнгөн дүн ₮"/>
                <input type="date" name="date" id="date" placeholder="Төрсөн өдөр"/>
              </div>
            </div>
            <div className={ body }>
              <div className={ section }>
                <span>Эмнэлгийн баталгаа</span>
                <label htmlFor="file-upload" className={ chooseButton }>file хавсаргах</label>
                <input id="file-upload" type="file" name="file" />
              </div>
              <div className={ section }>
                <span>Өвчний түүх болон шаардлатай байгаа эмчилгээний мэдээлэл</span>
                <label htmlFor="file-upload" className={ chooseButton }>file хавсаргах</label>
                <input id="file-upload" type="file" name="file" />
              </div>
              
              <div className={ section }>
                <span>Өрхийн орлогийн мэдүүлэг</span>
                <label htmlFor="file-upload" className={ chooseButton }>file хавсаргах</label>
                <input id="file-upload" type="file" name="file" />
              </div>
              <div className={ section }>
                <span>Нэмэлтээр хавсаргаж болох зурагнууд</span>
                <label htmlFor="file-upload" className={ chooseButton }>file хавсаргах</label>
                <input id="file-upload" type="file" name="file" />
              </div>
            </div>
            <button type="submit" id={ subButton }>Илгээх</button>
          </form>
        </div>
      </div>
    </>
  );
}