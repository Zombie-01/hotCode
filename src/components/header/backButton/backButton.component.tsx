import React from 'react';
import { useRouter } from 'next/router';
import Icon from 'components/icon';
import styles from './button.module.scss';

export default function backButton(): JSX.Element {
  const router = useRouter();
  return (
    <button className={ styles.button } type="submit" onClick={ () => router.back() }>
<<<<<<< HEAD
      <div className={styles.hamburger}></div>
=======
      <div className={ styles.hamburger }></div>
>>>>>>> 817d83cc9b32cd80db42e9c828ea3b234d8aebcd
    </button>
  );
}