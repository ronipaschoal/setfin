import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Timeline: NextPage = () => {

  const language = useContext(LanguageContext);
  
  return (
    <section className={styles.about} id={data.id}>
      <h2>{data.title[language.languageActive]}</h2>
      <div>
        { data.content.map((content, index) => {
          return(
            <div key={index} >
              <h3>{content.title[language.languageActive]}</h3>
              <hr />
              <p>{content.content[language.languageActive]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline;