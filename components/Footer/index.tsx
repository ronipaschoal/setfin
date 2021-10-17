import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Footer: NextPage = () => {
  const { languageActive } = useContext(LanguageContext);
  const { contact, designBy } = data;

  return (
    <footer className={styles.footer}>
      <div>
        {/* <a href={ linkedin.link } target="_blank" rel="noreferrer">
          <Image 
            src={linkedin.logo.src}
            alt={linkedin.logo.alt}
            width={linkedin.logo.width}
            height={linkedin.logo.height} />
        </a> */}
        <ul>
          <li>
            <a href={'tel:' + contact.tel.number} target="_blank" rel="noreferrer">
              {contact.tel.text[languageActive]}
            </a>
          </li>
          <li>
            <a href={'mailto:' + contact.email.email} target="_blank" rel="noreferrer">
              {contact.email.text[languageActive]}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href={designBy.link} target="_blank" rel="noreferrer">
          {designBy.text}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
