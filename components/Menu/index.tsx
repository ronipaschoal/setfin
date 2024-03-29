import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

import { data } from './data.js';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

interface Menu {
  section: string;
  title: Array<string>;
}

const Menu: NextPage = () => {
  const { languageActive, setLanguageActive } = useContext(LanguageContext);
  const { setActiveSection } = useContext(ActiveSectionContext);
  const { menu, logo, language } = data;

  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);
  const [navMenuItemActive, setNavMenuItemActive] = useState(menu[0].section);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  const selectMenu = (menu: string) => {
    setActiveSection(menu);
    setHamburgerActive(false);
    setNavMenuActive(false);
  };

  const listenToScroll = () => {
    menu.forEach(function (menu: Menu) {
      const menuItem = document.querySelector(`#${menu.section}`);
      if (menuItem == null) {
        return;
      }

      const position = menuItem.getBoundingClientRect();
      if (position.top < 1 && position.bottom > 1) {
        setNavMenuItemActive(menu.section);
      }
      if (position.top < 300 && position.bottom > 1) {
        setActiveSection(menu.section);
      }
    });
  };

  return (
    <>
      <header id='header' className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a
              href="#home"
              className={styles.navLogo}
              onClick={() => selectMenu(menu[0].section)}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                layout="fixed"
              />
            </a>
          </div>

          <ul className={navMenuActive ? styles.active : ''}>
            {menu.map((menu, index) => {
              return (
                <li key={index} className={navMenuItemActive == menu.section ? styles.active : ''}>
                  <a href={`#${menu.section}`} onClick={() => selectMenu(menu.section)}>
                    {menu.title[languageActive]}
                  </a>
                </li>
              );
            })}
            <li className={styles.navItem}>
              <a
                className={styles.language}
                onClick={() => {
                  setLanguageActive(languageActive ? 0 : 1);
                }}
              >
                {language[languageActive]}
              </a>
            </li>
          </ul>

          <div
            className={hamburgerActive ? `${styles.active} ${styles.hamburger}` : styles.hamburger}
            onClick={() => {
              setHamburgerActive(!hamburgerActive);
              setNavMenuActive(!navMenuActive);
            }}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Menu;
