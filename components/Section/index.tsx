import { NextPage } from 'next';
import { useContext } from 'react';

import {dataArray} from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  index: number;
}

const Section: NextPage<Props> = ({ index }) => {

  const language = useContext(LanguageContext).languageActive;
  const data = dataArray[index];
  
  return (
    <section id={data.id}
      className={styles.section}>

      <div>
        <h2>{data.title[language]}</h2>
        { data.content.map((content, index) => {
        return(
          <>
            <p key={index}>{content[language]}</p>
            <br />
          </>
        );
      })}
      </div>
      
    </section>
  );
}

export default Section;