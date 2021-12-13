import { useState } from 'react';
import Header from '../template/Header';
import Main from '../template/Main';
import Footer from '../template/Footer';
import LanguageContext from '../contexts/LanguageContext';
import ActiveSectionContex from '../contexts/ActiveSectionContext';

export default function Home() {
  const [languageActive, setLanguageActive] = useState(0);
  const [activeSection, setActiveSection] = useState(['home']);

  return (
    <LanguageContext.Provider value={{ languageActive, setLanguageActive }}>
      <ActiveSectionContex.Provider value={{ activeSection, setActiveSection }}>
        <Header />
        <Main />
        <Footer />
      </ActiveSectionContex.Provider>
    </LanguageContext.Provider>
  )
}
