import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { injectClassNames } from 'utils/css';
import styles from './Items.module.scss';

const {
  items,
  active
} = styles;

const links = [
  { name: 'Нүүр', url: '/', alias: [] },
  { name: 'Мэдээлэл', url: '/pages', alias: ['/[page]'] },
  { name: 'Хандив', url: '/found', alias: ['/[user]'] },
  { name: 'Пропайл', url: '/profile', alias: [] }
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul className={ items }>
      { links.map(({ name, url, alias }) => (
        <li
          key={ name }
          className={
            injectClassNames([
              active,
              pathname === url || alias.includes(pathname)
            ])
          }
        >
          <Link href={ url }>{ name }</Link>
        </li>
      )) }
    </ul>
  );
}
