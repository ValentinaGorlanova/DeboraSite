import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './styles.module.scss';

interface InputSearchProp {
  class_name?: string;
  setValue:  (e: string) => void;
  isEmpty: boolean;
}

export default function InputSearch({class_name, setValue, isEmpty }: InputSearchProp) {

  const [term, setTerm] = useState('');

  return (
    <div className={styles.container + `${class_name ? ' ' + class_name : ''}`}>
      <div className={isEmpty ? styles.InputSearch + ' ' + styles.empty : styles.InputSearch}>
        <input type='text' 
        placeholder={isEmpty ? 'Selecione um paciente' : 'Pesquise por pacientes'}
        value={term} 
        onFocus={() => isEmpty = false}
        onChange={(e) => {
          setTerm(e.target.value)
          }}/>
        <button className={styles.buttonSearch}>
          <AiOutlineSearch size={20} 
          onClick={() => setValue(term)}/>
        </button>
      </div>
    </div>
  );
}