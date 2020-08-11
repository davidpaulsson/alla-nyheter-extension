import React, { useContext } from 'react';
import { store } from '../../store';
import styles from './News.module.css';
import NewsItem from './NewsItem';

const News: React.FC = () => {
  const { state } = useContext(store);
  return (
    <main className={styles.list}>
      {state.sources.sources.map((source, index) => (
        <section key={index} className={styles.list__item}>
          <h2 className={styles.title}>{source.title}</h2>
          <ul>
            {source.items.map((item, index) => (
              <NewsItem key={index} {...{ item }} />
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default News;
