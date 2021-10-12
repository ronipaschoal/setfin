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

  const { languageActive } = useContext(LanguageContext);
  const { id, title, content } = dataArray[index];
  
  return (
    <section id={id}
      className={styles.section}>

      <div>
        <h2>{title[languageActive]}</h2>
        <div>
          { content.map((content, index) => {
          return(
            <div key={index}>
              <Image src={content.image} alt="teste" height="100px" width="100px" layout="fixed" />
              <h3>{content.title[languageActive]}</h3>
            </div>
          );
        })}
        </div>
      </div>
      
    </section>
  );
}

export default SectionIcons;