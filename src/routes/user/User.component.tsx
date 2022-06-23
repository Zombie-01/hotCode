import React from 'react';
import { useRouter } from 'next/router';
import styles from './User.module.scss';

const {container, header, left, right} = styles;
export default function User(): JSX.Element {
  const { asPath } = useRouter();
  return(
    <>
      <div className={ container }>
        <div className={ header }>
          <div className={ left }></div>
          <img src="" alt="" />
          <div className={ right }>
            <h2>{ asPath.split('/')[2] }</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis ipsa aliquam officiis deleniti optio autem dolor pariatur, excepturi voluptates eius eum possimus! Sequi, esse quod. Labore commodi reprehenderit cumque? Tempora eius, facere laboriosam voluptates omnis vero dicta nostrum accusamus et nobis ea? Nemo iste voluptas non atque sed ullam!</p>
          </div>
        </div>
      </div>
    </>
  );
}