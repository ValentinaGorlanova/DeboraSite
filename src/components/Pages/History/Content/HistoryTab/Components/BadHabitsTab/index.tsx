import { useRef, useState } from 'react';

import { TbEdit } from 'react-icons/tb'

import styles from '../styles.module.scss'

const inputs = [
    {
        id: "radio-group-alc",
        label: "Faz ingestão de bebidas alcoolicas?",
        radio_btns: [
        {
            id: 'Yes',
            label: 'Sim',
        },
        {
            id: 'no',
            label: 'Não',
        },
        ],
        value: ''
    },
    {
        id: "whatType",
        label: "Que tipo?",
        radio_btns: [],
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: "radio-group-frequency-hab",
        label: "Frequência",
        radio_btns: [
        {
            id: 'Ocasionalmente',
            label: 'Ocasionalmente',
        },
        {
            id: 'Semanalmente',
            label: 'Semanalmente',
        },
        {
            id: 'Diáriamente ',
            label: 'Diáriamente ',
        },
        {
            id: 'many',
            label: 'Várias vezes ao dia',
        },
        ],
        value: ''
    },
    {
        id: "short-howLongDrink",
        label: "Há quanto tempo?",
        radio_btns: [],
        value: "",
    },
    {
        id: "radio-group-smoke",
        label: "É fumante?",
        radio_btns: [
        {
            id: 'smoke',
            label: 'Sim',
        },
        {
            id: 'notSmoke',
            label: 'Não',
        },
        ],
        value: ''
    },
    {
        id: "short-howLongSmoke",
        label: "Há quanto tempo?",
        radio_btns: [],
        value: "",
    },
    {
        id: "short-howManyTimesSmoke",
        label: "Quantos maços por dia?",
        radio_btns: [],
        value: "",
    },
    {
        id: "radio-group-drugs",
        label: "Faz uso de outra substância? (maconha/crack/cocaína/outros)",
        radio_btns: [
        {
            id: 'drugs',
            label: 'Sim',
        },
        {
            id: 'notDrugs',
            label: 'Não',
        },
        ],
        value: ''
    },
    {
        id: "short-howLongDrugs",
        label: "Há quanto tempo?",
        radio_btns: [],
        value: "",
    },
    {
        id: "radio-group-frequency-drugsFr",
        label: "Frequência",
        radio_btns: [
        {
            id: 'OcasionalmenteDrugs',
            label: 'Ocasionalmente',
        },
        {
            id: 'SemanalmenteDrugs',
            label: 'Semanalmente',
        },
        {
            id: 'DiáriamenteDrugs',
            label: 'Diáriamente ',
        },
        {
            id: 'manyDrugs',
            label: 'Várias vezes ao dia',
        },
        ],
        value: ''
    },
    {
        id: "whichDrugs",
        label: "Qual/quais?",
        radio_btns: [],
        value: "Lorem ipsum dolor sit amet.",
    },
]

export default function BadHabitsTab () {

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
            Consumo/ingestão de bebidas alcoolicas e outras drogas
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
                if (input.id.indexOf('radio') == -1) {
                return (
                <div className={styles.TextWrapper} key={i}>
                        <label className={styles.Label} htmlFor={input.id}>
                        {input.label}
                        </label>
                        <textarea className={styles.Textarea}
                        style={input.id.indexOf('short') > -1 ? { "height" : "71px" } : { "height" : "330px" }} 
                        id={inputs[0].id} 
                        value={visible[i]}
                        ref={(input) => inputEls.current.push(input)}
                        onChange={(e) => changeInput(e.target.value, i)}
                        disabled/>
                    </div>
                )
                } else if (input.id.indexOf('radio') > -1){
                return (
                    <div className={styles.TextWrapper} key={input.id}>
                        <p className={styles.Label}>{input.label}</p>
                        <div className={styles.radio_btns}>
                        {input.radio_btns.map((btn) => {
                            return (
                            <div key={btn.id} className={styles.radio}>
                            <input type="radio" id={btn.id}
                            name={input.id} value={btn.label} 
                            ref={(input) => inputEls.current.push(input)}
                            disabled/>
                            <label className={styles.radio_label} htmlFor={btn.id}>{btn.label}</label>
                            </div>
                        )
                        })}
                        </div>
                    </div>
                )
                }        
            })
            }
        </div>
        </div>
    )}