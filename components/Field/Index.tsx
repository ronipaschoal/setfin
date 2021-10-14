import { NextPage } from 'next';
import { useContext } from 'react';

import styles from './styles.module.scss';

import LanguageContext from '../../contexts/LanguageContext';
import FormContext from '../../contexts/FormContext';

interface field {
  data: {
    name: string,
    label: Array<string>,
    placeholder:  Array<string>,
    type: string
  }
}

const Field: NextPage<field> = ({ data }) => {
  
  const formContext = useContext(FormContext);
  const { languageActive } = useContext(LanguageContext);
  const { name, label, type, placeholder } = data;

  function handleChange(evt: any) {

    const value = evt.target.value;
    formContext.setFieldState({
      ...formContext.fieldState,
      [evt.target.name]: value
    });
  }

  return (
    <span className={styles.field}>
      { type == "input" &&
        <div className={styles.input}>
          <label htmlFor={name}>{ label[languageActive] }</label>
          <input type="text"
            name={name}
            id={name}
            value={formContext.fieldState[name]}
            onChange={handleChange}
            placeholder={ placeholder[languageActive] } />
        </div>
      }
      { type == "textarea" &&
        <div className={styles.textarea}>
          <label htmlFor={name}>{ label[languageActive] }</label>
          <textarea
            name={name}
            id={name}
            value={formContext.fieldState[name]}
            onChange={handleChange}
            placeholder={ placeholder[languageActive] } />
        </div>
      }
  </span>
  );
}

export default Field;