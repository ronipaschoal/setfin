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
        <ul>
          <li>
            <a href={ 'tel:' + contact.tel.number } target="_blank" rel="noreferrer">{ contact.tel.text[language] }</a>
          </li>
          <li>
            <a href={ 'mailto:' + contact.email.email } target="_blank" rel="noreferrer">{ contact.email.text[language] }</a>
          </li>
        </ul>
      </div>
      <div>
        <a href={ designBy.link } target="_blank" rel="noreferrer">{ designBy.text }</a>
      </div>
    </footer>
  );
}

export default Footer;