import { NextPage } from 'next';

import Menu from '../Menu';
import Home from '../Home';
import Section from '../Section';
import About from '../About';
import Contact from '../Contact';

import styles from './styles.module.scss';

const Main: NextPage = () => {

  return (
    <main>
      <Menu />
      <Home index={0} />
      <Section index={0} />
      <About />
      <Contact />
    </main>
  );
}

export default Main;