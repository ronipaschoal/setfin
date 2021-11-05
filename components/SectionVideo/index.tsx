import { NextPage } from 'next';
import { useContext } from 'react';

import styles from './styles.module.scss';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';
import LanguageContext from '../../contexts/LanguageContext';

import { dataArray } from './data.js';

interface Props {
  index: number;
}

const SectionVideo: NextPage<Props> = ({ index }) => {
  const { languageActive } = useContext(LanguageContext);
  const { activeSection } = useContext(ActiveSectionContext);
  const { id, section, video, position, title, content } = dataArray[index];

  return (
    <section
      id={id}
      className={activeSection === section ? `${styles.section} active` : styles.section}
      style={{
        flexDirection: position == 'left' ? 'row-reverse' : 'row',
      }}
    >
      <div className={`${styles.video} video`}>
        <video controls style={{ width: '100%', height: 'auto' }}>
          <source src={video.src} />
        </video>
      </div>

      <div>
        <h3>{title[languageActive]}</h3>
        <p>{content[languageActive]}</p>
      </div>
    </section>
  );
};

export default SectionVideo;
