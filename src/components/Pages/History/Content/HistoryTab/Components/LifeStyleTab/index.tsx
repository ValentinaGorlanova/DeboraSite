      import { useRef, useState } from 'react';

    import { TbEdit } from 'react-icons/tb'
    
    import styles from '../styles.module.scss'
    
    const inputs = [
        {
          id: "Numero",
          label: "Número de refeições ao dia",
          radio_btns: [],
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: "base",
          label: "Base da alimentação",
          radio_btns: [],
          value: "",
        },
        {
          id: "dieta",
          label: "Dieta aproximada",
          radio_btns: [],
          value: "",
        },
        {
          id: "radio-group-sono",
          label: "Qualidade do sono",
          radio_btns: [
            {
              id: 'Péssimo',
              label: 'Péssimo',
            },
            {
              id: 'Ruim',
              label: 'Ruim',
            },
            {
              id: 'Razoavel',
              label: 'Razoavel',
            },
            {
              id: 'Bom',
              label: 'Bom',
            },
            {
              id: 'Ótimo',
              label: 'Ótimo',
            },
          ],
          value: ''
        },
        {
          id: "why",
          label: "Porquê?",
          radio_btns: [],
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "radio-group-fis",
          label: "Pratica atividade física?",
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
          id: "radio-group-frequency",
          label: "Frequência",
          radio_btns: [
            {
              id: 'Raramente',
              label: 'Raramente',
            },
            {
              id: 'UmaVez',
              label: 'Uma vez por semana',
            },
            {
              id: 'DuasEmais',
              label: 'Duas ou mais vezes por semana',
            },
            {
              id: 'Diáriamente ',
              label: 'Diáriamente ',
            },
          ],
          value: ''
        },
        {
          id: "why2",
          label: "Porquê?",
          radio_btns: [],
          value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]
    
    export default function LifeStyleTab () {
    
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
                Alimentação, sono e atividade física
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
                    <div className={styles.TextWrapper}>
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