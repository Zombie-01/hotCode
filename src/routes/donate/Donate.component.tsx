import React, { useState } from 'react';
import Head from 'next/head';
import TinderCard from 'react-tinder-card';
import styles from './Donate.module.scss';

const {
  doante,
  cardContainer,
  card,
  swipe,
  infoText
} = styles;

const db = [
  {
    name: 'Zombie_1',
    url: './img/richard.jpg'
  },
  {
    name: 'Zombie_2',
    url: './img/erlich.jpg'
  },
  {
    name: 'Zombie_3',
    url: './img/monica.jpg'
  },
  {
    name: 'Zombie_4',
    url: './img/jared.jpg'
  },
  {
    name: 'Zombie_5',
    url: './img/jared.jpg'
  },
  {
    name: 'Zombie_6',
    url: './img/jared.jpg'
  },
  {
    name: 'Zombie_7',
    url: './img/jared.jpg'
  },
  {
    name: 'Zombie_8',
    url: './img/jared.jpg'
  },
  {
    name: 'Zombie_9',
    url: './img/dinesh.jpg'
  }
];

export default function Donate(): JSX.Element {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = ( name:any ) => {
    console.log(name + ' left !');
  };
  return (
    <>
      <Head>
        <title>Хандив</title>
      </Head>
      <div className={ doante }>
        <div className={ cardContainer }>
          { characters.map(character =>
            <TinderCard className={ swipe } key={ character.name } onSwipe={ dir => swiped(dir, character.name) } onCardLeftScreen={ () => outOfFrame(character.name) }>
              <div style={ { backgroundImage: 'url(' + character.url + ')' } } className={ card }>
                <h3>{ character.name }</h3>
              </div>
            </TinderCard>
          ) }
        </div>
        { lastDirection ? <h2 className={ infoText }>You swiped { lastDirection }</h2> : <h2 className={ infoText } /> }
      </div>
    </>
  );
}
