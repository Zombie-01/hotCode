import { request } from 'https';
import React, { useState } from 'react';
import Head from 'next/head';
import { reguestState } from 'stores/register';
import styles from './register.module.scss';

const { mainBody, border, header, profile, headerbody,chooseButton, body, section,subButton  } = styles;
export default function Register(): JSX.Element {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cost, setCost] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(null);

  const handleDateUpdate = (e: any) => {
    const dateValue = e.target.value;
    setDate(dateValue);  // state variable updated here
  };

  const saveRegister = () => {
    const state = {
      name,
      lastName,
      cost,
      date,
      phone,
      imgs: {
        img_01: '01img.jpg',
        img_02: '02img.jpg',
        img_03: '03img.jpg'
      }
    };
    reguestState( { state } );
  };
  return(
    <>
      <Head>
        <title>Хүсэлт</title>
      </Head>
      <div className={ mainBody }>
        <div className={ border }>
          <h2>Бүртгүүлэх</h2>
          <form action="" method="post">
            <div className={ header }>
              <div className={ profile }>img</div>
              <div className={ headerbody }>
                <input onChange={ e => setName(e.target.value) } type="text" name="lastName" id="lastName" placeholder="Овог" />
                <input onChange={ e => setLastName(e.target.value) } type="text" name="name" id="name" placeholder="нэр"/>
                <input onChange={ e => setCost(e.target.value) } type="number" name="money" id="money" placeholder="Мөнгөн дүн ₮"/>
                <input onChange={ e => setPhone(e.target.value) } type="number" name="phone" id="phone" placeholder="утасны дугаар"/>
                <input onChange={ e => handleDateUpdate(e) } type="date" name="date" id="date" placeholder="Төрсөн өдөр"/>
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
            <button id={ subButton } onClick={ saveRegister }>Илгээх</button>
          </form>
        </div>
      </div>
    </>
  );
}