import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

import { dataArray } from './data.js';

interface Props {
  index: number;
}

const Home: NextPage<Props> = ({ index }) => {
  const { languageActive } = useContext(LanguageContext);

  const { id, position, image, title, content } = dataArray[index];

  return (
    <section
      id={id}
      className={`${styles.section} active`}
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
        <h1>{title[languageActive]}</h1>
        <p>{content[languageActive]}</p>
      </div>
    </section>
  );
};

export default Home;
