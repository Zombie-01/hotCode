import React, { useEffect, useState } from 'react';
import Icon from 'components/icon';
import styles from './IOSInstructions.module.scss';

const {
  iconBox,
  popup,
  popupcloseicon,
  example,
  none
} = styles;

export default function IOSInstructions(): JSX.Element {
  const [visible, setVisible] = useState(true);
  const [bottom, setBottom] = useState(false);

  const remove = (): void => {
    setVisible(false);
  };
  useEffect(() => {
    return () => {
      setBottom(true);
    };
  }, []);
  return  (
    visible?
      <>
        <div id={ popup } className={ bottom? example : none } >
          <div className={ popupcloseicon } onClick={ () => remove() }>&times;</div>
          <h4>Суулгах уу?</h4>
          <p> <Icon asset="Box-Arrow" className={ iconBox }/>, дараад add to home screen ДАРНА УУ!</p>
        </div>
      </> : <></>
  );
}
