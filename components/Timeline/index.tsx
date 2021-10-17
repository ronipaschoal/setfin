import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

const Timeline: NextPage = () => {
  const { languageActive } = useContext(LanguageContext);
  const { activeSection } = useContext(ActiveSectionContext);
  const { id, section, title, contents } = data;
  return (
    <section
      id={id}
      className={activeSection === section ? `${styles.about} active` : styles.about}
    >
      <h2>{title[languageActive]}</h2>
      <div>
        {contents.map((content, index) => {
          return (
            <div key={index}>
              <h3>{content.title[languageActive]}</h3>
              <hr />
              <p>{content.content[languageActive]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
