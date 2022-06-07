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
          <h3>Бид</h3>
          <ul>
            <li>TechUp баг</li>
            <br/>
            <li>Э. Мөнхжавхлан багийн ахлах</li>
            <li>Б. Шижирбум багийн гишүүн</li>
            <li>Б Адъяадорж багийн гишүүн</li>
          </ul>
        </section>
        <section>
          <h3>Хамтран ажлагсад</h3>
          <ul>
            <li>Нийгмийн хариуцлагийн хүрээнд бидэндтэй хамтран ажиллаж байгаа байглууллагууд.<br/>
            - Y4RP family<br/>
            - TechUp баг</li>
          </ul>
        </section>
        <section>
          <h3>Холбоо барих</h3>
          <ul>
            <li>Утас: +976 94311521</li>
            <li>Майл: igen2023@gmail.com</li>
            <li>Хаяг: 1129 Marcus Street</li>
          </ul>
        </section>
      </footer>
      <h3>
          Хамтран ажилсанд баярлалаа 
      </h3>
      <div className={ end }>
        <a href="https://www.facebook.com/">facebook</a>
        <a href="https://www.instagram.com/">instagram</a>
        <a href="https://www.youtube.com/">youtube</a>
      </div>
    </div>
  );
}
