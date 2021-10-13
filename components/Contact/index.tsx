import { NextPage } from 'next';
import { FormEvent, useContext, useState } from 'react';

import { data } from './data.js';

import Field from '../Field/Index';

import styles from './styles.module.scss';
import LanguageContext from '../../contexts/LanguageContext';
import FormContext from '../../contexts/FormContext';

const Contact: NextPage = () => {

  const { languageActive } = useContext(LanguageContext);
  const { id, fields, title, status, submit } = data;

  const newMessage = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  }

  const [fieldState, setFieldState] = useState(newMessage);
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    
    var param = '';
    Object.entries(fieldState).map((value:Array<string>,index:number) => {
      param += value[0] + '=' + value[1];
      param += '&'
    });

    const service = 'https://fiversystem.com/setfin/mail.php?';
    const API_PATH = `${service}${param.substring(0, param.length - 1)}`;    
    const requestOptions = { method: 'get' };

    setFormStatus(status.progress[languageActive]);

    const response = await fetch(API_PATH, requestOptions)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);

    setTimeout(
      function() {
        if(response.success === true) {
          setFormStatus(status.success[languageActive]);
          setFieldState(newMessage);
        } else {
          setFormStatus(status.error[languageActive]);
        }
      }.bind(this),
      3000
    );
  }

  return (
    <FormContext.Provider value={{ fieldState, setFieldState }} >
      <section id={id} className={styles.contact}>
        <form onSubmit={ e => handleSubmit(e) }>
          <h2>{title[languageActive]}</h2>
          <p>{formStatus}</p>
            { fields.map((field, index) => {
              return(
                <Field key={index} data={field} />
              );
            })}
            <div>
              <input type="submit" value={ submit[languageActive] } />
            </div>
        </form>
      </section>
    </FormContext.Provider>
  );
}

export default Contact;