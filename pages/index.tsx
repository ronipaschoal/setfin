import type { NextPage } from 'next';
import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import LanguageContext from '../contexts/LanguageContext';
import ActiveSectionContex from '../contexts/ActiveSectionContext';

const App: NextPage = () => {
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
  );
};

export default App;
