import React, { useState } from 'react';
import Icon from 'components/icon';
import styles from './IOSInstructions.module.scss';

const {
  iconBox,
  popup,
  popupcloseicon
} = styles;

export default function IOSInstructions(): JSX.Element {
  const [visible, setVisible] = useState(true);

  const remove = (): void => {
    setVisible(false);
  };
 
  return  (
    visible?
      <>
        <div id={ popup }>
          <div className={ popupcloseicon } onClick={ () => remove }>&times;</div>
          <h4>Add Our App?</h4>
          <p> <Icon asset="Box-Arrow" className={ iconBox }/>,  for quick access!</p>
        </div>
      </> : <></>
  );
}
