import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Footer: NextPage = () => {

  const language = useContext(LanguageContext).languageActive;
  const { contact, designBy } = data;

  return (
    <footer className={styles.footer}>
      <div>
        {/* <a href={ data.linkedin.link } target="_blank" rel="noreferrer">
          <Image 
            src={data.linkedin.logo.src}
            alt={data.linkedin.logo.alt}
            width={data.linkedin.logo.width}
            height={data.linkedin.logo.height} />
        </a> */}
        <a href={ 'tel:' + contact.number } target="_blank" rel="noreferrer">{ contact.text[language] }</a>
      </div>
      <div>
        <a href={ designBy.link } target="_blank" rel="noreferrer">{ designBy.text }</a>
      </div>
    </footer>
  );
}

export default Footer;