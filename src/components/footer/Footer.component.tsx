import React from 'react';
import styles from './Footer.module.scss';

const {
  footer,
  main,
  end
} = styles;

export default function Footer(): JSX.Element {
  return (
    <div className={ main }>
      <footer className={ footer }>
        <section>
          <h3>About us</h3>
          <ul>
            <li>Who are team DODOMO</li>
            <li>Our contributers</li>
          </ul>
        </section>
        <section>
          <h3>Learn more</h3>
          <ul>
            <li>Why DODOMO</li>
            <li>How DODOMO works</li>
            <li>FAQ</li>
            <li>Success stories</li>
          </ul>
        </section>
        <section>
          <h3>Contact us</h3>
          <ul>
            <li>Phone number : +976 94311521</li>
            <li>Email : igen2023@gmail.com</li>
            <li>Address : 1129 Marcus Street</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
