import { NextPage } from 'next';
import { useContext } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';

const Footer: NextPage = () => {
  const language = useContext(LanguageContext).languageActive;
  const { sitemap, developed, copyright } = data;

  return (
    <footer className={styles.footer}>
      <div className={styles.sitemap}>
        <ul>
          <li>{sitemap.overview.text[language]}</li>
          <li>
            <ul>
              {sitemap.overview.menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.href}>
                      {menu.text[language]}
                    </a>
                  </li>
                );
            })}
            </ul>
          </li>
        </ul>
        <ul>
          <li>{sitemap.solutions.text[language]}</li>
          <li>
            <ul>
              {sitemap.solutions.menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.href}>
                      {menu.text[language]}
                    </a>
                  </li>
                );
            })}
            </ul>
          </li>
        </ul>
        <ul>
          <li>{sitemap.about.text[language]}</li>
          <li>
            <ul>
              {sitemap.about.menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.href}>
                      {menu.text[language]}
                    </a>
                  </li>
                );
            })}
            </ul>
          </li>
        </ul>
        <ul>
          <li>{sitemap.more.text[language]}</li>
          <li>
            <ul>
              {sitemap.more.menu.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href={menu.href}>
                      {menu.text[language]}
                    </a>
                  </li>
                );
            })}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        {copyright[language]}
      </div>
      <div>
        <a href="https://ronipaschoal.com.br" target="_blank" rel="noreferrer">
          {developed[language]}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
