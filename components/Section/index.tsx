import { NextPage } from 'next';
import { useContext } from 'react';

import { dataArray } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

interface Props {
  index: number;
}

const Section: NextPage<Props> = ({ index }) => {
  const { languageActive } = useContext(LanguageContext);
  const { id, title, content } = dataArray[index];

  return (
    <section id={id} className={styles.section}>
      <div>
        <h2>{title[languageActive]}</h2>
        {content.map((content, index) => (
          <span key={index}>
            <p>{content[languageActive]}</p>
            <br />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Section;
