import { NextPage } from 'next';
import { useContext } from 'react';
import Image from 'next/image';

import Menu from '../../components/Menu';
import LanguageContext from '../../contexts/LanguageContext';

import { data } from './data';
import styles from './styles.module.scss';

const Main: NextPage = () => {

  const language = useContext(LanguageContext).languageActive;
  const { home, about, features, automations, contact, model } = data;

  return (
    <main className={styles.main}>
      <Menu />
      <section id="home" className={styles.home}>
        <div>
          <h1 className={styles.title}>{home.title[language]}</h1>
          <p className={styles.content}>{home.content[language]}</p>
        </div>
        <div>
          <Image
            src={home.image.src}
            alt={home.image.alt}
            height={home.image.height}
            width={home.image.width}
            layout="responsive"
          />
        </div>
      </section>
      <section id="about" className={styles.about}>
        <h3>{about.title[language]}</h3>
        <div className={styles.operation}>
          {about.operation.map((operation, index) => {
              return (
                <div key={index}>
                  <Image
                    src={operation.image.src}
                    alt={operation.image.alt}
                    height={operation.image.height}
                    width={operation.image.width}
                    layout="responsive"
                  />
                  <h2>{operation.title[language]}</h2>
                </div>
              );
          })}
        </div>
        <div className={styles.institutional}>
          <div>
            <h2>{about.institutional.title[language]}</h2>
            <p>{about.institutional.content[language]}</p>
          </div>
          <div className={styles.institutional_video}>
            <video controls style={{ width: '100%', height: 'auto' }}>
              <source src={about.institutional.video.src} />
            </video>
          </div>
        </div>
      </section>
      <section id="features" className={styles.features}>
        <div className={styles.content}>
          <h3>{features.title[language]}</h3>
          {features.content.map((operation, index) => {
            return (
              <div key={index}>
                <Image
                  src={operation.image.src}
                  alt={operation.image.alt}
                  height={operation.image.height}
                  width={operation.image.width}
                  layout="responsive"
                />
                <h2>{operation.title[language]}</h2>
              </div>
            );
          })}
        </div>
        <div className={styles.automations}>
          <div>
            <h2 className={styles.title}>{automations.title[language]}</h2>
            <p className={styles.content}>{automations.content[language]}</p>
          </div>
          <div className={styles.image}>
            <Image
              src={automations.image.src}
              alt={automations.image.alt}
              height={automations.image.height}
              width={automations.image.width}
              layout="responsive"
            />
          </div>
        </div>
        <div className={styles.model}>
          <div className={styles.image}>
            <Image
              src={model.image.src}
              alt={model.image.alt}
              height={model.image.height}
              width={model.image.width}
              layout="responsive"
            />
          </div>
          <div>
            <h2 className={styles.title}>{model.title[language]}</h2>
            <p className={styles.content}>{model.content[language]}</p>
          </div>
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <br />
        <br />
        <a href="mailto:comercial@setfin.com.br">{contact.content[language]}</a>
        <br />
        <br />
      </section>
    </main>
  );
};



export default Main;
