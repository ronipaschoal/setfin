import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

import { dataArray } from './data.js';

interface Props {
  index: number;
}

const SectionTwoParty: NextPage<Props> = ({ index }) => {
  const language = useContext(LanguageContext).languageActive;
  const { id, position, image, title, content } = dataArray[index];

  return (
    <section
      id={id}
      className={styles.section}
      style={{
        flexDirection: position == 'left' ? 'row-reverse' : 'row',
      }}
    >
      <div className={`${styles.image} image`}>
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
          layout="fixed"
        />
      </div>

      <div>
        <h3>{title[language]}</h3>
        <p>{content[language]}</p>
      </div>
    </section>
  );
};

export default SectionTwoParty;
