import { NextPage } from 'next';
import { useContext } from 'react';

import { dataArray } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

interface Props {
  index: number;
}

const Section: NextPage<Props> = ({ index }) => {
  const { languageActive } = useContext(LanguageContext);
  const { activeSection } = useContext(ActiveSectionContext);
  const { id, section, title, content } = dataArray[index];

  return (
    <section
      id={id}
      className={activeSection === section ? `${styles.section} active` : styles.section}
    >
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
