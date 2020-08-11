import classNames from 'classnames';
import React, { useContext } from 'react';
import { actions, routes, store } from '../../store';
import IconArticle from '../IconArticle';
import IconOptions from '../IconOptions';
import styles from './Navigation.module.css';
import IconSun from '../IconSun';
import IconMoon from '../IconMoon';

const Navigation: React.FC = () => {
  const { state, dispatch } = useContext(store);

  return (
    <nav className={styles.nav}>
      <h1>Glyf</h1>
      <div className={styles.buttons}>
        <button
          className={classNames({
            [styles.active]: state.navigation.currentRoute === routes.NEWS,
          })}
          onClick={() =>
            dispatch({ type: actions.NAVIGATE, payload: routes.NEWS })
          }
        >
          <IconArticle />
        </button>
        <button
          className={classNames({
            [styles.active]: state.navigation.currentRoute === routes.SETTINGS,
          })}
          onClick={() =>
            dispatch({ type: actions.NAVIGATE, payload: routes.SETTINGS })
          }
        >
          <IconOptions />
        </button>
        {state.settings.isDarkMode ? (
          <button
            onClick={() =>
              dispatch({ type: actions.SET_IS_DARK_MODE, payload: false })
            }
          >
            <IconSun />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: actions.SET_IS_DARK_MODE, payload: true })
            }
          >
            <IconMoon />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
