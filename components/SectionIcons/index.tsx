import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import {dataArray} from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  index: number;
}

const SectionIcons: NextPage<Props> = ({ index }) => {

  const language = useContext(LanguageContext).languageActive;
  const data = dataArray[index];
  
  return (
    <section id={data.id}
      className={styles.section}>

      <div>
        <h2>{data.title[language]}</h2>
        <div>
          { data.content.map((content, index) => {
          return(
            <div key={index}>
              <Image src={content.image} alt="teste" height="100px" width="100px" layout="fixed" />
              <h3>{content.title[language]}</h3>
            </div>
          );
        })}
        </div>
      </div>
      
    </section>
  );
}

export default SectionIcons;