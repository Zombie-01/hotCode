import React from 'react';
import { useRouter } from 'next/router';
import Icon from 'components/icon';
import styles from './button.module.scss';

export default function backButton(): JSX.Element {
  const router = useRouter();
  return (
    <button className={ styles.button } type="submit" onClick={ () => router.back() }>
      <div className={ styles.hamburger }></div>
    </button>
  );
}