import { useRef, useState } from 'react';

import { TbEdit } from 'react-icons/tb'

import styles from '../styles.module.scss'

const inputs = [
    {
      id: "firstVisit",
      label: "Primeiro Atendimento",
      value: "00/00/00",
      pattern: /[^\d^\/]/,
    },
    {
      id: "name",
      label: "Nome Completo",
      value: "Gabriela Silva",
      pattern: /[\d]/,
    },
    {
      id: "birthday",
      label: "Data de nascimento",
      value: "00/00/00",
      pattern: /[[^\d^\/]]/,
    },
    {
      id: "age",
      label: "Idade",
      value: "00",
      pattern: /[\D]/,
    },
    {
      id: "gender",
      label: "Gênero",
      value: "Lorem ipsum",
      pattern: /[\d]/,
    },
    {
      id: "status",
      label: "Estado Civil",
      value: "Lorem ipsum",
      pattern: /[\d]/,
    },
    {
      id: "prof",
      label: "Profissão",
      value: "Lorem ipsum",
      pattern: /[\d]/,
    },
    
  ]

export default function MainDataTab () {

    const [isDisabled, setDisabled] = useState(true)
    const [visible, setVisible] = useState<string[]>(inputs.map(input => input.value));
    const inputEls = useRef(new Array());

    const onButtonClick = () => {
      setDisabled(false)

      const inputs = inputEls.current
      inputs.forEach((inputEl => {
        inputEl ? inputEl.disabled = false : null
      }))   
    };
    
    const onSaveInp = () => {
      setDisabled(true)

      const inputs = inputEls.current
      inputs.forEach((inputEl => {
        inputEl ? inputEl.disabled = true : null
      }))  
    };

    const changeInput = (str: string, i: number) => {
      setVisible(prevState => {
         const clone = [...prevState]; 
         clone.splice(prevState.indexOf(prevState[i]), 1, str)
         return clone;
      })
  };

    return (
        <div className={styles.tabContent}>
            <div className={styles.flex_block}>
                <h3  className={styles.title}>
                Dados Principais
                    <button className={styles.edit}
                    style={ isDisabled ? {"display" : "block"} : {"display" : "none"} }
                    onClick={onButtonClick}>
                        <TbEdit size={"25px"} stroke={"#E7975D"}/>
                    </button>
                    <button className={styles.save}
                    style={ !isDisabled ? {"display" : "block"} : {"display" : "none"} }
                    onClick={onSaveInp}>
                        Salvar
                    </button>
                </h3>
                <div className={styles.InputWrapper}>
                        <label className={styles.Label} htmlFor={inputs[0].id}>
                        {inputs[0].label}
                        </label>
                        <input className={styles.Input} 
                        type="text" id={inputs[0].id} 
                        value={visible[0]}
                        ref={(input) => inputEls.current.push(input)}
                        onChange={(e) => changeInput(e.target.value.replace(inputs[0].pattern, ''), 0)}
                        disabled/>
                    </div>
            </div>
            <div className={styles.flex_block}>
                {inputs.slice(1, inputs.length).map((input, i) => {
                return (
                    <div className={styles.InputWrapper} key={i+1}>
                        <label className={styles.Label} htmlFor={input.id}>
                        {input.label}
                        </label>
                        <input className={styles.Input} 
                        type="text" id={input.id} 
                        value={visible[i+1]}
                        ref={(input) => inputEls.current.push(input)}
                        onChange={(e) => changeInput(e.target.value.replace(input.pattern, ""), i+1)}
                        disabled/>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}