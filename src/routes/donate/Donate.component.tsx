import React, { useState } from 'react';
import Head from 'next/head';
import TinderCard from 'react-tinder-card';
import { useRouter } from 'next/router';
import styles from './Donate.module.scss';

const {
  doante,
  cardContainer,
  card,
  swipe,
  infoText,
  costStyle,
  costDiv,
  before
} = styles;

const db = [
  {
    name: 'Zombie_1',
    url: './img/richard.jpg',
    goal: 100,
    cost: 60
  },
  {
    name: 'Zombie_2',
    url: './img/erlich.jpg',
    goal: 1000,
    cost: 70
  },
  {
    name: 'Zombie_3',
    url: './img/monica.jpg',
    goal: 1000,
    cost: 80
  },
  {
    name: 'Zombie_4',
    url: './img/jared.jpg',
    goal: 10000,
    cost: 60
  },
  {
    name: 'Zombie_5',
    url: './img/jared.jpg',
    goal: 15000,
    cost: 65
  },
  {
    name: 'Zombie_6',
    url: './img/jared.jpg',
    goal: 2000,
    cost: 10
  },
  {
    name: 'Zombie_7',
    url: './img/jared.jpg',
    goal: 5000,
    cost: 15
  },
  {
    name: 'Zombie_8',
    url: './img/jared.jpg',
    goal: 600,
    cost: 25
  },
  {
    name: 'Zombie_9',
    url: './img/dinesh.jpg',
    goal: 300,
    cost: 35
  }
];

export default function Donate(): JSX.Element {
  const router = useRouter();
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, nameToDelete: any) => {
    if(direction === 'left'){
      router.push('leftlist');
    }
    if(direction === 'up'){
      router.push('uplist');
    }
    if(direction === 'right'){
      console.log(nameToDelete);
    }
  };

  const outOfFrame = (name:any) => {
    console.log('asd');
    
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
              <div className={ costDiv }>
                <h3>{ character.goal }$</h3>
                <div className={ costStyle }>
                  <div className={ before }  style={ { height: ` ${ character.cost }%` } }></div>
                </div>
              </div>
            </TinderCard>
          ) }
        </div>
        { lastDirection ? <h2 className={ infoText }>You swiped { lastDirection }</h2> : <h2 className={ infoText } /> }
      </div>
    </>
  );
}
