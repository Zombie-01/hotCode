import React from 'react';
import Head from 'next/head';
import Image from 'components/image';
import Icon from 'components/icon';
import Placeholder from 'components/placeholder';
import { useUser } from 'hooks/user';
import styles from './Profile.module.scss';

const {
  profile,
  profileMain,
  profilePicture,
  profileContent,
  followersIcon,
  followersPlaceholder,
  about
} = styles;

export default function Profile(): JSX.Element {
  const {
    name,
    bio,
    avatar_url,
    followers
  } = useUser();

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={ profile }>
        <div className={ profileMain }>
          <Image
            isPlaceholder={ !avatar_url }
            src={ avatar_url }
            className={ profilePicture }
          />
          <div className={ profileContent }>
            <h1>
              <Placeholder content={ name } length="short" />
            </h1>
            <p>
              <Placeholder content={ bio } length="long" />
            </p>
            <h3>
              <Icon
                asset="People"
                className={ followersIcon }
              />
              {
                followers ?? <span className={ followersPlaceholder } />
              } Хандив өгсөн
            </h3>
          </div>
        </div>
        <div className={ about }>
          <h2>Талархал</h2>
          <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique, inventore quos fugit enim itaque facilis voluptates minus ut odio veritatis, at, dignissimos commodi veniam nihil sequi necessitatibus? Dolorum dolores quo rem adipisci enim. Similique tenetur repellat consequatur, possimus, nihil nam perspiciatis impedit unde inventore tempora sint pariatur! Reprehenderit, inventore.
          </p>
        </div>
      </main>
    </>
  );
}
