import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import { dataArray } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

interface Props {
  index: number;
}

const SectionIcons: NextPage<Props> = ({ index }) => {
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
        <div>
          {content.map((content, index) => {
            return (
              <div key={index}>
                <Image src={content.image} height="60px" width="60px" layout="fixed" />
                <h3>{content.title[languageActive]}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIcons;
