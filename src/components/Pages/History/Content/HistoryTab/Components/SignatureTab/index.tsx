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
          id: "prof",
          label: "Profissão",
          value: "Debora Barros",
          pattern: /[\d]/,
        },
        {
            id: "signature",
            label: "Assinatura Digital",
            value: "Debora Barros",
            pattern: /[\d]/,
          },
      ]
    
    export default function SignatureTab () {
    
        const [visible, setVisible] = useState<string[]>(inputs.map(input => input.value));
        const inputEls = useRef(new Array());
    
    
        return (
            <div className={styles.tabContent}>
                <h3  className={styles.title}>
                    <button className={styles.save}>
                        Salvar
                    </button>
                </h3>
                <div className={styles.flex_block}>
                    <div className={styles.InputWrapper}>
                            <label className={styles.Label} htmlFor={inputs[0].id}>                           
                            {inputs[0].label}
                            </label>
                            <input className={styles.Input} 
                            style={{ 
                                "color": "#3C3C3C" ,
                                "textAlign": "center",
                                "marginBottom": "95px"
                            }}
                            type="text" id={inputs[0].id} 
                            value={visible[0]}
                            ref={(input) => inputEls.current.push(input)}
                            // onChange={(e) => changeInput(e.target.value.replace(inputs[0].pattern, ''), 0)}
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