import { NextPage } from 'next';
import { FormEvent, useContext, useState } from 'react';

import { data } from './data.js';
import styles from './styles.module.scss';

import Field from '../Field/Index';

import LanguageContext from '../../contexts/LanguageContext';
import FormContext from '../../contexts/FormContext';
import ActiveSectionContext from '../../contexts/ActiveSectionContext';

const Contact: NextPage = () => {
  const { languageActive } = useContext(LanguageContext);
  const { activeSection } = useContext(ActiveSectionContext);
  const { id, section, fields, title, status, submit, serviceUrl } = data;

  const newMessage = Object.fromEntries(data.fields.map((field) => [field.name, '']));

  const [fieldState, setFieldState] = useState(newMessage);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const param = Object.entries(fieldState).map((value: Array<string>): string => {
      if (value[1] === '') {
        setFormStatus(status.required[languageActive]);
        return 'formError';
      }
      return `${value[0]}=${escape(value[1])}&`;
    });

    if (param.indexOf('formError') === -1) {
      const API_PATH = `${serviceUrl}${param.join('')}`;
      const requestOptions = { method: 'get' };

      setFormStatus(status.progress[languageActive]);

      await fetch(API_PATH, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.success === undefined) {
            throw Error('undefined');
          } else if (data.success === false) {
            setFormStatus(status.required[languageActive]);
          } else {
            setFormStatus(status.success[languageActive]);
            setFieldState(newMessage);
          }
        })
        .catch(() => setFormStatus(status.error[languageActive]));
    }

    setTimeout(function () {
      setFormStatus('');
    }, 3000);
  };

  return (
    <FormContext.Provider value={{ fieldState, setFieldState }}>
      <section
        id={id}
        className={activeSection === section ? `${styles.contact} active` : styles.contact}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>{title[languageActive]}</h2>
          <p>{formStatus}</p>
          {fields.map((field, index) => {
            return <Field key={index} data={field} />;
          })}
          <div>
            <input type="submit" value={submit[languageActive]} />
          </div>
        </form>
      </section>
    </FormContext.Provider>
  );
};

export default Contact;
