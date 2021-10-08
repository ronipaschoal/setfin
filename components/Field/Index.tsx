import { NextPage } from 'next';
import { useContext } from 'react';

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
  const language = useContext(LanguageContext).languageActive;
  const { name, label, type, placeholder } = data;

  function handleChange(evt: any) {

    const value = evt.target.value;
    formContext.setFieldState({
      ...formContext.fieldState,
      [evt.target.name]: value
    });
  }

  return (
    <>
      <label htmlFor={name}>{ label[language] }</label>
      { type == "input" &&
        <input type="text"
          name={name}
          id={name}
          value={formContext.fieldState[name]}
          onChange={handleChange}
          placeholder={ placeholder[language] } />
      }
      { type == "textarea" &&
        <textarea name={name}
          id={name}
          value={formContext.fieldState[name]}
          onChange={handleChange}
          placeholder={ placeholder[language] } />
      }
  </>
  );
}

export default Field;