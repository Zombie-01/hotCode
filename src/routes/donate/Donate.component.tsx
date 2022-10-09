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
    name: 'Avatar 1',
    url: 'assets/avatar1.png',
    goal: 100,
    cost: 60
  },
  {
    name: 'Avatar 2',
    url: 'assets/avatar2.png',
    goal: 1000,
    cost: 70
  },
  {
    name: 'Avatar 3',
    url: 'assets/avatar3.png',
    goal: 1000,
    cost: 80
  },
  {
    name: 'Avatar 4',
    url: 'assets/avatar4.png',
    goal: 10000,
    cost: 60
  },
  {
    name: 'Avatar 5',
    url: 'assets/avatar5.png',
    goal: 15000,
    cost: 65
  }
];

export default function Donate(): JSX.Element {
  const router = useRouter();
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction: any, name: any) => {
    if(direction === 'left'){
      router.push('leftlist');
    }
    if(direction === 'up'){
      router.push(`/donate/${name}`);
    }
    if(direction === 'down'){
      console.log( " delete " + name);
    }
  };

  const outOfFrame = (name:any) => {
    console.log('clicked user');
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
