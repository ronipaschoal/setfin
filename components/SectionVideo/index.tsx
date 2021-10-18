import { NextPage } from 'next';
import { useContext } from 'react';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

import { dataArray } from './data.js';

interface Props {
  index: number;
}

const SectionVideo: NextPage<Props> = ({ index }) => {
  const language = useContext(LanguageContext).languageActive;
  const { activeSection } = useContext(ActiveSectionContext);
  const { id, section, video, title, content, position } = dataArray[index];

  return (
    <section
      id={id}
      className={activeSection === section ? `${styles.section} active` : styles.section}
      style={{
        flexDirection: position == 'left' ? 'row-reverse' : 'row',
      }}
    >
      <div className={`${styles.video} image`}>
        <video controls style={{ width: '100%', height: 'auto' }}>
          <source src={video.src} />
        </video>
      </div>

      {/* <div>
        <h3>{title[language]}</h3>
        <p>{content[language]}</p>
      </div> */}
    </section>
  );
};

export default SectionVideo;
