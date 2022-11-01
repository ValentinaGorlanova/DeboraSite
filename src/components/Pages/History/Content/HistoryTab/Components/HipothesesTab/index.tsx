import { useRef, useState } from 'react';

import { TbEdit } from 'react-icons/tb'

import styles from '../styles.module.scss'

const inputs = [
    {
        id: "Hipótese",
        label: "Hipótese",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
]

export default function HipothesesTab () {

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
            <h3  className={styles.title}>
            Antecedentes Psiquiátricos
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
            <div className={styles.items_block}>
            {inputs.map((input, i) => {
                return (
                <div className={styles.TextWrapper} key={i}>
                        <label className={styles.Label} htmlFor={input.id}>
                        {input.label}
                        </label>
                        <textarea className={styles.Textarea} 
                            id={input.id} 
                        value={visible[i]}
                        ref={(input) => inputEls.current.push(input)}
                        onChange={(e) => changeInput(e.target.value, i)}
                        disabled/>
                    </div>
                )                  
            }
        )}
            </div>
        </div>
    )
}