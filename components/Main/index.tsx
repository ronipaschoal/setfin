import { NextPage } from 'next';

import Menu from '../Menu';
import Section from '../Section';
import SectionTwoParty from '../SectionTwoParty';
import About from '../About';
import Contact from '../Contact';

import styles from './styles.module.scss';

const Main: NextPage = () => {

  return (
    <main>
      <Menu />
      <SectionTwoParty index={0} />
      <Section index={0} />
      <About />
      <Contact />
    </main>
  );
}

export default Main;