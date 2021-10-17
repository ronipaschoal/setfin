import { NextPage } from 'next';

import Menu from '../Menu';
import Home from '../Home';
// import SectionTwoParty from '../SectionTwoParty';
import SectionVideo from '../SectionVideo';
import Section from '../Section';
import SectionIcons from '../SectionIcons';
import Timeline from '../Timeline';
import Contact from '../Contact';

const Main: NextPage = () => {
  return (
    <main>
      <Menu />
      <Home index={0} />
      <Section index={0} />
      <SectionVideo index={0} />
      {/* <SectionTwoParty index={0} /> */}
      <SectionIcons index={0} />
      <Timeline />
      <Contact />
    </main>
  );
};

export default Main;
