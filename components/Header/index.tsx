import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';

import { data } from './data.js';

import LanguageContext from '../../contexts/LanguageContext';

const Header: NextPage = () => {
  
  const language = useContext(LanguageContext).languageActive;
  const { title, fonts, description } = data;

  return (
    <Head>
      <title>{ title }</title>

      { fonts.map((font, index) => {
        return(
          <link key={index} href={font} rel="preload" as="font" crossOrigin=""></link>
        );
      })}
      
      <meta name="description" content={ description[language] } />
      <link rel="icon" href="./images/favicon.png" type="image/png" />
    </Head>
  );
}

export default Header;