import { NextPage } from 'next';
import { useContext } from 'react';
import Head from 'next/head';

import { data } from './data.js';

import LanguageContext from '../../contexts/LanguageContext';

const Header: NextPage = () => {
  const { languageActive } = useContext(LanguageContext);
  const { title, description } = data;

  return (
    <Head>
      <title>{title}</title>

      <link href='./fonts/ubuntu-light.ttf' as="font" crossOrigin=""></link>
      <meta name="description" content={description[languageActive]} />
      <link rel="icon" href="./images/favicon.png" type="image/png" />
    </Head>
  );
};

export default Header;
