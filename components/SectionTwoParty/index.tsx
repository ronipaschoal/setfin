import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

import {dataArray} from './data.js';

interface Props {
  index: number;
}

const SectionTwoParty: NextPage<Props> = ({ index }) => {

  const language = useContext(LanguageContext).languageActive;
  const data = dataArray[index];
  
  return (
    <section id={data.id}
      
      className={styles.section}
      style={{ 
        flexDirection: data.position == 'left' ? 'row-reverse' : 'row'
      }}>
      
      <div className={`${styles.image} image`}>
        <Image
          src={data.image.src}
          alt={data.image.alt}
          height={data.image.height}
          width={data.image.width}
          layout="fixed" />
      </div>

      <div>
        <h3>{data.title[language]}</h3>
        <p>{data.content[language]}</p>
      </div>
      
    </section>
  );
}

export default SectionTwoParty;