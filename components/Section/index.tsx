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
      className={styles.section}
      style={{
        background : data.background
      }}>

      <div>
        <h2>{data.title[language]}</h2>
        <p>{data.content[language]}</p>
      </div>
      
    </section>
  );
}

export default Section;