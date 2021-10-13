import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Timeline: NextPage = () => {

  const { languageActive } = useContext(LanguageContext);
  const { id, title, contents } = data;
  return (
    <section className={styles.about} id={id}>
      <h2>{title[languageActive]}</h2>
      <div>
        { contents.map((content, index) => {
          return(
            <div key={index} >
              <h3>{content.title[languageActive]}</h3>
              <hr />
              <p>{content.content[languageActive]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;