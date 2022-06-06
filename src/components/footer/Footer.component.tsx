import React from 'react';
import styles from './Footer.module.scss';

const {
  footer,
  main
} = styles;

export default function Footer(): JSX.Element {
  return (
    <div className={ main }>
      <footer className={ footer }>
        <section>
          <h3>Бид</h3>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </section>
        <section>
          <h3>Хамтран ажлагсад</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo iste quibusdam dicta. Dicta perspiciatis in recusandae, cupiditate et mollitia!</li>
          </ul>
        </section>
        <section>
          <h3>Холбоо барих</h3>
          <ul>
            <li>утас +976 94311521</li>
            <li>майл mm6816557@gmail.com</li>
          </ul>
        </section>
      </footer>
      <h3>
         Хамтран ажилсанд баярлалаа
        <a href="facebook.com">+</a>
        <a href="instagram.com">+</a>
        <a href="youtube.com">+</a>
      </h3>
    </div>
  );
}
