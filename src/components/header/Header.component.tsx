import React, { memo, useEffect,useState } from 'react';
import Icon from 'components/icon';
import Items from 'components/header/items';
import Logo from 'components/header/logo';
import ThemeToggler from 'components/header/themeToggler';
import styles from './Header.module.scss';
import BackButton from './backButton';

const OFFLINE = 'offline';

const {
  header,
  headerControls,
  offline,
  offlineIcon,
  mobilenav
} = styles;

const handleNetworkChange = (): void => {
  const { documentElement: { classList } } = document;
  

  if (!navigator.onLine) {
    classList.add(OFFLINE);

    return;
  }

  classList.remove(OFFLINE);
};

export default memo(
  function Header(): JSX.Element {
    useEffect(() => {
      if (typeof window !== undefined) {
        handleNetworkChange();

        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);

        return () => {
          window.removeEventListener('online', handleNetworkChange);
          window.removeEventListener('offline', handleNetworkChange);
        };
      }
    }, []);
    const viewportWidth = globalThis.innerWidth;
  const [ isMobile, setisMobile ] = useState(true);
  const [rightPoint,setRightPoint] = useState(-100);
  const rightPointz = () => {
    if(rightPoint == -100){
      setRightPoint(0.1);
    } else {
      setRightPoint(-100);
    }
  };
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(
        process.env.serviceWorkerUrl as string,
        { scope: '/' }
      );
    }
    if (viewportWidth > 768){
      setisMobile(false);
    }
  }, []);

    return (
      <>
        <div className={ offline }>
          <Icon
            asset="Cloud-Slash"
            className={ offlineIcon }
          />
                    You are currently browsing in offline mode.
        </div>
        <header className={ header }>
          <nav>
            <div className={ headerControls }>
              <ThemeToggler />
              { isMobile ? <button className={ styles.button } type="submit" onClick={ () => rightPointz() }>
                { rightPoint == -100 ? <div className={ styles.hamburger }></div> : <div className={ styles.ex }></div> }
              </button> : "" }
            </div>
            { isMobile ? <div className={ mobilenav } style={ {right: `${rightPoint}%`} }><Items/></div>: <Items/> }
          </nav>
        </header>
      </>
    );
  }
);