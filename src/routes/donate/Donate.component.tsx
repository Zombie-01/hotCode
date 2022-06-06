import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import styles from './Donate.module.scss';

const {
  wrapper,
  landing,
  landingText,
  border,
  wallets__items,
  wallets,
  check,
  checkbox
} = styles;

export default function Donate(): JSX.Element {
  
  return (
    <>
      <Head>
            Хандив өгөх
      </Head>
      <div className={ wrapper }>
        <div className={ landing }>
          <div className={ landingText }>
            <h1>Бяцхан зүрхний баатар</h1>
            <p>
              Энэ дэлхийн хамгийн хүчтэй атлаа сулхан цохьлох зүрх бүхний төлөө.<br />
              Та ч гэсэн баатар болж чадна.
            </p>
          </div>
        </div>
        <form className={ border }> 
          <h2>Додомо</h2>
          <h4>Хандивийн дансаа цэнэглэх</h4>
          <div className={ wallets }>
            <div className={ wallets__items }>5,000₮</div>
            <div className={ wallets__items }>10,000₮</div>
            <div className={ wallets__items }>20,000₮</div>
            <div className={ wallets__items }>Бусад</div>
          </div>
          <Form.Select aria-label="Default select example">
            <option>Та шилжүүлэгийн төрөл өө сонгоно уу</option>
            <option value="1">Хаан</option>
            <option value="2">Голомт банк</option>
            <option value="3">Төрийн банк</option>
            <option value="4">Хасбанк</option>
          </Form.Select>
          <h2>Таны сонгосон банк : </h2>
          <div className={ check }>
            <input type="checkbox" className={ checkbox } name="accert"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sed.</p>
          </div>
          <div className={ check }>
            <input type="checkbox" className={ checkbox } name="accert"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, sed.</p>
          </div>

        </form>
      </div>
        
    </>
  );
}

